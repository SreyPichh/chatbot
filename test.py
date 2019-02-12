from google.oauth2 import service_account
from google.cloud import texttospeech
import os
import json

def synthesize_text(text):
    """Synthesizes speech from the input string of text."""

    input_text = texttospeech.types.SynthesisInput(text=text)

    # Note: the voice can also be specified by name.
    # Names of voices can be retrieved with client.list_voices().
    voice = texttospeech.types.VoiceSelectionParams(
        language_code='en-US',
        ssml_gender=texttospeech.enums.SsmlVoiceGender.FEMALE)

    audio_config = texttospeech.types.AudioConfig(
        audio_encoding=texttospeech.enums.AudioEncoding.MP3)

    response = client.synthesize_speech(input_text, voice, audio_config)

    # The response's audio_content is binary.
    with open('output.mp3', 'wb') as out:
        out.write(response.audio_content)
        print('Audio content written to file "output.mp3"')

# Read env data
credentials_raw = os.environ.get('GOOGLE_APPLICATION_CREDENTIALS')

# Generate credentials
service_account_info = json.loads(credentials_raw)
credentials = service_account.Credentials.from_service_account_info(
    service_account_info)

# Define a client, in this case Google's text to speech
client = texttospeech.TextToSpeechClient(credentials=credentials)

# Test client
synthesize_text("hello world")