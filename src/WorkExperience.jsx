import React from 'react';
import {ArrowUpRight, CarFront, Clapperboard, Code2, MapPin, Palette} from 'lucide-react';
import {localize} from './i18n.jsx';
import './work-experience.css';
import CareerHistory from './CareerHistory.jsx';

const responsibilities = [
  {
    Icon: Code2,
    title: 'IT & application development',
    body: 'Oversee the store’s IT needs and design and develop its customer-facing web application, organizing vehicle accessories, product discovery, and store services in one digital catalogue.',
  },
  {
    Icon: CarFront,
    title: 'Automotive software & diagnostics',
    body: 'Upgrade in-car multimedia screens, install compatible applications, and carry out vehicle software and ADAS updates using VDS diagnostic tools.',
  },
  {
    Icon: Palette,
    title: 'Social media campaign design',
    body: 'Create and publish Photoshop product visuals and bilingual automotive advertising for Best Store’s social media pages, maintaining a consistent visual identity across campaigns.',
  },
  {
    Icon: Clapperboard,
    title: 'Creative video advertising',
    body: 'Develop and publish creative promotional videos and social media ads that bring products, vehicle upgrades, and store services to life.',
  },
];

export default function WorkExperience({lang = 'en'}) {
  return localize(
    <section className="work-experience" aria-labelledby="professional-experience-heading">
      <span id="professional-experience-heading" className="eyebrow work-experience-label">PROFESSIONAL EXPERIENCE</span>
      <article className="work-experience-card">
        <header className="work-experience-header">
          <div className="work-experience-brand">
            <img className="work-experience-logo" src="./images/experience/best-store.webp" alt="" loading="lazy" width="62" height="62"/>
            <div className="work-experience-employer">
              <span className="work-experience-company">Best Store</span>
              <span className="work-experience-location"><MapPin size={13} aria-hidden="true"/><span>Doha, Qatar</span></span>
            </div>
          </div>
          <span className="work-experience-period" dir="ltr">2026–2027</span>
        </header>
        <div className="work-experience-intro">
          <h3 id="best-store-role">IT &amp; Digital Solutions Lead</h3>
          <p>Responsible for Best Store’s IT and digital projects in Doha, combining web application development, automotive software services, and creative content for the store’s social media channels.</p>
        </div>
        <div className="work-experience-responsibilities">
          {responsibilities.map(({Icon, title, body}) => (
            <div className="work-experience-area" key={title}>
              <span className="work-experience-icon"><Icon size={20} aria-hidden="true"/></span>
              <div><h4>{title}</h4><p>{body}</p></div>
            </div>
          ))}
        </div>
        <footer className="work-experience-footer">
          <a href="#work">Explore Best Store projects <ArrowUpRight size={17} aria-hidden="true"/></a>
        </footer>
      </article>
      <CareerHistory lang={lang}/>
    </section>,
    lang,
  );
}
