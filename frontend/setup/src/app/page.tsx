'use client'

import styles from "./page.module.css";
import CardList from "../components/Cards/CardList"
import Link from 'next/link'
import useIndex from "@/data/hooks/pages/useIndex.page";


export default function Home() {
  const { cards, cardsToStudy } = useIndex();

  return (
    <main className={styles.container}>
      
        <h2>Cards to study</h2>
        {/* Lista de cartões */}
        <p>We have <strong>{cardsToStudy}</strong> cards to study.</p>
        

        <div style={{ marginTop: 15, marginBottom: 15, }}>
          <Link className={styles.buttonDesign2} href={"/study"}>Study now</Link>
          <Link className={styles.buttonDesign1} href={"/cards/add"}>Add Card</Link>
        </div>

      <CardList cards={cards} />

    </main>
  );
}
