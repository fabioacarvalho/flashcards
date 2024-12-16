'use client'

import useIndex from "@/data/hooks/pages/useIndex.page";
import { Card } from "@/data/@types/CardInterface";
import { CardListItem } from "@/components/Cards/CardListItem";
import styles from "../global.module.css"
import Link from 'next/link';

export default function Page() {
    const { cards, cardsToStudy, handleUpdateCard } = useIndex();


    // Função para verificar e selecionar o card
    function handleCards(cards: Card[] | undefined) {
        const cardsFiltered = cards.filter((el => el.study == true))
        if (!Array.isArray(cards) || cardsFiltered.length === 0) {
            return null; // Nenhum card disponível
        }

        const randomIndex = Math.floor(Math.random() * cardsFiltered.length);
        return cardsFiltered[randomIndex];
    };

    const selectedCard = handleCards(cards);
    
    if (!selectedCard) {
        return <div>Card not found</div>;
    };

    const handleLevel = (level: number) => () => {
        if(level == 1){
            const arr = {
                id: selectedCard.id,
                lastLevel: 'easy',
                front: selectedCard.front,
                back: selectedCard.back,
                updatedAt: selectedCard.updatedAt,
                createdAt: selectedCard.createdAt,
                picture: selectedCard.picture,
                nextView: selectedCard.nextView,
                daysLastView: selectedCard.daysLastView,
                content: selectedCard.content,
                study: false,
            }
            handleUpdateCard(arr)
            location.reload()
        } else if(level == 2){
            const arr = {
                id: selectedCard.id,
                lastLevel: 'good',
                front: selectedCard.front,
                back: selectedCard.back,
                updatedAt: selectedCard.updatedAt,
                createdAt: selectedCard.createdAt,
                picture: selectedCard.picture,
                nextView: selectedCard.nextView,
                daysLastView: selectedCard.daysLastView,
                content: selectedCard.content,
                study: false,
            }
            handleUpdateCard(arr)
        } else if(level == 3){
            const arr = {
                id: selectedCard.id,
                lastLevel: 'hard',
                front: selectedCard.front,
                back: selectedCard.back,
                updatedAt: selectedCard.updatedAt,
                createdAt: selectedCard.createdAt,
                picture: selectedCard.picture,
                nextView: selectedCard.nextView,
                daysLastView: selectedCard.daysLastView,
                content: selectedCard.content,
                study: false,
            }
            handleUpdateCard(arr)
        }

    };

    return (
        <div>
            <div className={styles.container} style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 30 }}>
            <h2>Cards: {cardsToStudy}</h2>
                <Link className={styles.buttonDesign2} href={"/"}>Go home</Link>
            </div>

            <CardListItem card={selectedCard} />

            <div className={styles.containerButtons}>
                <button onClick={handleLevel(1)} className={styles.buttonDesign3}>Easy</button>
                <button onClick={handleLevel(2)} className={styles.buttonDesign3}>Good</button>
                <button onClick={handleLevel(3)} className={styles.buttonDesign3}>Hard</button>
                <button onClick={handleLevel(4)} className={styles.buttonDesign3}>I don't remember</button>
            </div>
        </div>
    );
}