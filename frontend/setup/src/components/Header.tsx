import Link from "next/link";
import styles from "../app/page.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <Link href={"/"}>Flashcards</Link>
            </h1>
        </header>
    );
}
