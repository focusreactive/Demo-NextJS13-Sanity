import React from 'react';
import Section from '../Section';

type Props = {};

export const ComponentA = (props: Props) => {
  return (
    <Section>
      <h3>ComponentA</h3>
      <p>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </p>
    </Section>
  );
};
