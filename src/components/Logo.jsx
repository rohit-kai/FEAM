import React, { useState } from 'react';

export default function Logo({ variant = 'light', height = 64, onClick, showText = true }) {
  const isDarkText = variant === 'dark';
  const textColor = isDarkText ? 'var(--primary-green)' : '#FFFFFF';
  const goldColor = '#BF9944';
  const subtextColor = isDarkText ? 'var(--text-muted)' : '#F9F8F6';

  // Choose the best variant for contrast:
  // On light backgrounds: transparent PNG (navy + gold)
  // On dark backgrounds: light PNG (crisp white + gold)
  const [imgSrc, setImgSrc] = useState(
    isDarkText ? '/assets/eam-crest-transparent.png' : '/assets/eam-crest-light.png'
  );

  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none'
      }}
      aria-label="EAM Estate & Hospitality Investment"
    >
      {/* User Brand Crest Logo Mark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: `${height}px`,
          position: 'relative'
        }}
      >
        <img
          src={imgSrc}
          onError={() => setImgSrc('/assets/eam-crest-logo.png')}
          alt="EAM Estate Emblem"
          style={{
            height: `${height}px`,
            width: 'auto',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.12))'
          }}
        />
      </div>

      {/* Typography */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: `${Math.round(height * 0.36)}px`,
                fontWeight: 600,
                letterSpacing: '0.16em',
                color: textColor,
                lineHeight: 1
              }}
            >
              EAM
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: `${Math.round(height * 0.18)}px`,
                fontWeight: 600,
                letterSpacing: '0.28em',
                color: goldColor,
                textTransform: 'uppercase',
                lineHeight: 1
              }}
            >
              ESTATE
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: goldColor,
              opacity: 0.35,
              margin: '5px 0 4px'
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: `${Math.max(8, Math.round(height * 0.14))}px`,
              fontWeight: 600,
              letterSpacing: '0.22em',
              color: subtextColor,
              textTransform: 'uppercase',
              opacity: 0.9,
              lineHeight: 1.2
            }}
          >
            HOSPITALITY INVESTMENT
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: `${Math.max(7, Math.round(height * 0.12))}px`,
              letterSpacing: '0.2em',
              color: goldColor,
              textTransform: 'uppercase',
              opacity: 0.95,
              marginTop: '2px'
            }}
          >
            BANGKOK · EST. 2004
          </span>
        </div>
      )}
    </div>
  );
}
