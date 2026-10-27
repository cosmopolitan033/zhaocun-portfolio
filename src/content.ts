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
    { title: 'ORBIT', category: 'SPACE MISSION EXPERIENCE', art: 'orbit', image: '/showcases/orbit.jpg',
      description: 'An interactive space mission concept. Explore a ringed world, compare three flight profiles and build your own observation brief.',
      detail: 'An independent mission-design concept by zhaocun. Follow the Aster programme, explore a cinematic 3D planet, compare flight profiles and observation instruments, then export a personalised mission brief. Includes mission planning, a flight timeline and an observatory overview. Mission data is illustrative; the camera timeline builds on JosephASG’s MIT-licensed Codrops demo.',
      tags: ['Three.js', 'GLSL', 'GSAP'], url: 'https://github.com/cosmopolitan033/zhaocun-orbit', liveUrl: 'https://zhaocun-orbit.netlify.app' },
    { title: 'CURRENT', category: 'IMMERSIVE NIGHT DRIVE', art: 'current', image: '/showcases/current-v2.png',
      description: 'A digital driving escape with three imagined routes. Choose an atmosphere, plan a timed session and follow your progress through the neon city.',
      detail: 'An independent interactive driving product concept by zhaocun. Browse three curated visual routes, choose a 3, 6 or 12 minute session, cruise or engage warp, and export your actual session time. Route selection changes the live 3D atmosphere; the timer pauses when you leave the drive or pause motion. Built with procedural scenery, custom shaders and bloom.',
      tags: ['Three.js', 'GLSL', 'Post-processing'], url: 'https://github.com/cosmopolitan033/zhaocun-current', liveUrl: 'https://zhaocun-current.netlify.app' },
    { title: 'FORME', category: 'INTERACTIVE ART EXHIBITION', art: 'forme', image: '/showcases/forme-v2.png',
      description: 'An independent digital exhibition. Discover three sculptural works, compare chrome, copper and porcelain, and curate a personal collection.',
      detail: 'An independent virtual exhibition by zhaocun. Explore three original procedural sculptures through an illustrated catalogue, material library and curatorial essay. Open each work in interactive 3D, save favourite form and material combinations on your device, and export collection notes. Physical materials, studio reflections and architectural arches create the exhibition space.',
      tags: ['Three.js', 'Physical Materials', 'Creative Coding'], url: 'https://github.com/cosmopolitan033/zhaocun-forme', liveUrl: 'https://zhaocun-forme.netlify.app' },
  ],
  contact: 'Interested in building something together? Explore my code and connect with me through GitHub.',
};
