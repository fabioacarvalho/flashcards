from api import db
from datetime import date


class Card(db.Model):
    __tablename__ = "card"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    lastLevel = db.Column(db.String(100), nullable=False)
    front = db.Column(db.String(250), nullable=False)
    back = db.Column(db.String(250), nullable=False)
    content = db.Column(db.String(250), nullable=True)
    picture = db.Column(db.String(250), nullable=True)
    daysLastView = db.Column(db.Integer, nullable=False)
    study = db.Column(db.Boolean, default=True)  # Booleano com padrão True
    created_at = db.Column(db.Date, nullable=False, default=date.today)
    updatedAt = db.Column(db.Date, nullable=True, default=date.today)
    nextView = db.Column(db.Date, nullable=True, default=date.today)

    def __init__(self, lastLevel, front, back, daysLastView, study=True, content=None, picture=None, updatedAt=None, nextView=None):
        self.lastLevel = lastLevel
        self.front = front
        self.back = back
        self.daysLastView = daysLastView
        self.study = study
        self.content = content
        self.picture = picture
        self.updatedAt = updatedAt or date.today()
        self.nextView = nextView or date.today()
