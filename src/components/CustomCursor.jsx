import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 35, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 450, damping: 35, mass: 0.2 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (coarse) return undefined;

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const enterInteractive = () => setActive(true);
    const leaveInteractive = () => setActive(false);

    window.addEventListener('mousemove', move);
    const interactive = document.querySelectorAll('a, button, input, textarea, select');
    interactive.forEach((element) => {
      element.addEventListener('mouseenter', enterInteractive);
      element.addEventListener('mouseleave', leaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactive.forEach((element) => {
        element.removeEventListener('mouseenter', enterInteractive);
        element.removeEventListener('mouseleave', leaveInteractive);
      });
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className={`custom-cursor ${active ? 'is-active' : ''}`}
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}
