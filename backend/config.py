import os
from dotenv import load_dotenv

load_dotenv()

USERNAME = 'root'
PASSWORD = 'root'
SERVER = 'db'
DB = 'flashcards'

SQLALCHEMY_DATABASE_URI = f'mysql://{USERNAME}:{PASSWORD}@{SERVER}/{DB}'
# SQLALCHEMY_DATABASE_URI = "mysql://root:root@db:3306/flashcards"
SQLALCHEMY_TRACK_MODIFICATIONS = True

SECRET_KEY = 'hkj4h32jl423j4kh234uj23l4hl4h2lku423@bhlb#BLjklbhjbLJ3B3jbljb2'
