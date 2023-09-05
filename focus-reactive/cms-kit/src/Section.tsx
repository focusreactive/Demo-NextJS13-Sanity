import React, { Children } from 'react';

type Props = {};

const Section = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <section style={{ background: '#149e98' }}>
      <div style={{ margin: '30px 200px', background: '#1fc1ba' }}>{children}</div>
    </section>
  );
};

export default Section;
