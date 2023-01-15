import io
import os

# Imports the Google Cloud client library
from google.cloud import vision


# Identifies our Google Cloud API Credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'key.json'

# Instantiates a client
client = vision.ImageAnnotatorClient()

# Assume the name of the target file is note.png
file_name = os.path.abspath('note.jpg')

# Loads the image into memory
with io.open(file_name, 'rb') as image_file:
    content = image_file.read()

image = vision.Image(content=content)

# Performs label detection on the image file
response = client.document_text_detection(image=image)
document = response.full_text_annotation

breaks = vision.TextAnnotation.DetectedBreak.BreakType


class FeatureType(Enum):
    PAGE = 1
    BLOCK = 2
    PARA = 3
    WORD = 4
    SYMBOL = 5


for page in document.pages:
    for block in page.blocks:
        for paragraph in block.paragraphs:
            paragraph_text = ""
            for word in paragraph.words:
                for symbol in word.symbols:
                    paragraph_text = paragraph_text + symbol.text
                    if symbol.property.detected_break.type:
                        if symbol.property.detected_break.type == breaks.SPACE:
                            paragraph_text = paragraph_text + " "
                        elif symbol.property.detected_break.type == breaks.LINE_BREAK:
                            paragraph_text = paragraph_text + '\n'
                        elif symbol.property.detected_break.type == breaks.EOL_SURE_SPACE:
                            paragraph_text = paragraph_text + "\n"
            print("-------------------------\n", paragraph_text)
