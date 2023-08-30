import styles from './page.module.css';
import {client} from "@/app/client";
import groq from "groq";

export default async function Home() {
  const query = groq`*[_type == "cardsSection"]`;
  const cards = await client.fetch(query, {}, {
    next: {
      revalidate: 30
    }
  });

  return <main className={styles.main}><pre>{JSON.stringify(cards, null, 4)}</pre></main>;
}
