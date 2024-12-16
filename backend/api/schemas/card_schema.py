from api import ma
from ..models import card_model
from marshmallow import fields


class CardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = card_model.Card
        laod_instance = True
    
    lastLevel = fields.String(required=False)
    front = fields.String(required=True)
    back = fields.String(required=True)
    content = fields.String(required=False)
    picture = fields.String(required=False)
    daysLastView = fields.Integer(required=False)
    study = fields.Boolean(missing=True)  # Use missing=True para garantir que tenha valor padrão
    updatedAt = fields.Date(required=False)
    nextView = fields.Date(required=False)
