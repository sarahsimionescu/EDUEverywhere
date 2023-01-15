import io
import os
from enum import Enum
from PIL import Image, ImageDraw, ImageFont

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


def draw_cover_box(image, bounds, color):
    """Draw a border around the image using the hints in the vector list."""
    draw = ImageDraw.Draw(image)

    for bound in bounds:
        draw.polygon(
            [
                bound.vertices[0].x,
                bound.vertices[0].y,
                bound.vertices[1].x,
                bound.vertices[1].y,
                bound.vertices[2].x,
                bound.vertices[2].y,
                bound.vertices[3].x,
                bound.vertices[3].y,
            ],
            color,
            color,
        )
        #myFont = ImageFont.truetype('IndieFlower-Regular.ttf', 10)
        #draw.text((bound.vertices[0].x, bound.vertices[0].y), "Sample text", font=myFont, fill=(255, 0, 0))
    return image


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
