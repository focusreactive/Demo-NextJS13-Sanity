import styles from './page.module.scss';
import { client } from '@/app/client';
import groq from 'groq';

import { Sponsors } from '@/focus-reactive/cms-kit/src/components/sponsors/Sponsors';
import { Advertise } from '@/focus-reactive/cms-kit/src/components/advertise/Advertise';
import Section from '@/focus-reactive/cms-kit/src/components/section/Section';
import { Capabilities } from '@/focus-reactive/cms-kit/src/components/capabilities/Capabilities';
import { Customers } from '@/focus-reactive/cms-kit/src/components/customers/Customers';

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
      <Section isLight radius="top-left" neighborBg="#323F8A">
        <Sponsors />
        <Advertise positionImg="left" />
      </Section>
      <Section radius="bottom-left" neighborBg="#ffffff">
        <Capabilities />
      </Section>
      <Section isLight>
        <Customers />
      </Section>
    </main>
  );
}
