// Edit this file to update the site's text, projects, tags and links.
// Summaries are based on public GitHub READMEs, not performance claims.
export const portfolio = {
  name: 'zhaocun', github: 'https://github.com/cosmopolitan033',
  headline: ['I build intelligent systems', 'and interactive experiences.'],
  about: 'I’m Zhaocun Sun. My work explores the space between intelligent software and the systems behind it — from offline voice assistants to space-air-ground network simulation and distributed computing. I enjoy turning complex ideas into something you can actually explore.',
  education: 'Pursuing a master’s at Trinity College Dublin · Open to collaboration',
  focus: [
    { title: 'Applied AI', description: 'Language models, voice interfaces and offline intelligence.' },
    { title: 'Distributed Systems', description: 'Exploring how independent nodes coordinate and compute.' },
    { title: 'Interactive Development', description: 'Bringing software ideas to life through web and app experiences.' },
  ],
  projects: [
    { title: 'ORBIT', category: 'CINEMATIC WEBGL', art: 'orbit', image: '/showcases/orbit.jpg',
      description: 'An imagined world, rendered live. A cinematic journey through a procedural planet, shifting viewpoints and orbital motion.',
      detail: 'A personal creative development experiment by zhaocun. Explore a real-time Three.js planet, move through a scroll-controlled camera journey, and choose your own orbit. The camera timeline builds on JosephASG’s MIT-licensed Codrops demo; the planetary visuals, interface and content were created for this study.',
      tags: ['Three.js', 'GLSL', 'GSAP'], url: 'https://github.com/cosmopolitan033/zhaocun-orbit', liveUrl: 'https://zhaocun-orbit.netlify.app' },
    { title: 'CURRENT', category: 'INTERACTIVE COLOR LAB', art: 'current', image: '/showcases/current.jpg',
      description: 'A living canvas shaped by your movement. Paint with light, change the mood, and save a composition that only happens once.',
      detail: 'A personal fluid-art playground by zhaocun. Change palettes, control the energy, pause the motion or enter a full-screen canvas and create your own composition. Built on Pavel Dobryakov’s MIT-licensed WebGL Fluid Simulation, with a new interface, art direction and interaction layer.',
      tags: ['WebGL', 'Fluid Dynamics', 'Creative Coding'], url: 'https://github.com/cosmopolitan033/zhaocun-current', liveUrl: 'https://zhaocun-current.netlify.app' },
    { title: 'FORME', category: 'EDITORIAL MOTION', art: 'forme', image: '/showcases/forme.jpg',
      description: 'A different way of seeing. An editorial visual study where typography, photography and scroll-driven composition unfold together.',
      detail: 'An editorial interface and motion study by zhaocun. Explore a transforming image gallery, filter the visual archive, and open individual studies. Scroll transitions adapt Codrops’ MIT-licensed Flip gallery. Curated Pexels photographs retain their original creator credits; this is a frontend design experiment, not a photography commission.',
      tags: ['GSAP Flip', 'Scroll Animation', 'Art Direction'], url: 'https://github.com/cosmopolitan033/zhaocun-forme', liveUrl: 'https://zhaocun-forme.netlify.app' },
  ],
  contact: 'Interested in building something together? Explore my code and connect with me through GitHub.',
};
