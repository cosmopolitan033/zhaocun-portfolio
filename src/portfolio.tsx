import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolio } from './content';
import './portfolio.css';
const Computer = lazy(() => import('./components/canvas/computers'));
const Earth = lazy(() => import('./components/canvas/earth'));

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="scene-fallback"><span>CREATE. BUILD. EXPLORE.</span></div> : this.props.children; }
}
function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65 }}>{children}</motion.div>;
}
function ProjectArt({ image, title }: { image: string; title: string }) {
  return <div className="project-art showcase-preview"><img src={image} alt={`${title} website preview`} loading="lazy"/><span className="preview-caption">LIVE EXPERIENCE <span>↗</span></span></div>;
}
export default function App() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { document.title = `${portfolio.name} — Creative Developer`; }, []);
  useEffect(() => {
    if (selected !== null) { dialog.current?.showModal(); document.body.style.overflow = 'hidden'; }
    else { dialog.current?.close(); document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);
  const current = selected === null ? null : portfolio.projects[selected];
  return <>
    <a className="skip-link" href="#work">Skip to projects</a>
    <header className="site-header"><a href="#home" className="brand" aria-label="zhaocun home"><span className="brand-mark">z.</span><span>{portfolio.name}<span className="brand-role"> / developer</span></span></a><button className="menu-toggle" aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>{menu ? 'Close ✕' : 'Menu +'}</button><nav id="main-nav" className={menu ? 'nav-open' : ''} aria-label="Main navigation">{['About','Work','Contact'].map(x=><a href={`#${x.toLowerCase()}`} key={x} onClick={()=>setMenu(false)}>{x}</a>)}<a href={portfolio.github} target="_blank" rel="noreferrer" className="nav-github">GitHub ↗</a></nav></header>
    <main>
      <section id="home" className="hero-stage"><div className="hero-copy"><div className="hero-rule"/><div><p className="eyebrow">CODE MEETS CURIOSITY</p><h1>Hi, I'm <span>{portfolio.name}.</span></h1><p className="hero-subtitle">{portfolio.headline[0]}<br/>{portfolio.headline[1]}</p><div className="hero-actions"><a className="primary-link" href="#work">Explore my work <span>↗</span></a><a className="subtle-link" href={portfolio.github} target="_blank" rel="noreferrer">View GitHub</a></div></div></div><SceneBoundary><Suspense fallback={<div className="scene-loading">Loading interactive workspace…</div>}><Computer/></Suspense></SceneBoundary><div className="hero-bottom"><span>THINK. BUILD. ITERATE.</span><a href="#about" aria-label="Scroll to introduction" className="scroll-cue"><i/></a><span className="drag-hint">DRAG TO EXPLORE ↔</span></div></section>
      <section id="about" className="section-shell about-section"><Reveal><p className="eyebrow">01 / INTRODUCTION</p><h2>Curiosity.<br/><span className="muted-heading">Turned into code.</span></h2><p className="section-description">{portfolio.about}</p></Reveal><div className="focus-grid">{portfolio.focus.map((f,i)=><Reveal key={f.title}><div className="focus-card"><span className="focus-index">0{i+1}</span><div className={`focus-object object-${i}`} aria-hidden="true">{['✧','⌘','⌁'][i]}</div><h3>{f.title}</h3><p>{f.description}</p></div></Reveal>)}</div><Reveal className="education-line"><span className="tiny-dot"/><p>{portfolio.education}</p><a href={portfolio.github} target="_blank" rel="noreferrer">More about me ↗</a></Reveal></section>
      <section id="work" className="section-shell work-section"><Reveal className="section-title-row"><div><p className="eyebrow">02 / SELECTED EXPERIENCES</p><h2>Ideas you<br/><span className="muted-heading">can experience.</span></h2></div><p className="side-note">Three independent design experiments.<br/>Open them. Play. Explore.</p></Reveal><div className="project-grid">{portfolio.projects.map((p,i)=><Reveal key={p.title}><article className="project-card"><button className="project-open" onClick={()=>setSelected(i)} aria-label={`Explore ${p.title}`}><ProjectArt image={p.image} title={p.title}/><span className="project-arrow">↗</span></button><div className="project-meta"><span>0{i+1}</span><span>{p.category}</span></div><h3><button onClick={()=>setSelected(i)}>{p.title}</button></h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a className="repo-link" href={p.liveUrl} target="_blank" rel="noreferrer">Launch experience ↗</a><a className="source-link" href={p.url} target="_blank" rel="noreferrer">GitHub ↗</a></div></article></Reveal>)}</div><a className="all-work-link" href={`${portfolio.github}?tab=repositories`} target="_blank" rel="noreferrer">All repositories on GitHub <span>↗</span></a></section>
      <section id="contact" className="section-shell contact-section"><Reveal className="contact-copy"><p className="eyebrow">03 / WHAT'S NEXT?</p><h2>Great ideas<br/>start with a<br/><span className="accent-text">connection.</span></h2><p>{portfolio.contact}</p><a className="primary-link" href={portfolio.github} target="_blank" rel="noreferrer">Find me on GitHub <span>↗</span></a></Reveal><div className="earth-stage"><SceneBoundary><Suspense fallback={null}><Earth/></Suspense></SceneBoundary><div className="earth-caption">A LITTLE CURIOSITY GOES A LONG WAY.</div></div></section>
    </main>
    <footer className="site-footer"><div><a className="footer-name" href="#home">{portfolio.name}<span>.</span></a><p>Built with curiosity, code & a little perspective.</p></div><div className="footer-right"><a href={portfolio.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#home">Back to top ↑</a><a href="/credits.html" target="_blank" rel="noreferrer">Credits</a><span>© {new Date().getFullYear()} {portfolio.name}</span></div></footer>
    <dialog ref={dialog} className="project-dialog" onCancel={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)setSelected(null);}}>{current && <div className="dialog-inner"><button className="dialog-close" onClick={()=>setSelected(null)} autoFocus aria-label="Close project">✕</button><p className="eyebrow">{current.category}</p><h2>{current.title}</h2><ProjectArt image={current.image} title={current.title}/><p className="dialog-description">{current.detail}</p><div className="tags">{current.tags.map(t=><span key={t}>{t}</span>)}</div><div className="dialog-actions"><a className="primary-link" href={current.liveUrl} target="_blank" rel="noreferrer">Launch experience ↗</a><a className="subtle-link" href={current.url} target="_blank" rel="noreferrer">View source on GitHub ↗</a></div></div>}</dialog>
  </>;
}
