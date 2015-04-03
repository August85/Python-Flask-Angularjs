import os
from flask import Flask
from flask.ext import restful

basedir = os.path.join(os.path.abspath(os.path.dirname(__file__)), '../')
ASSETS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../static/app')

app = Flask(__name__, template_folder=ASSETS_DIR, static_folder=ASSETS_DIR)
app.config.from_object('app.config')

# flask-restful
api = restful.Api(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Content-Disposition')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

import Main


