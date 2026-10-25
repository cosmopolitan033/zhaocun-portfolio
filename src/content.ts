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
    { title: 'SAGIN Framework', category: 'NETWORK SIMULATION', art: 'orbit',
      description: 'A space-air-ground network simulation bringing vehicles, UAVs and satellites into one configurable environment.',
      detail: 'A simulation framework for Space-Air-Ground Integrated Networks. The repository describes ground vehicles, aerial UAVs and orbital satellites, with hierarchical reinforcement learning for UAV allocation and task offloading. It includes configurable scenarios, metrics and visualization tools.',
      tags: ['Python', 'Reinforcement Learning', 'Simulation'], url: 'https://github.com/cosmopolitan033/SAGIN-Framework-RL' },
    { title: 'Offline Voice Assistant', category: 'APPLIED AI', art: 'voice',
      description: 'A modular voice conversation system connecting speech recognition, language understanding and speech synthesis — offline.',
      detail: 'A Chinese-language offline voice assistant built around Whisper for speech recognition, Qwen2 for language-model inference and Piper for speech synthesis. The project documents support for Mac, Linux and the RK3576 embedded platform, with a modular record → transcribe → respond → speak pipeline.',
      tags: ['Whisper', 'Qwen', 'Piper TTS'], url: 'https://github.com/cosmopolitan033/voice-chat-bot' },
    { title: 'Distributed Systems Lab', category: 'SYSTEMS EXPLORATION', art: 'network',
      description: 'A Go repository for exploring distributed systems through practical coursework and experiments.',
      detail: 'The pinned raft-protocol repository contains distributed-systems coursework. Its README introduces weather stations, bank transactions and MapReduce exercises, together with guidance on concurrency, race detection and repeated testing. Explore the repository for its implementation and learning context.',
      tags: ['Go', 'Concurrency', 'Distributed Computing'], url: 'https://github.com/cosmopolitan033/raft-protocol' },
  ],
  contact: 'Interested in building something together? Explore my code and connect with me through GitHub.',
};
