# pipenv install google-cloud-translate==2.0.1

import os
from google.oauth2 import service_account
from google.cloud import translate_v2 as translate

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'translate_key.json'
translate_client = translate.Client()


def translate_text(data, in_language="ko", out_language="en"):

    translated_dict = translate_client.translate(
        data, target_language=out_language, format_='text', source_language=in_language, model='base')

    return translated_dict['translatedText']
