import React, {useState, useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, ArrowDown, ArrowRight, Github, Linkedin, Mail, Menu, X, Code2, ShieldCheck, Fingerprint, Plus, Check, Globe, Terminal, ChevronDown, Palette, Sun, Moon} from 'lucide-react';
import './styles.css';
import './case-study.css';
import './credentials.css';
import WorkExperience from './WorkExperience.jsx';
import roleTranslations from './best-store-role-translations.json';
import careerTranslations from './career-history-translations.json';
import ShowcaseGallery from './ShowcaseGallery.jsx';
import DecorativeAsterisk from './DecorativeAsterisk.jsx';
import {caseStudies} from './case-studies.js';
import {localize,registerDescriptions,translate} from './i18n.jsx';
import descriptions from './descriptions.json';
registerDescriptions(descriptions);
registerDescriptions(roleTranslations);
registerDescriptions(careerTranslations);

// Update these three values when you are ready. No backend or account setup needed.
const CONTACT = {
 github: 'https://github.com/djoseph08',
 linkedin: 'https://www.linkedin.com/in/youssef-lassoued-ab399b346/',
 email: '',
 tryhackme: 'https://tryhackme.com/r/p/yussflass',
};
const projects = [
 {id:'best-store', title:'Best Store', subtitle:'A better way to find your next upgrade.', category:'Development', type:'AUTOMOTIVE CATALOGUE', image:'screenshots/best-store/best-store-home.png', tags:['Web application','Product catalogue','Responsive UI'], description:'A catalogue for Best Store’s car accessories and essentials. A focused shopping experience with vehicle collections, English and Arabic browsing, and a helpful store guide. I designed and developed this application as part of my IT & Digital Solutions Lead role at Best Store in Doha, Qatar.',url:'https://best-store-catalogue.netlify.app/', featured:true},
 {id:'nexusfit', title:'NexusFit — Gym CRM & ERP', subtitle:'One system. The whole gym.', category:'Development', type:'FULL-STACK GYM MANAGEMENT SYSTEM', image:'screenshots/nexusfit/nexusfit-login.png', tags:['React','Full-stack','Local database','CRM / ERP'], description:'An end-to-end gym management application I designed and developed with React and a database hosted locally on the gym’s PC. NexusFit brings member registration, membership plans, subscription periods, payment records, activity pricing, and operational oversight into a single administration workspace. Its dashboard combines membership and revenue insights with a smart calculator, helping staff work through day-to-day management tasks in one place. The interface also organizes gym hours, trainers, workouts, and nutrition. I built the complete application, from the user interface and business logic to local data persistence.', featured:true, local:true, capabilities:['Member registration & profiles','Membership plans & expiry tracking','Payment history & revenue ledger','Activity pricing & plan periods','Dashboard analytics & smart calculator','Locally hosted database'], gallery:[]},
 {id:'best-social',title:'Best Store — Social Campaigns',subtitle:'Automotive stories. A distinctive visual identity.',category:'Design',type:'COMMERCIAL SOCIAL MEDIA DESIGN',image:'best-social-campaign.png',tags:['Photoshop','Art direction','Bilingual design','Social media','Video advertising'],description:'A series of automotive product campaigns I designed for Best Store’s social media pages. Created in Photoshop, the collection combines product presentation, automotive imagery, bilingual Arabic/English typography, and a consistent visual identity across vehicle ranges. These examples feature the Land Rover Defender, ROX Adamas, Zeekr 9X, and Leopard 5. I developed the compositions and campaign visuals to present accessories clearly while giving each vehicle its own visual story. Alongside these static campaign designs, I create and publish promotional videos and creative social media ads for Best Store.',gallery:[],campaign:true},
 {id:'weather',title:'Weather, wherever.',subtitle:'Live forecasts. A little more clarity.',category:'Development',type:'REACT APPLICATION',image:'weather.png',tags:['React','Weather data','Responsive'],description:'A React weather app that brings current conditions and forecasts into a simple, responsive interface. Search a location and explore the weather at a glance.'},
 {id:'chatbot',title:'The human-made bot.',subtitle:'Handcrafted logic. Natural conversation.',category:'Development',type:'VANILLA JAVASCRIPT',image:'chatbot.png',tags:['JavaScript','Interaction design','Custom logic'],description:'A handcrafted chatbot with a responsive messaging interface and custom response logic. Built around JavaScript interactions rather than an AI service.'},
 {id:'security',title:'Think like an attacker.',subtitle:'Explore. Understand. Strengthen.',category:'Security',type:'PENTESTING & CTF',image:'grinch.png',tags:['TryHackMe','CTF','Security research'],description:'Hands-on cybersecurity practice through CTF challenges and TryHackMe labs: exploring vulnerabilities, investigating systems, and developing practical penetration testing skills.',url:CONTACT.tryhackme},
 {id:'clothina',title:'Clothina',subtitle:'An eye for style, built for the web.',category:'Development',type:'FASHION E-COMMERCE CONCEPT',image:'clothina.jpg',tags:['React','Sass','UI design'],description:'A fashion storefront concept built with React and Sass, featuring a custom identity, dynamic navigation, and a visual approach to product discovery.'},
 {id:'travel',title:'A world to discover.',subtitle:'From inspiration to destination.',category:'Development',type:'TRAVEL AGENCY WEBSITE',image:'travel.jpg',tags:['JavaScript','PHP','MySQL'],description:'My final BTP IT project, inspired by my travel agency internship. A travel website with destination discovery, packages, and a PHP/MySQL reservation system.'},
 {id:'djotalk',title:'DjoTalk',subtitle:'Real conversations, in real time.',category:'Development',type:'REAL-TIME MESSAGING',image:'djotalk.png',tags:['Python','Flask','Socket.IO'],description:'A real-time chat application using Flask and Flask-SocketIO for instant message exchange, with a clean, responsive conversation interface.'},
 {id:'creative',title:'Beyond the code.',subtitle:'Ideas with a visual voice.',category:'Design',type:'VISUAL DESIGN COLLECTION',image:'ph.jpg',tags:['Photoshop','Branding','Digital artwork'],description:'A collection of logos, posters, and album-cover concepts created in Photoshop. An exploration of typography, composition, and expressive visual identities.'},
 {id:'snake',title:'One more round.',subtitle:'The classic, reimagined in JavaScript.',category:'Development',type:'SNAKE GAME',image:'snake.png',tags:['JavaScript','Game logic','Responsive controls'],description:'A browser-based Snake game built with vanilla JavaScript, with responsive directional controls, scoring, and a restart flow.'},
 {id:'xo',title:'Your move.',subtitle:'Small game. Thoughtful interactions.',category:'Development',type:'TIC-TAC-TOE',image:'XO.png',tags:['JavaScript','Game logic','UI'],description:'A classic two-player tic-tac-toe game, using JavaScript to handle turns, winning combinations, and game resets.'},
 {id:'bank',title:'BTS Bank portal',subtitle:'An early chapter in interface design.',category:'Development',type:'LOGIN & SIGN-UP UI STUDY',image:'bts.png',tags:['HTML5','CSS','Interface design'],description:'An early interface study exploring login and sign-up screens. A visual project from my learning journey, focused on form layout and presentation.'},
];
const skills = [
 [
  "JavaScript",
  "javascript",
  "#f7df1e",
  "Development"
 ],
 [
  "React",
  "react",
  "#61dafb",
  "Development"
 ],
 [
  "Tailwind CSS",
  "tailwindcss",
  "#38bdf8",
  "Development"
 ],
 [
  "Node.js",
  "nodedotjs",
  "#5fa04e",
  "Development"
 ],
 [
  "Vite",
  "vite",
  "#b879fa",
  "Development"
 ],
 [
  "HTML5",
  "html5",
  "#e34f26",
  "Development"
 ],
 [
  "CSS",
  "css",
  "#663399",
  "Development"
 ],
 [
  "Python",
  "python",
  "#3776ab",
  "Development"
 ],
 [
  "Flask",
  "flask",
  "#f5f5f5",
  "Development"
 ],
 [
  "PHP",
  "php",
  "#aaa5e2",
  "Development"
 ],
 [
  "MySQL",
  "mysql",
  "#4a9bc7",
  "Development"
 ],
 [
  "Sass",
  "sass",
  "#cc6699",
  "Development"
 ],
 [
  "Nmap",
  "nmap",
  "#6badce",
  "Security"
 ],
 [
  "Burp Suite",
  "burpsuite",
  "#f36f21",
  "Security"
 ],
 [
  "Metasploit",
  "metasploit",
  "#6ca9e0",
  "Security"
 ],
 [
  "Wireshark",
  "wireshark",
  "#46a5ec",
  "Security"
 ],
 [
  "Shodan",
  "shodan",
  "#b43035",
  "Security"
 ],
 [
  "Aircrack-ng",
  "aircrackng",
  "#246c8a",
  "Security"
 ],
 [
  "Nikto",
  "nikto",
  "#5f7860",
  "Security"
 ],
 [
  "theHarvester",
  "theharvester",
  "#737a36",
  "Security"
 ],
 [
  "Wifite",
  "wifite",
  "#4c7b9b",
  "Security"
 ],
 [
  "BeEF",
  "beef",
  "#b04b43",
  "Security"
 ],
 [
  "Hydra",
  "hydra",
  "#547844",
  "Security"
 ],
 [
  "John the Ripper",
  "johntheripper",
  "#86603b",
  "Security"
 ],
 [
  "SQLmap",
  "sqlmap",
  "#aa7d22",
  "Security"
 ],
 [
  "ZAP",
  "zap",
  "#2768a7",
  "Security"
 ],
 [
  "Ettercap",
  "ettercap",
  "#5e658a",
  "Security"
 ],
 [
  "Netcat",
  "netcat",
  "#3f7b73",
  "Security"
 ],
 [
  "Social-Engineer Toolkit (SET)",
  "setoolkit",
  "#89624d",
  "Security"
 ],
 [
  "TryHackMe",
  "tryhackme",
  "#e9565c",
  "Security"
 ],
 [
  "Windows",
  "windows",
  "#0078d4",
  "Operating Systems"
 ],
 [
  "macOS",
  "macos",
  "#24251f",
  "Operating Systems"
 ],
 [
  "Linux",
  "linux",
  "#fcc624",
  "Operating Systems"
 ],
 [
  "Kali Linux",
  "kalilinux",
  "#79adeb",
  "Operating Systems"
 ],
 [
  "Arch Linux",
  "archlinux",
  "#1793d1",
  "Operating Systems"
 ],
 [
  "Git",
  "git",
  "#f05032",
  "Tools"
 ],
 [
  "GitHub",
  "github",
  "#eee",
  "Tools"
 ],
 [
  "Photoshop",
  "photoshop",
  "#31a8ff",
  "Tools"
 ]
];
const skillGroups = [
 {id:"Development",description:"Interfaces, applications, and the technologies behind them."},
 {id:"Security",description:"Web testing, reconnaissance, network analysis, and security labs."},
 {id:"Operating Systems",description:"The systems I use across development and security work."},
 {id:"Tools",description:"Version control, collaboration, and visual design."},
];
function SkillLogo({slug,color}) {return <img className="skill-logo" src={`./icons/${slug}.svg`} alt="" style={{'--logo-color':color}} loading="lazy"/>}
function Socials({labels=false}) {return <div className={`socials ${labels?'with-labels':''}`}><a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="Youssef on GitHub"><Github size={19}/>{labels&&'GitHub'}{labels&&<ArrowUpRight size={16}/>}</a><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="Youssef on LinkedIn"><Linkedin size={19}/>{labels&&'LinkedIn'}{labels&&<ArrowUpRight size={16}/>}</a><a href={CONTACT.tryhackme} target="_blank" rel="noreferrer" aria-label="Youssef on TryHackMe"><Fingerprint size={20}/>{labels&&'TryHackMe'}{labels&&<ArrowUpRight size={16}/>}</a></div>}
const languages=[{id:'en',label:'English',short:'EN',flag:'gb'},{id:'ar',label:'العربية',short:'AR',flag:'tn'},{id:'fr',label:'Français',short:'FR',flag:'fr'}];
function LanguageSelector({lang,setLang}){
 const [open,setOpen]=useState(false);const active=languages.find(l=>l.id===lang);
 return <div className="language-picker" onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false)}} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);e.currentTarget.querySelector('button')?.focus()}}}>
 <button className="language-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Choose language / Choisir la langue / اختر اللغة" aria-controls="language-options"><img src={`./flags/${active.flag}.svg`} alt=""/><span>{active.short}</span><ChevronDown size={13} style={{transform:open?'rotate(180deg)':undefined}}/></button>
 {open&&<div className="language-options" id="language-options" role="group" aria-label="Languages">{languages.map(l=><button key={l.id} lang={l.id} aria-pressed={lang===l.id} onClick={()=>{setLang(l.id);setOpen(false)}}><img src={`./flags/${l.flag}.svg`} alt=""/><span>{l.label}</span>{lang===l.id&&<Check size={15}/>}</button>)}</div>}</div>
}
const projectCategories = [
 {id:'Development',title:'Applications',description:'Web applications, business systems, and interactive experiments.',number:'01'},
 {id:'Design',title:'Design & creative work',description:'Social campaigns, visual identities, and interface studies.',number:'02'},
 {id:'Security',title:'Security & pentesting',description:'Hands-on research, ethical testing, and CTF challenges.',number:'03'},
];
function FeaturedProjectCard({project,onOpen,lang}){
 const study=caseStudies[project.id];const first=study?.screenshots?.[0];
 return localize(<article className={`project featured featured-showcase ${project.local?'gym-showcase':'store-showcase'}`}>
 <div className="featured-split">
 <button className="featured-preview" onClick={e=>onOpen(project,e)} aria-label={`View ${project.title} project`}>
 <img src={`./images/${project.image}`} alt={`${project.title} project preview`} loading="lazy"/>
 <span className="featured-preview-top"><span className="live-dot"/> {project.local?'FULL-STACK SYSTEM':'LIVE WEB APPLICATION'}</span>
 <span className="featured-preview-action"><span><Plus size={17}/><span>{first?'View screenshots':'View project preview'}</span></span><ArrowUpRight size={20}/></span>
 </button>
 <div className="featured-launch"><div><span className="eyebrow">{project.local?'NEXUSFIT / CRM & ERP':'BEST STORE / DIGITAL CATALOGUE'}</span><h3>{project.local?'One system.':'The next upgrade.'}<br/><span className="serif">{project.local?'The whole gym.':'Made discoverable.'}</span></h3><p>{project.local?'A complete management system for memberships, payments, and everyday gym operations.':'A vehicle-focused catalogue connecting customers with car accessories and store services.'}</p></div>
 <div className="featured-launch-bottom"><div className="featured-stack">{project.local?'REACT / LOCAL DATABASE / FULL-STACK':'VEHICLE COLLECTIONS / AR + EN'}</div>
 {project.url?<a className="button featured-live" href={project.url} target="_blank" rel="noreferrer">Open live app <ArrowUpRight size={18}/></a>:<button className="button featured-live" onClick={e=>onOpen(project,e)}>Explore case study <ArrowUpRight size={18}/></button>}
 <button className="featured-secondary" onClick={e=>onOpen(project,e)}>Explore the project <ArrowRight size={15}/></button></div>
 </div></div>
 <div className="project-info"><div><span className="project-type">{project.type}</span><h3><button onClick={e=>onOpen(project,e)}>{project.title}</button></h3><p>{project.subtitle}</p></div><button className="project-details" onClick={e=>onOpen(project,e)} aria-label={`Read about ${project.title}`}><ArrowUpRight size={23}/></button></div><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
 </article>,lang);
}
export function CaseStudy({project,lang}){
 const study=caseStudies[project.id];
 const screenshots=study.screenshots.length?study.screenshots:[{src:`./images/${project.image}`,label:'Project preview',caption:'Interface presentation'}];
 return localize(<div className="case-study">
 <header className="case-study-header"><span className="eyebrow">{study.eyebrow}</span><h2 id="modal-title">{project.title}</h2><h3 className="case-study-headline">{study.headline}</h3><p>{study.summary}</p></header>
 <div className="case-study-facts">{[['My role',study.role],['Project scope',study.scope],['Delivery',study.delivery]].map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>
 <section className="case-study-tour"><div className="case-study-section-heading"><h3>Product walkthrough</h3><span>{project.tags.map(tag=>translate(tag,lang)).join(' / ')}</span></div><ShowcaseGallery screenshots={screenshots} title={project.title} t={text=>translate(text,lang)}/></section>
 <div className="case-study-story">{study.sections.map((section,i)=><section key={section.title}><span className="case-study-number">0{i+1}</span><h3>{section.title}</h3><p>{section.body}</p></section>)}</div>
 <section className="case-study-features"><div className="case-study-section-heading"><h3>Project capabilities</h3><Code2 size={20}/></div><div className="case-study-feature-grid">{study.features.map(([title,body])=><div key={title}><span className="case-feature-icon"><Check size={16}/></span><div><h4>{title}</h4><p>{body}</p></div></div>)}</div></section>
 <div className="case-study-cta"><div><span className="eyebrow">{project.local?'LOCALLY HOSTED / FULL-STACK':'LIVE / READY TO EXPLORE'}</span><p>{project.local?'Built for the gym’s own PC.':'Explore the catalogue in action.'}</p></div>{project.url?<a className="button dark" href={project.url} target="_blank" rel="noreferrer">Open live app <ArrowUpRight size={18}/></a>:<span className="local-project-note"><Terminal size={17}/> Locally hosted application</span>}</div>
 </div>,lang);
}
function initialTheme(){
 try {const saved=localStorage.getItem('portfolio-theme');if(saved==='dark'||saved==='light')return saved;}catch{}
 return typeof window!=='undefined'&&window.matchMedia?.('(prefers-color-scheme: dark)').matches?'dark':'light';
}
export default function App(){
 const [theme,setTheme]=useState(initialTheme);
 useEffect(()=>{document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;document.querySelector('meta[name=theme-color]')?.setAttribute('content',theme==='dark'?'#151812':'#f3f1eb');try{localStorage.setItem('portfolio-theme',theme)}catch{}},[theme]);
 const [lang,setLang]=useState(()=>{try{return ['en','ar','fr'].includes(localStorage.getItem('portfolio-language'))?localStorage.getItem('portfolio-language'):'en'}catch{return 'en'}});
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';try{localStorage.setItem('portfolio-language',lang)}catch{}},[lang]);

 const [menu,setMenu]=useState(false), [filter,setFilter]=useState('All work'), [showAll,setShowAll]=useState(false), [selected,setSelected]=useState(null), [skillFilter,setSkillFilter]=useState('All');
 const modalRef=useRef(null), triggerRef=useRef(null);
 useEffect(()=>{if(selected){modalRef.current?.showModal();}else if(modalRef.current?.open){modalRef.current.close();triggerRef.current?.focus();}},[selected]);
 const openProject=(p,e)=>{triggerRef.current=e.currentTarget;setSelected(p)};
 const closeMenu=()=>setMenu(false);
 return localize(<>
 <a className="skip-link" href="#main">Skip to content</a>
 <header className="header shell"><a className="brand" href="#" aria-label="Youssef home">y<span>.</span><span className="brand-name">YOUSSEF<br/>LASSOUED</span></a><nav className={menu?'nav is-open':'nav'} aria-label="Main navigation"><a onClick={closeMenu} href="#work">Selected work <span>01</span></a><a onClick={closeMenu} href="#about">About <span>02</span></a><a onClick={closeMenu} href="#skills">Toolkit <span>03</span></a></nav><div className="header-actions"><button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={translate(theme==='dark'?'Switch to light mode':'Switch to dark mode',lang)} title={translate(theme==='dark'?'Switch to light mode':'Switch to dark mode',lang)}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button><LanguageSelector lang={lang} setLang={setLang}/><a className="contact-nav" href="#contact">Let’s talk <ArrowUpRight size={17}/></a></div><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X/>:<Menu/>}</button></header>
 <main id="main">
 <section className="hero shell" aria-labelledby="hero-heading"><div className="hero-top"><span className="eyebrow"><span className="live-dot"/> INDEPENDENT MIND. CREATIVE CODE.</span><span className="edition">PORTFOLIO — VOL. 02 / 2026</span></div><div className="hero-grid"><div className="hero-copy"><h1 id="hero-heading" className="professional-title"><span>Web App</span><br/><span>Developer</span><br/><span className="professional-role">& Pentester<span className="orange">.</span></span></h1><p className="hero-tagline">Creative developer. <span className="serif">Security mindset.</span></p><div className="hero-description"><span className="little-cross"><DecorativeAsterisk/></span><p>I’m Youssef Lassoued. I build considered web experiences—and explore what makes them secure.</p></div><div className="hero-actions"><a className="button dark" href="#work">Explore my work <ArrowDown size={17}/></a><Socials/></div><div className="hero-foot"><span>FULL-STACK DEVELOPER & PENTESTER</span><span>BASED IN QATAR · FROM TUNISIA<ArrowUpRight className="location-arrow" size={10} aria-hidden="true" focusable="false"/></span></div></div><div className="portrait-wrap"><div className="portrait-card"><div className="portrait-title">A builder.<br/><i>A curious mind.</i></div><span className="portrait-star" aria-hidden="true"><DecorativeAsterisk/></span><div className="portrait-orbit"/><img className="portrait" src="./images/youssef-portrait.png" alt="Portrait of Youssef Lassoued" fetchPriority="high"/><span className="portrait-coordinate">QATAR / TUNISIAN ROOTS</span><span className="portrait-name">Youssef.</span></div><a href="#about" className="portrait-arrow" aria-label="Get to know Youssef"><ArrowUpRight size={39}/></a><div className="portrait-tag"><ShieldCheck size={17}/> BUILT WITH CURIOSITY</div></div></div></section>
 <div className="ticker" aria-label="Development, design and security"><div>CODE WITH PURPOSE <span><DecorativeAsterisk/></span> DESIGN WITH INTENT <span><DecorativeAsterisk/></span> THINK SECURITY <span><DecorativeAsterisk/></span> STAY CURIOUS <span><DecorativeAsterisk/></span> CODE WITH PURPOSE <span><DecorativeAsterisk/></span> DESIGN WITH INTENT <span><DecorativeAsterisk/></span></div></div>
 <section id="work" className="work shell section-space"><div className="section-top"><span className="eyebrow">01 / SELECTED WORK</span><span className="subtle">Ideas made tangible.</span></div><div className="section-heading"><h2>A little code.<br/><span className="serif">A lot of possibility.</span></h2><p>Useful applications, playful experiments, and a healthy curiosity for how things work.</p></div><div className="filter-bar" role="group" aria-label="Filter projects">{['All work','Development','Security','Design'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'active':''} onClick={()=>{setFilter(f);setShowAll(false)}}>{f==='Development'?'Applications':f}<span>{f==='All work'?projects.length:projects.filter(p=>p.category===f).length}</span></button>)}</div>
 <div className="project-groups">{projectCategories.filter(g=>filter==='All work'||g.id===filter).map(g=>{
 const all=projects.filter(p=>p.category===g.id);const visible=showAll?all:all.slice(0,4);
 return <section key={g.id} className="project-group" aria-labelledby={`group-${g.id}`}>
 <div className="project-group-heading"><div><span className="eyebrow">{g.number} / {g.title}</span><h3 id={`group-${g.id}`}>{g.title}<span>{String(all.length).padStart(2,'0')}</span></h3></div><p>{g.description}</p></div>
 <div className="project-grid">{visible.map(p=>p.id==='best-store'?<FeaturedProjectCard key={p.id} project={p} onOpen={openProject} lang={lang}/>:(<article key={p.id} className={`project ${p.featured?'featured':''} ${p.campaign?'campaign':''} ${p.id==='nexusfit'?'nexus-full':''}`}><div className="project-visual">{p.url?<a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} ${p.featured?'live application':'profile'}`}><img src={`./images/${p.image}`} alt={`${p.title} project preview`} loading="lazy"/><span className="visual-link"><ArrowUpRight size={25}/></span>{p.featured&&<span className="featured-label"><span className="live-dot"/> FEATURED / LIVE PROJECT</span>}</a>:<button onClick={e=>openProject(p,e)} aria-label={`View ${p.title} project`}><img src={`./images/${p.image}`} alt={`${p.title} project preview`} loading="lazy"/><span className="visual-link"><Plus size={25}/></span>{p.local&&p.id!=='nexusfit'&&<span className="featured-label"><span className="live-dot"/> FEATURED / FULL-STACK SYSTEM</span>}</button>}</div><div className="project-info"><div><span className="project-type">{p.type}</span><h3><button onClick={e=>openProject(p,e)}>{p.title}</button></h3><p>{p.subtitle}</p></div><button className="project-details" onClick={e=>openProject(p,e)} aria-label={`Read about ${p.title}`}><ArrowUpRight size={23}/></button></div><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>))}</div>
 {all.length>4&&<div className="more-work"><button className="button outline" onClick={()=>setShowAll(!showAll)}>{showAll?'Show selected applications':'View all applications'}{showAll?<ArrowDown style={{transform:'rotate(180deg)'}} size={17}/>:<Plus size={17}/>}</button><span>{showAll?'The full collection.':'There’s more where that came from.'}</span></div>}
 </section>
 })}</div></section>
 <section id="about" className="about"><div className="shell section-space"><div className="section-top"><span className="eyebrow">02 / THE PERSON BEHIND THE PIXELS</span><span className="about-symbol"><DecorativeAsterisk/></span></div><div className="about-grid"><div><h2>Builder by nature.<br/><span className="serif">Hacker by curiosity.</span></h2><div className="about-note"><span>HELLO, I’M YOUSSEF.</span><ArrowRight size={24}/></div></div><div className="about-copy"><p className="lead">Good experiences start with curiosity. So does good security.</p><p>I’m from Tunisia and currently based in Qatar.</p><p>I’m an IT specialist, full-stack web developer, and penetration tester who enjoys both sides of the screen: creating intuitive digital experiences and understanding the systems beneath them.</p><p>I build with React, Tailwind CSS, and vanilla JavaScript, bringing together clean interfaces, thoughtful interactions, and an eye for design. My cybersecurity work explores web application testing, network analysis, and hands-on CTF challenges.</p><p>From a locally hosted gym CRM/ERP to real-time chat and an automotive catalogue, I like turning practical problems into something people can actually use.</p><a href={CONTACT.tryhackme} target="_blank" rel="noreferrer" className="text-link">Explore my security journey <ArrowUpRight size={17}/></a></div></div><div className="approach-grid"><div><Code2/><h3>Build with intention.</h3><p>Responsive interfaces, useful interactions, and clear user journeys.</p></div><div><ShieldCheck/><h3>Understand the weaknesses.</h3><p>Ethical testing, network analysis, and practical security exploration.</p></div><div><Palette/><h3>Design with personality.</h3><p>Photoshop, bilingual campaigns, and creative video advertising for social media.</p></div></div><WorkExperience lang={lang}/><div className="background"><div><span className="eyebrow">THE PATH SO FAR</span><h3>A foundation.<br/><span className="serif">Always growing.</span></h3></div><div className="timeline"><div><span>CYBERSECURITY</span><h4>CompTIA Security+ & GOMYCODE</h4><p>Cybersecurity training, penetration testing, and network security · Tunis</p></div><div><span>2020 — 2022</span><h4>BTP IT Management · IPSET</h4><p>IT, networking, and web development · Tunis</p></div><div><span>2019 — 2020</span><h4>Fiber Optic Technician · Excelforma</h4><p>Fibre-optic technician training · Paris</p></div></div></div></div></section>
 <section id="skills" className="skills shell section-space"><div className="section-top"><span className="eyebrow">03 / MY TOOLKIT</span><span className="subtle">Different tools. One curious mind.</span></div><div className="section-heading"><h2>The tools behind<br/><span className="serif">the thinking.</span></h2><p>From browser interfaces to security labs. A toolkit shaped by projects, practice, and continuous learning.</p></div><div className="filter-bar" role="group" aria-label="Filter skills">{['All',...skillGroups.map(group=>group.id)].map(f=><button key={f} className={skillFilter===f?'active':''} aria-pressed={skillFilter===f} onClick={()=>setSkillFilter(f)}>{f}</button>)}</div><div className="skill-groups">{skillGroups.filter(group=>skillFilter==='All'||group.id===skillFilter).map(group=><section className="skill-group" key={group.id} aria-labelledby={`skill-group-${group.id.replaceAll(' ','-')}`}><div className="skill-group-heading"><h3 id={`skill-group-${group.id.replaceAll(' ','-')}`}>{group.id}<span>{skills.filter(skill=>skill[3]===group.id).length}</span></h3><p>{group.description}</p></div><div className="skills-grid">{skills.filter(skill=>skill[3]===group.id).map(([name,slug,color,cat])=><div className="skill-item" key={slug}><SkillLogo slug={slug} color={color}/><span>{name}</span><span className="skill-category">{cat}</span></div>)}</div></section>)}</div><div className="toolkit-note"><Terminal size={18}/><p>Tools are the starting point. Understanding how to use them is the work.</p></div><div className="credentials-block" aria-labelledby="credentials-heading"><div className="credentials-intro"><span className="eyebrow">LEARNING / QUALIFICATIONS</span><h3 id="credentials-heading">Certifications & training</h3><p>Formal learning behind hands-on work.</p></div><div className="credentials-grid"><article className="credential-card"><div className="credential-top"><span className="credential-mark"><ShieldCheck size={23}/></span><span className="credential-issuer">CompTIA</span></div><span className="credential-category">CYBERSECURITY CERTIFICATION</span><h4>CompTIA Security+</h4><p>Core cybersecurity principles, network security, threats, vulnerabilities, and risk management.</p><span className="credential-foot">Cybersecurity foundations</span></article><article className="credential-card"><div className="credential-top"><span className="credential-mark"><Code2 size={23}/></span><span className="credential-issuer">GOMYCODE · Tunisia</span></div><span className="credential-category">WEB APPLICATION CERTIFICATIONS</span><h4>Web application development</h4><p>Web application development certifications completed with GOMYCODE in Tunisia.</p><span className="credential-foot">Web development & application building</span></article></div></div></section>
 <section id="contact" className="contact-section"><div className="shell"><div className="section-top"><span className="eyebrow">04 / WHAT’S NEXT?</span><span>LET’S MAKE SOMETHING MATTER.</span></div><div className="contact-main"><h2>Good ideas deserve<br/><span className="serif">great execution.</span></h2><a className="big-arrow" href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="Start a conversation on LinkedIn"><ArrowUpRight/></a></div><div className="contact-bottom"><p>Have a project in mind, a challenge to share,<br/>or just a good conversation? Let’s connect.</p><div className="contact-options"><Socials labels/>{CONTACT.email?<a className="email-link" href={`mailto:${CONTACT.email}`}><Mail size={19}/> {CONTACT.email}<ArrowUpRight size={16}/></a>:<div className="email-pending"><Mail size={18}/><span>Email contact coming soon</span></div>}</div></div></div></section>
 </main><footer className="footer shell"><a href="#" className="footer-brand">y<span>.</span></a><span>© {new Date().getFullYear()} Youssef Lassoued</span><span>DESIGNED WITH INTENT. BUILT BY YOUSSEF.</span><a href="#">Back to top ↑</a></footer>
 <dialog ref={modalRef} className={`project-modal ${caseStudies[selected?.id]?'case-study-modal':''}`} onCancel={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)setSelected(null)}} aria-labelledby="modal-title">{selected&&<><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close project"><X/></button>{caseStudies[selected.id]?<CaseStudy key={selected.id} project={selected} lang={lang}/>:<><img className="modal-image" src={`./images/${selected.image}`} alt={`${selected.title} project preview`}/><div className="modal-body"><span className="project-type">{selected.type}</span><h2 id="modal-title">{selected.title}</h2><p>{selected.description}</p><div className="project-tags">{selected.tags.map(t=><span key={t}>{t}</span>)}</div>{selected.capabilities&&<ul className="capability-list">{selected.capabilities.map(c=><li key={c}><Check size={15}/>{c}</li>)}</ul>}{selected.gallery?.length>0&&<div className="project-gallery">{selected.gallery.map((img,i)=><img key={img} src={`./images/${img}`} alt={`NexusFit application screen ${i+1}`} loading="lazy"/>)}</div>}{selected.local?<p className="local-project-note"><Terminal size={16}/> Locally hosted application · Project showcase</p>:selected.url?<a className="button dark" href={selected.url} target="_blank" rel="noreferrer">{selected.featured?'Launch live application':'Explore on TryHackMe'}<ArrowUpRight size={17}/></a>:<a className="text-link" href={CONTACT.github} target="_blank" rel="noreferrer"><Github size={18}/> Explore my GitHub <ArrowUpRight size={17}/></a>}</div></>}</>}</dialog>
 </>,lang)
}
if(typeof document!=='undefined')createRoot(document.getElementById('root')).render(<App/>);
