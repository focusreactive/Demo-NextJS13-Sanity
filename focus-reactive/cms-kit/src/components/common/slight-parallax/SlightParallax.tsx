import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import useScrollListener from '../../../hooks/useScroll';

const calc = (amplitude: any) => (o: any) => `translateY(${o * amplitude}px)`;

const SlightParallax = ({ children, disabled, amplitude = 0.06, ...rest }: any) => {
  const {
    inView,
    ref: inViewRef,
    entry,
  } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const scrollHandler = () => {
    if (inView && !disabled && entry) {
      const { top, bottom, height } = entry.target.getBoundingClientRect();
      set({
        offset: -(top + bottom + height) / 3,
      });
    }
  };

  useEffect(() => {
    if (!disabled && entry && inView) {
      const { top, bottom, height } = entry.target.getBoundingClientRect();
      set({
        offset: -(top + bottom + height) / 3,
      });
    }
  }, [entry, inView]);

  useScrollListener(scrollHandler);

  return (
    <animated.div
      style={{
        transform: offset.interpolate(calc(amplitude)),
      }}
      ref={inViewRef}
      {...rest}
    >
      {children}
    </animated.div>
  );
};

export default SlightParallax;
