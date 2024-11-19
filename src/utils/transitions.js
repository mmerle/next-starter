export const easeOutExpo = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export const blurReveal = {
  initial: { opacity: 0, width: 0, filter: 'blur(6px)' },
  animate: { opacity: 1, width: 'fit-content', filter: 'blur(0px)' },
  exit: { opacity: 0 },
};
