import React from 'react';

const logoSizes = {
  sm: '84px',
  md: '96px',
  lg: '112px'
};

export default function Logo({ size = 'md' }) {
  const logoSize = logoSizes[size] || '96px';

  return (
    <div className="csea-logo-container" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', padding: 0 }}>
      <img
        className="csea-logo-image"
        src="/Assets/cseal.png"
        alt="CSEA logo"
        style={{ height: logoSize, width: 'auto', display: 'block', background: 'transparent', padding: 0, borderRadius: 0 }}
      />
    </div>
  );
}
