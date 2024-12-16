'use client'

import useIndex from "@/data/hooks/pages/useIndex.page";
import { Card } from "@/data/@types/CardInterface";
import { CardListItem } from "@/components/Cards/CardListItem";
import styles from "../global.module.css"
import Link from 'next/link';

export default function Page() {
    const { cards, cardsToStudy } = useIndex();

    // Função para verificar e selecionar o card
    function handleCards(cards: Card[] | undefined) {
        if (!Array.isArray(cards) || cards.length === 0) {
            return null; // Nenhum card disponível
        }
        return cards[1]; // Retorna o primeiro card
    };

    const selectedCard = handleCards(cards);

    if (!selectedCard) {
        return <div>Card not found</div>;
    };

    const handleLevel = (level: number) => () => {
        // Atualizar nível do card
        console.log(`Level ${level} clicked`);
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