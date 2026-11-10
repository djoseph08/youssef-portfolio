import React, {useEffect, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, Expand, Minimize2, Images} from 'lucide-react';
import './showcase-gallery.css';

/** Screenshots: [{src, label, caption}]. Keep source images intact; the viewer uses contain. */
export default function ShowcaseGallery({screenshots = [], title = '', t = value => value}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const galleryRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const swipeStart = useRef(null);
  const imageSignature = screenshots.map(screen => screen.src).join('|');
  const safeIndex = Math.min(activeIndex, Math.max(0, screenshots.length - 1));
  const active = screenshots[safeIndex];

  useEffect(() => {
    setActiveIndex(0);
    setExpanded(false);
  }, [imageSignature, title]);

  useEffect(() => {
    if (!expanded) return;
    const dialog = galleryRef.current?.closest('dialog');
    const previousFocus = document.activeElement;
    const cancelZoom = event => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      setExpanded(false);
    };
    const inertSiblings = [];
    let branch = galleryRef.current;
    while (branch && branch !== dialog) {
      const parent = branch.parentElement;
      if (!parent) break;
      for (const sibling of parent.children) {
        if (sibling !== branch) {inertSiblings.push([sibling, sibling.inert]); sibling.inert = true;}
      }
      branch = parent;
    }
    dialog?.classList.add('has-expanded-gallery');
    dialog?.addEventListener('cancel', cancelZoom, true);
    galleryRef.current?.querySelector('[data-gallery-zoom]')?.focus({preventScroll:true});
    return () => {
      dialog?.classList.remove('has-expanded-gallery');
      for (const [element, previousInert] of inertSiblings) element.inert = previousInert;
      dialog?.removeEventListener('cancel', cancelZoom, true);
      previousFocus?.focus?.({preventScroll:true});
    };
  }, [expanded]);

  useEffect(() => {
    const thumbnail = thumbnailRefs.current[safeIndex];
    const strip = thumbnail?.parentElement;
    if (!thumbnail || !strip) return;
    const frame = strip.getBoundingClientRect(), item = thumbnail.getBoundingClientRect();
    if (item.left < frame.left) strip.scrollBy({left:item.left-frame.left});
    else if (item.right > frame.right) strip.scrollBy({left:item.right-frame.right});
  }, [safeIndex]);

  if (!active) return null;

  const move = step => setActiveIndex(current => (current + step + screenshots.length) % screenshots.length);
  const handleKeys = event => {
    if (event.key === 'Escape' && expanded) {
      event.preventDefault();
      event.stopPropagation();
      setExpanded(false);
      return;
    }
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    if (screenshots.length < 2) return;
    event.preventDefault();
    event.stopPropagation();
    const rtl = document.documentElement.dir === 'rtl';
    move((event.key === 'ArrowRight' ? 1 : -1) * (rtl ? -1 : 1));
  };

  return <section
    ref={galleryRef}
    className={`showcase-gallery${expanded ? ' is-expanded' : ''}`}
    aria-label={`${title} — ${t('Project screenshots')}`}
    tabIndex={0}
    onKeyDownCapture={handleKeys}
  >
    <div className="showcase-gallery-toolbar">
      <div className="showcase-gallery-heading"><Images size={17}/><span>{expanded ? title : t('Project screenshots')}</span></div>
      <div className="showcase-gallery-tools">
        <span className="showcase-gallery-count" aria-hidden="true">{String(safeIndex + 1).padStart(2, '0')} <span>/ {String(screenshots.length).padStart(2, '0')}</span></span>
        <button type="button" data-gallery-zoom className="showcase-gallery-icon" onClick={() => setExpanded(value => !value)} aria-label={t(expanded ? 'Exit expanded view' : 'Expand screenshot')} title={t(expanded ? 'Exit expanded view' : 'Expand screenshot')}>
          {expanded ? <Minimize2 size={18}/> : <Expand size={18}/>}
        </button>
      </div>
    </div>
    <div className="showcase-gallery-viewport" onPointerDown={event=>{if(event.pointerType==='touch')swipeStart.current={x:event.clientX,y:event.clientY};}} onPointerUp={event=>{
        const start=swipeStart.current;swipeStart.current=null;if(!start||screenshots.length<2)return;
        const dx=event.clientX-start.x,dy=event.clientY-start.y;
        if(Math.abs(dx)>45&&Math.abs(dy)<75)move((dx<0?1:-1)*(document.documentElement.dir==='rtl'?-1:1));
      }} onPointerCancel={()=>{swipeStart.current=null;}}>
      <img className="showcase-gallery-image" src={active.src} alt={`${title} — ${t(active.label || 'Screenshot')}`} decoding="async"/>
      {screenshots.length > 1 && <>
        <button type="button" className="showcase-gallery-nav is-previous" onClick={() => move(-1)} aria-label={t('Previous screenshot')} title={t('Previous screenshot')}><ArrowLeft className="showcase-gallery-arrow" size={20}/></button>
        <button type="button" className="showcase-gallery-nav is-next" onClick={() => move(1)} aria-label={t('Next screenshot')} title={t('Next screenshot')}><ArrowRight className="showcase-gallery-arrow" size={20}/></button>
      </>}
    </div>
    <div className="showcase-gallery-caption" aria-live="polite" aria-atomic="true">
      <div><strong>{t(active.label || 'Screenshot')}</strong>{active.caption && <p>{t(active.caption)}</p>}</div>
      <span className="showcase-gallery-accessible-count">{t('Screenshot')} {safeIndex + 1} {t('of')} {screenshots.length}</span>
    </div>
    {screenshots.length > 1 && <div className="showcase-gallery-thumbnails" role="group" aria-label={t('Choose a screenshot')}>
      {screenshots.map((screen, index) => <button
        type="button"
        key={`${screen.src}-${index}`}
        ref={element => {thumbnailRefs.current[index] = element;}}
        className={`showcase-gallery-thumbnail${index === safeIndex ? ' is-active' : ''}`}
        onClick={() => setActiveIndex(index)}
        aria-label={`${t('View screenshot')}: ${t(screen.label || 'Screenshot')}`}
        aria-pressed={index === safeIndex}
      >
        <span className="showcase-gallery-thumbnail-picture"><img src={screen.src} alt="" loading="lazy" decoding="async"/></span>
        <span className="showcase-gallery-thumbnail-label">{t(screen.label || 'Screenshot')}</span>
      </button>)}
    </div>}
  </section>;
}
