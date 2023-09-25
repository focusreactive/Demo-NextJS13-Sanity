'use client';

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { InView } from 'react-intersection-observer';

export const BASE_PROPS = {
  to: { opacity: 1, y: 0, scale: 1 },
  from: { opacity: 0, y: 20, scale: 0.95 },
  config: {
    mass: 1,
    tension: 95,
    friction: 12,
  },
};

const FloatUpComponent = ({ children, animationProps = BASE_PROPS, tag = 'div', delay = 0, ...rest }: any) => {
  const props = useSpring({
    ...animationProps,
    delay,
  });

  const Component = animated[tag as keyof typeof animated];

  return (
    <Component {...rest} style={{ willChange: 'opacity, scale, transform, top', ...props }}>
      {children}
    </Component>
  );
};

const FloatUp = (props: any) => {
  const { onlyAnimated = true } = props;
  if (onlyAnimated) {
    return (
      <InView triggerOnce>
        {({ inView, ref }) => {
          return (
            <div ref={ref}>
              {inView ? <FloatUpComponent {...props} /> : <div style={{ opacity: 0 }}>{props.children}</div>}
            </div>
          );
        }}
      </InView>
    );
  }

  return (
    <InView triggerOnce>
      {({ inView, ref }) => {
        return <div ref={ref}>{inView ? <FloatUpComponent {...props} /> : props.children}</div>;
      }}
    </InView>
  );
};

export default FloatUp;
