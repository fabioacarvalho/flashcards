from flask_restful import Resource
from ..schemas import card_schema
from flask import request, make_response, jsonify
from ..entidades import card
from ..services import card_service
from api import api


class CardList(Resource):
    def get(self):
        cards = card_service.list_cards()
        cs = card_schema.CardSchema(many=True)
        return make_response(cs.jsonify(cards), 200)

    def post(self):
        cs = card_schema.CardSchema()
        validate = cs.validate(request.json)

        if validate:
            return make_response(jsonify(validate), 400)
        else:
            lastLevel = request.json["lastLevel"]
            front = request.json["front"]
            back = request.json["back"]
            content = request.json["content"]
            picture = request.json["picture"]
            daysLastView = request.json["daysLastView"]
            updatedAt = request.json["updatedAt"]
            nextView = request.json["nextView"]
            study = request.json["study"]

            new_card = card.Card(lastLevel=lastLevel, front=front, back=back, content=content, picture=picture, daysLastView=daysLastView, updatedAt=updatedAt, nextView=nextView, study=study)

            result = card_service.add_card(new_card)
            return make_response(cs.jsonify(result), 201)


class CardDetail(Resource):
    def get(self, id):
        card = card_service.get_card_id(id)
        if card is None:
            return make_response(jsonify("Card not found"), 404)
        
        cs = card_schema.CardSchema()
        return make_response(cs.jsonify(card), 200)

    def delete(self, id):
        card = card_service.get_card_id(id)
        if card is None:
            return make_response(jsonify("Card not found"), 404)
        
        card_service.delete_card(card)
        return make_response('', 204)
    
    def put(self, id):
        current_card = card_service.get_card_id(id)
        if current_card is None:
            return make_response(jsonify("Card not found"), 404)
        
        cs = card_schema.CardSchema()
        validate = cs.validate(request.json)

        if validate:
            return make_response(jsonify(validate), 400)
        else:
            lastLevel = request.json["lastLevel"]
            front = request.json["front"]
            back = request.json["back"]
            content = request.json["content"]
            picture = request.json["picture"]
            daysLastView = request.json["daysLastView"]
            updatedAt = request.json["updatedAt"]
            nextView = request.json["nextView"]
            study = request.json["study"]

            edited_card = card.Card(lastLevel=lastLevel, front=front, back=back, content=content, picture=picture, daysLastView=daysLastView, updatedAt=updatedAt, nextView=nextView, study=study)

            result = card_service.update_card(current_card, edited_card)
            return make_response(cs.jsonify(result), 201)
    
    
api.add_resource(CardList, '/cards')
api.add_resource(CardDetail, '/card/<int:id>')
