import React, { useEffect } from 'react';
import { COLOR_THEMES } from '../data/siteData';

export default function ColorPickerBar({ activeThemeId, onThemeChange }) {
  const activeTheme = COLOR_THEMES.find(t => t.id === activeThemeId) || COLOR_THEMES[0];

  useEffect(() => {
    // Dynamically apply selected primary color to root CSS variables
    document.documentElement.style.setProperty('--primary-green', activeTheme.hex);
    document.documentElement.style.setProperty('--primary-green-rgb', activeTheme.rgb);
  }, [activeTheme]);

  return (
    <div
      style={{
        background: 'var(--bg-dark)',
        color: 'var(--bg-light)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px 16px',
        padding: '6px 24px',
        fontSize: '12px',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 50,
        position: 'relative'
      }}
    >
      <span style={{ opacity: 0.85, fontWeight: 500 }}>Primary color</span>
      
      <div style={{ display: 'flex', alignItems: 'center' }} role="radiogroup" aria-label="Select Primary Brand Color">
        {COLOR_THEMES.map((theme) => {
          const isSelected = theme.id === activeTheme.id;
          const ringStyle = isSelected
            ? '0 0 0 2px #BF9944, 0 0 0 4px #F9F8F6'
            : '0 0 0 1px rgba(249,248,246,.6)';

          return (
            <button
              key={theme.id}
              type="button"
              aria-label={theme.label}
              aria-pressed={isSelected}
              onClick={() => onThemeChange(theme.id)}
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 0,
                cursor: 'pointer',
                padding: 0,
                transition: 'transform 0.2s ease'
              }}
              title={theme.label}
            >
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: theme.hex,
                  boxShadow: ringStyle,
                  display: 'block',
                  transform: isSelected ? 'scale(1.12)' : 'scale(1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              />
            </button>
          );
        })}
      </div>

      <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{activeTheme.label}</span>
    </div>
  );
}
