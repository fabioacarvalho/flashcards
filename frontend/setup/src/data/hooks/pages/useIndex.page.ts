import { useState, useEffect } from "react";
import { Card } from "@/data/@types/CardInterface";
import { ApiService } from "@/services/ApiService";

export default function useIndex() {
    // const cards: Card[] = [];
    const [cards, setCards] = useState<Card[]>([]);
    const [cardsToStudy, setCardsToStudy] = useState(0)


    const handleApiService = () => {
        ApiService.get('/cards')
        .then((response) => {
            setCards(response.data);
            updateInfos(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error); // Exiba erros
        });
    };

    async function updateInfos(value){
        const thereInfos = await value.filter((card) => card.study == true)
        const result = thereInfos ? thereInfos.length : 0
        setCardsToStudy(result)
      };

    useEffect(() => {
        handleApiService();
    }, []);

    return { cards, cardsToStudy };
}