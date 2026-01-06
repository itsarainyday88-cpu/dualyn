import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ lang, setLang }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'kr', label: 'KR' },
        { code: 'th', label: 'TH' },
        { code: 'ar', label: 'AR' },
        { code: 'vn', label: 'VN' },
        { code: 'jp', label: 'JP' }
    ];

    return (
        <header className="header">
            <div className="container flex-center" style={{ justifyContent: 'space-between', height: '80px' }}>
                <div className="logo" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--color-burgundy)' }}>
                    DUALYN
                </div>

                <div className="flex-center" style={{ gap: '20px' }}>
                    {/* Language Dropdown */}
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            style={{
                                background: 'none',
                                border: '1px solid var(--color-burgundy)',
                                borderRadius: '9999px',
                                padding: '8px 20px',
                                color: 'var(--color-burgundy)',
                                fontWeight: '500',
                                fontSize: '14px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            {languages.find(l => l.code === lang)?.label || 'EN'}
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '120%',
                                right: '0',
                                background: 'white',
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '12px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                                minWidth: '120px',
                                zIndex: 100
                            }}>
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => {
                                            setLang(l.code);
                                            setIsDropdownOpen(false);
                                        }}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'left',
                                            padding: '10px 20px',
                                            background: lang === l.code ? '#fafafa' : 'white',
                                            color: lang === l.code ? 'var(--color-burgundy)' : '#333',
                                            border: 'none',
                                            fontWeight: lang === l.code ? '700' : '400',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
                                        onMouseLeave={(e) => e.target.style.background = lang === l.code ? '#fafafa' : 'white'}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button style={{ background: 'none', border: 'none', color: 'var(--color-burgundy)' }}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
            <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
      `}</style>
        </header>
    );
};

export default Header;
