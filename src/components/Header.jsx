import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ lang, setLang }) => {
    return (
        <header className="header">
            <div className="container flex-center" style={{ justifyContent: 'space-between', height: '80px' }}>
                <div className="logo" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--color-burgundy)' }}>
                    DUALYN
                </div>

                <div className="flex-center" style={{ gap: '20px' }}>
                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'kr' ? 'en' : 'kr')}
                        style={{
                            background: 'none',
                            border: '1px solid var(--color-burgundy)',
                            borderRadius: '9999px', /* Pill Shape */
                            padding: '8px 20px',
                            color: 'var(--color-burgundy)',
                            fontWeight: '500',
                            fontSize: '14px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                    >
                        {lang === 'kr' ? 'EN' : 'KR'}
                    </button>

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
