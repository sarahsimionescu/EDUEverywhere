from flask import Flask, render_template, request, url_for, jsonify
from flask_cors import CORS, cross_origin
from PIL import Image
import io
import base64

app = Flask(__name__)

cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['POST'])
@cross_origin()
def image_upload():
    input_json = request.get_json()
    imagestr = input_json['myFile']
    print(imagestr)
    img = Image.open(io.BytesIO(
        base64.decodebytes(bytes(imagestr, "utf-8") + b'==')))
    img.save('my-image.jpeg')
    dictToReturn = {'answer': 97}
    return jsonify(dictToReturn)

# flask --app server run
