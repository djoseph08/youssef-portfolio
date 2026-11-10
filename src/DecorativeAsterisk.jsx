import React from 'react';

// Vector geometry keeps Safari from substituting an emoji font for this ornament.
export default function DecorativeAsterisk() {
  return <svg className="decorative-asterisk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" aria-hidden="true" focusable="false">
    <g fill="currentColor">
      {[0, 45, 90, 135].map(angle => <rect key={angle} x="14" y="1" width="4" height="30" rx=".35" transform={`rotate(${angle} 16 16)`}/>)}
    </g>
  </svg>;
}
