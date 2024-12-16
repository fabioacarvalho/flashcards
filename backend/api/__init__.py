from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('config')
CORS(app)


db = SQLAlchemy(app)
ma = Marshmallow(app)
mi = Migrate(app, db)

api = Api(app)

from .models import card_model
from .views import card_view

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)
