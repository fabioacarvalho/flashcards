'use client'
 
import { useState } from 'react'
import { Card } from "@/data/@types/CardInterface";
import styles from "./CardList.module.css"

export function CardListItem({ card }: { card: Card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <div className={styles.cardContainer} onClick={handleFlip}>
            <div className={`${styles.cardBody} ${isFlipped ? styles.flipped : ""}`}>
                {/* Frente do Card */}
                <div className={styles.cardFront}>
                    <h2>{card.front}</h2>
                </div>
                {/* Verso do Card */}
                <div className={styles.cardBack}>
                    <div>
                        <p>{card.back}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}