import io
import os
from PIL import Image, ImageDraw, ImageFont
from enum import Enum
import io

from google.cloud import vision

# Identifies our Google Cloud API Credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'vision_key.json'

# Establish encodings for feature types (from Google Cloud)


class FeatureType(Enum):
    PAGE = 1
    BLOCK = 2
    PARA = 3
    WORD = 4
    SYMBOL = 5


def draw_boxes(image, bounds, color):
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


# [START vision_document_text_tutorial_detect_bounds]
def get_document_bounds(image_file, feature):
    """Returns document bounds given an image."""
    client = vision.ImageAnnotatorClient()

    bounds = []

    with io.open(image_file, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.document_text_detection(image=image)
    document = response.full_text_annotation

    # Collect specified feature bounds by enumerating all document features
    for page in document.pages:
        for block in page.blocks:
            for paragraph in block.paragraphs:
                for word in paragraph.words:
                    for symbol in word.symbols:
                        if feature == FeatureType.SYMBOL:
                            bounds.append(symbol.bounding_box)

                    if feature == FeatureType.WORD:
                        bounds.append(word.bounding_box)

                if feature == FeatureType.PARA:
                    bounds.append(paragraph.bounding_box)

            if feature == FeatureType.BLOCK:
                bounds.append(block.bounding_box)

    # The list `bounds` contains the coordinates of the bounding boxes.
    return bounds
# [END vision_document_text_tutorial_detect_bounds]


def render_doc_text(filein, fileout):
    image = Image.open(filein)
    image = image.convert("RGB")
    bounds = get_document_bounds(filein, FeatureType.BLOCK)
    #draw_boxes(image, bounds, "blue")
    bounds = get_document_bounds(filein, FeatureType.PARA)
    draw_boxes(image, bounds, "#dcdcdc")
    bounds = get_document_bounds(filein, FeatureType.WORD)
    # draw_boxes(image, bounds, "#a3a099")

    if fileout != 0:
        image.save(fileout)
    else:
        image.show()


render_doc_text("note.jpg", "out.jpg")
