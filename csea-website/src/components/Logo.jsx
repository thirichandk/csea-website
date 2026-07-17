import React from 'react';

const logoSizes = {
  sm: '65px',
  md: '65px',
  lg: '65px'
};

export default function Logo({ size = 'md' }) {
  const logoSize = logoSizes[size] || '65px';

  return (
    <div className="csea-logo-container">
      <img
        className="csea-logo-image"
        src="/Assets/CSEA LOGO.png"
        alt="CSEA logo"
        style={{ height: logoSize, width: 'auto' }}
      />
    </div>
  );
}
