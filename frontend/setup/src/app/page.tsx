'use client'

import useCards from "@/data/hooks/pages/useCards.page";
import styles from "./page.module.css";
import CardList from "../components/Cards/CardList"
import Link from 'next/link'


export default function Home() {
  const { infos } = useCards();

  return (
    <main className={styles.container}>
      
        <h2>Cards to study</h2>
        {/* Lista de cartões */}
        <p>We have <strong>{infos.cardsToStudy}</strong> cards to study.</p>
        

        <div style={{ marginTop: 15, marginBottom: 15, }}>
          <Link className={styles.buttonDesign2} href={"/study"}>Study now</Link>
          <Link className={styles.buttonDesign1} href={"/cards/add"}>Add Card</Link>
        </div>

      <CardList cards={infos.cards} />

    </main>
  );
}
