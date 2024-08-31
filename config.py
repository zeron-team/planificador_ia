import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or '7899784eaec0c6f9933159debce762dd1ce621741b0858ba'
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY') or 'REDACTED'
