import { client } from '@/app/client';
import { Advertise, Capabilities, Customers, Section, Sponsors } from '@/focus-reactive/cms-kit';
import groq from 'groq';

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
    <main>
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
