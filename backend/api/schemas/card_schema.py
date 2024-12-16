from api import ma
from ..models import card_model
from marshmallow import fields


class CardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = card_model.Card
        laod_instance = True
    
    lastLevel = fields.String(required=True)
    front = fields.String(required=True)
    back = fields.String(required=True)
    content = fields.String(required=False)
    picture = fields.String(required=False)
    daysLastView = fields.Integer(required=True)
    study = fields.Boolean(required=False)
    updatedAt = fields.Date(required=True)
    nextView = fields.Date(required=True)
    