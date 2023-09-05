import styles from './page.module.css';
import { client } from '@/app/client';
import groq from 'groq';
import { ComponentA } from '@/cms-kit/src';

export default async function Home() {
  const query = groq`*[_type == "cardsSection"]`;
  const cards = await client.fetch(
    query,
    {},
    {
      next: {
        revalidate: 30,
      },
    }
  );

  return (
    <main className={styles.main}>
      <ComponentA content={cards} />
    </main>
  );
}
