'use client'
 
import { Card } from "@/data/@types/CardInterface";
import { CardListItem } from "./CardListItem";

export default function CardList({ cards }: { cards: Card[]}) {
    return (
        <div>
            
            {cards.map((card) => {
                return <CardListItem key={card.id} card={card} />
            })}

        </div>
    )
}