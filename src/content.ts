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
    { title: 'CURRENT', category: 'IMMERSIVE NIGHT DRIVE', art: 'current', image: '/showcases/current-v2.png',
      description: 'An imagined night drive through a neon city. Chase the horizon, change the atmosphere, and accelerate into an immersive world of light.',
      detail: 'A personal 3D driving experience by zhaocun. Explore a procedural neon city, a curved highway and continuous light trails. Switch between three atmospheres, engage warp speed, pause the motion or enter a distraction-free view. Built with Three.js, custom shaders and bloom post-processing; all scenery is generated in code.',
      tags: ['Three.js', 'GLSL', 'Post-processing'], url: 'https://github.com/cosmopolitan033/zhaocun-current', liveUrl: 'https://zhaocun-current.netlify.app' },
    { title: 'FORME', category: 'DIGITAL SCULPTURE GARDEN', art: 'forme', image: '/showcases/forme-v2.png',
      description: 'A digital sculpture garden where form comes alive. Explore floating sculptures, reflective surfaces and an architectural space shaped by light.',
      detail: 'A personal digital sculpture garden by zhaocun. Move between three procedural forms, explore chrome, copper and porcelain surfaces, and drag to rotate in immersive mode. Three.js physical materials, studio reflections, soft contact shadows and architectural arches create a real-time exhibition. All sculptures and scenery are generated in code.',
      tags: ['Three.js', 'Physical Materials', 'Creative Coding'], url: 'https://github.com/cosmopolitan033/zhaocun-forme', liveUrl: 'https://zhaocun-forme.netlify.app' },
  ],
  contact: 'Interested in building something together? Explore my code and connect with me through GitHub.',
};
