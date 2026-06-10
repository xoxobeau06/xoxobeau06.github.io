const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced && window.gsap) {
  const stems = gsap.utils.toArray('.flower, .blade');

  /* 1. Grow in from the ground on page load —
     scale up from the soil with a gentle overshoot,
     in random order across the field. */
  gsap.from(stems, {
    scaleY: 0,
    scaleX: 0.6,
    transformOrigin: '50% 100%',
    duration: 1.1,
    ease: 'back.out(1.6)',
    stagger: { each: 0.07, from: 'random' }
  });

  /* 2. Then sway forever — every stem gets its own
     starting lean, arc, speed, and phase so the breeze
     feels organic instead of mechanical. */
  stems.forEach((stem) => {
    gsap.set(stem, {
      rotation: gsap.utils.random(-2.6, -1.4),
      transformOrigin: '50% 100%'
    });
    gsap.to(stem, {
      rotation: gsap.utils.random(1.4, 2.6),
      duration: gsap.utils.random(2.2, 3.6),
      delay: gsap.utils.random(0, 1.2),
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });
  });
}