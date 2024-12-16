import { useState, useEffect } from "react";
import { Card } from "@/data/@types/CardInterface";
import { ApiService } from "@/services/ApiService";

export default function useIndex() {
    // const cards: Card[] = [];
    const [cards, setCards] = useState<Card[]>([]);
    const [cardsToStudy, setCardsToStudy] = useState(0)
    const [cardEdited, setCardEdited] = useState({})


    const handleGetCards = () => {
        ApiService.get('/cards')
        .then((response) => {
            setCards(response.data);
            updateInfos(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error); // Exiba erros
        });
    };

    const handleUpdateCard = (card) => {
        if (cardEdited !== null){
            ApiService.put(`/card/${card.id}`, card).then(() => {
                handleGetCards()
                return {refresh: true, ok: 'OK'}
            }).catch((error) => {
                alert(error.response?.data.message)
            })
        } else {
            alert("Something wrong, try again or contact suport team.")
        }
    };

    async function updateInfos(value){
        const thereInfos = await value.filter((card) => card.study == true)
        const result = thereInfos ? thereInfos.length : 0
        setCardsToStudy(result)
      };

    useEffect(() => {
        handleGetCards();
    }, []);

    return { cards, cardsToStudy, cardEdited, setCardEdited, handleUpdateCard };
}