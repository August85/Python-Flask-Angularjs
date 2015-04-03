import os

from flask.ext import restful
from server import api, app
from flask import send_from_directory

HTML_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../static')


class Hello(restful.Resource):
    def get(self):
        return "hello there", 200


class Home(restful.Resource):
    def get(self):
        #return send_from_directory(basedir + "/Documents/AttributionAgent/static", 'index.html')
        return send_from_directory(HTML_DIR, 'index.html')
        #return render_template('index.html')
        #return make_response(open(basedir + '/Documents/AttributionAgent/templates/index.html').read())

api.add_resource(Hello, '/Hello')
api.add_resource(Home, '/')