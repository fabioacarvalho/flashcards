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


def get_card_id(id):
    card = card_model.Card.query.filter_by(id=id).first()
    return card


def delete_card(card):
    db.session.delete(card)
    db.session.commit()


def update_card(current_card, edited_card):

    current_card.lastLevel = edited_card.lastLevel 
    current_card.front = edited_card.front 
    current_card.back = edited_card.back 
    current_card.daysLastView = edited_card.daysLastView 
    current_card.study = edited_card.study
    current_card.content = edited_card.content
    current_card.picture = edited_card.picture
    current_card.updatedAt = edited_card.updatedAt
    current_card.nextView = edited_card.nextView
    
    db.session.commit()
    return current_card
