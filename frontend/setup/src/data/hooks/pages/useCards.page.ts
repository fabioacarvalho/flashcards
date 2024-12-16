import useIndex from "@/data/hooks/pages/useIndex.page";
import { useState, useEffect } from 'react'



export default function useCards() {
    const { cards } = useIndex()
    const [infos, setInfos] = useState({                
        cardsToStudy: 0,
        cards: cards,
    })

    function updateInfos(){
        const thereInfos = cards.filter((card) => card.study == true)

        console.log("Passei...: " + cards)

        setInfos(thereInfos ? { cards: cards, cardsToStudy: thereInfos.length } : { cards: cards, cardsToStudy: 0 })
    }

    useEffect(() => {
        updateInfos()
    }, [])

    return { infos };
}