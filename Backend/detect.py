import io
import os
from enum import Enum
from PIL import Image, ImageDraw, ImageFont
import translate_text

# Imports the Google Cloud client library
from google.cloud import vision


# Identifies our Google Cloud API Credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'vision_key.json'

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


output_image = Image.open("note.jpg")
output_image = output_image.convert("RGB")


def draw_cover_box(image, bounds, color, string):
    """Draw a border around the image using the hints in the vector list."""
    draw = ImageDraw.Draw(image)

    draw.polygon(
        [
            bounds.vertices[0].x,
            bounds.vertices[0].y,
            bounds.vertices[1].x,
            bounds.vertices[1].y,
            bounds.vertices[2].x,
            bounds.vertices[2].y,
            bounds.vertices[3].x,
            bounds.vertices[3].y,
        ],
        color,
        color,
    )
    myFont = ImageFont.truetype('IndieFlower-Regular.ttf', 20)
    draw.text((bounds.vertices[0].x, bounds.vertices[0].y),
              translate_text.translate_text(string), font=myFont, fill=(0, 0, 0))
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
            # print(paragraph_text)
            draw_cover_box(output_image, paragraph.bounding_box,
                           "#e0e0e0", paragraph_text)

output_image.save("out.jpg")
