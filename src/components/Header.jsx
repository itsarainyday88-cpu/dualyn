"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { lang, setLang } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Default to 'en' if not provided (though context should provide it)
    const currentLang = lang || 'en';

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'kr', label: 'KR' },
        { code: 'th', label: 'TH' },
        { code: 'ar', label: 'AR' },
        { code: 'vn', label: 'VN' },
        { code: 'jp', label: 'JP' }
    ];

    const menuItems = [
        { path: '/brand-story', label: 'BRAND STORY' },
        { path: '/technology', label: 'TECHNOLOGY' },
        { path: '/ingredients', label: 'INGREDIENTS' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const handleNavigation = (path) => {
        router.push(path);
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    const handleLangChange = (code) => {
        if (setLang) {
            setLang(code);
        }
        setIsDropdownOpen(false);
    };

    return (
        <header className="header">
            <div className="container flex-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', position: 'relative', zIndex: 1001 }}>
                <Link href="/" className="logo" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--color-burgundy)', textDecoration: 'none', zIndex: 1002 }}>
                    DUALYN
                </Link>

                <div className="flex-center" style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 1002 }}>
                    {/* Language Dropdown */}
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            style={{
                                background: 'none',
                                border: `1px solid var(--color-burgundy)`,
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
                            {languages.find(l => l.code === currentLang)?.label || 'EN'}
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
                                        onClick={() => handleLangChange(l.code)}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'left',
                                            padding: '10px 20px',
                                            background: currentLang === l.code ? '#fafafa' : 'white',
                                            color: currentLang === l.code ? 'var(--color-burgundy)' : '#333',
                                            border: 'none',
                                            fontWeight: currentLang === l.code ? '700' : '400',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
                                        onMouseLeave={(e) => e.target.style.background = currentLang === l.code ? '#fafafa' : 'white'}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-burgundy)',
                            cursor: 'pointer',
                            zIndex: 1005,
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Full Screen Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'white',
                zIndex: 1000,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isMenuOpen ? 1 : 0,
                transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '60px'
            }}>
                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    textAlign: 'center'
                }}>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                fontFamily: 'var(--font-serif)',
                                color: 'var(--color-burgundy)',
                                textDecoration: 'none',
                                fontWeight: '700',
                                cursor: 'pointer',
                                position: 'relative',
                                opacity: isMenuOpen ? 1 : 0,
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.5s ease ${0.1 + index * 0.1}s`,
                                letterSpacing: '-0.02em'
                            }}
                            onMouseEnter={(e) => e.target.style.fontStyle = 'italic'}
                            onMouseLeave={(e) => e.target.style.fontStyle = 'normal'}
                        >
                            {item.label}
                        </div>
                    ))}
                </nav>

                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    opacity: 0.5,
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em'
                }}>
                    © 2026 BIOBIJOU
                </div>
            </div>

            <style jsx global>{`
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
