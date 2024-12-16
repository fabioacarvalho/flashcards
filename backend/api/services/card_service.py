from ..models import card_model
from api import db


def add_card(card):
    card_db = card_model.Card(
        lastLevel=card.lastLevel, 
        front=card.front, 
        back=card.back, 
        daysLastView=card.daysLastView, 
        study=card.study,  # Este campo agora é opcional
        content=card.content,
        picture=card.picture,
        updatedAt=card.updatedAt,
        nextView=card.nextView
    )
    db.session.add(card_db)
    db.session.commit()
    return card_db


def list_cards():
    cards = card_model.Card.query.all()
    return cards
