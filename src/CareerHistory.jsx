import React from 'react';
import {MapPin} from 'lucide-react';
import history from './career-history.json';
import {localize} from './i18n.jsx';
import './career-history.css';

function EmployerMark({role}) {
  return <span className="career-history-logo" aria-hidden="true">
    {role.logo
      ? <img src={role.logo} alt="" loading="lazy"/>
      : <span className="career-history-initials">{role.initials || role.employer.slice(0, 2)}</span>}
  </span>;
}

function CareerCard({role, internship = false, lang}) {
  const headingId = `experience-${role.id}`;
  const Title = internship ? 'h4' : 'h3';
  return localize(<article className={`career-history-card${internship ? ' career-history-internship-card' : ''}`} aria-labelledby={headingId} data-employer={role.id}>
    <header className="career-history-header">
      <div className="career-history-employer">
        <EmployerMark role={role}/>
        <div className="career-history-employer-details">
          <span className="career-history-company">{role.employer}</span>
          <span className="career-history-location"><MapPin size={13} aria-hidden="true"/><span>{role.location}</span></span>
        </div>
      </div>
      <span className="career-history-period" dir={/^\d{4}/.test(role.period) ? 'ltr' : undefined}>{role.period}</span>
    </header>
    <div className="career-history-intro">
      <Title id={headingId}>{role.title}</Title>
      <p>{role.summary}</p>
    </div>
    {role.responsibilities?.length > 0 && <div className="career-history-responsibilities">
      {role.responsibilities.map(([title, body], index) => <div className="career-history-responsibility" key={title}>
        <span className="career-history-number" aria-hidden="true" dir="ltr">{String(index + 1).padStart(2, '0')}</span>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>)}
    </div>}
  </article>, lang);
}

export default function CareerHistory({lang = 'en'}) {
  return localize(
    <div className="career-history" role="group" aria-label="Professional experience history">
      <div className="career-history-roles">
        {history.roles.map(role => <CareerCard key={role.id} role={role} lang={lang}/>)}
      </div>
      <section className="career-history-internship" aria-labelledby="internship-heading">
        <h3 className="career-history-subheading" id="internship-heading">INTERNSHIP</h3>
        <CareerCard role={history.internship} internship lang={lang}/>
      </section>
    </div>,
    lang,
  );
}
