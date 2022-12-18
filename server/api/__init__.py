"""Flask Application"""
from flask_cors import CORS
from api.v1.views import app_views
from flasgger import Swagger
from  flasgger.utils import swag_from
from flask_bcrypt import Bcrypt
# from flask_sqlalchemy import SQLAlchemy 
from flask import Flask, make_response, jsonify

"""Instantiate flask object """
app = Flask(__name__)

""" config to return a friendly json object """
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

"""Register the bluePrint for (/api/vi) route """
app.register_blueprint(app_views)

""" cors for /api/v1 """
cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

"""Config for swagger doc """
app.config['SWAGGER'] = {
    'title': 'Klinik Hospital Management System Restful API',
    'uiversion': 1
}
Swagger(app)

# """Config for database"""
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
# db = SQLAlchemy(app)
# db.init_app(app)

""" config for secret key"""
app.config['SECRET_KEY'] = 'sasdjshdjfsdk'

bcrypt = Bcrypt(app)


@app.errorhandler(404)
def not_found(error):
    """ 404 Error
    ---
    responses:
      404:
        description: a resource was not found
    """
    return make_response(jsonify({'error': "Not found"}), 404)

