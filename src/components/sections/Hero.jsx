import React, { useEffect, useState } from 'react';

const Hero = ({ lang }) => {
    const content = {
        kr: {
            subtitle: "The New Standard",
            title: "흡수의 한계를\n다시 쪼개다.\nDUALYN",
            desc: "재생의 기준을 새롭게 정의합니다."
        },
        en: {
            subtitle: "The New Standard",
            title: "Breaking the Limits\nof Absorption.\nDUALYN",
            desc: "Redefining the standard of regeneration."
        }
    };

    const text = content[lang];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const visual = document.querySelector('.hero-visual');
            const text = document.querySelector('.hero-text');
            const particles = document.querySelectorAll('.particle');

            if (visual) {
                visual.style.transform = `translateY(calc(-50% + ${scrollY * 0.2}px)) rotate(${scrollY * 0.05}deg)`;
            }
            if (text) {
                text.style.transform = `translateY(${scrollY * 0.1}px)`;
                text.style.opacity = 1 - scrollY / 700;
            }
            particles.forEach((p, i) => {
                const speed = (i % 3 + 1) * 0.1;
                p.style.transform = `translateY(${scrollY * speed * -1}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="section hero" style={{
            minHeight: '100vh',
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, #7a121c 0%, #4a060d 100%)' /* Deep Burgundy Radial - Dark Mode */
        }}>

            {/* Background Particles - Sparkling glitter effect (Adjusted opacity for dark bg) */}
            <div className="particles-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 4 + 1}px`,
                        background: 'white',
                        borderRadius: '50%',
                        opacity: Math.random() * 0.5 + 0.2,
                        boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                        animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`
                    }} />
                ))}
            </div>

            {/* Main Grid Container */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '40px',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                paddingTop: '60px'
            }}>

                {/* Text Content - Left Aligned */}
                <div id="hero-text" style={{ textAlign: 'left' }}> {/* mixBlendMode removed for clearer white text */}
                    <p style={{
                        fontSize: '1.5rem',
                        letterSpacing: '0.3em',
                        color: '#f2d5d7', /* Rose Gold for Subtitle */
                        fontWeight: '700',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        borderBottom: '2px solid #f2d5d7',
                        paddingBottom: '5px'
                    }}>{text.subtitle}</p>
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 9vw, 6rem)',
                        lineHeight: '1',
                        marginBottom: '40px',
                        color: 'white', /* White for Main Title on Dark BG */
                        textShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                        whiteSpace: 'pre-line',
                        letterSpacing: '-0.02em',
                        fontWeight: '800'
                    }}>
                        {text.title}
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        color: 'white', /* White for Desc */
                        opacity: 0.9,
                        marginTop: '20px',
                        marginBottom: '40px',
                        fontWeight: '500',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        maxWidth: '90%',
                        lineHeight: '1.5'
                    }}>{text.desc}</p>

                </div>

                {/* Visual Container - Right Aligned (Grid Cell) */}
                <div className="hero-visual" style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                }}>
                    <img src="/assets/hero_bg.png" alt="DUALYN Syringe" style={{
                        width: '130%',
                        maxWidth: '850px',
                        height: 'auto',
                        filter: 'drop-shadow(-30px 40px 70px rgba(0, 0, 0, 0.5))', /* Darker shadow for dark mode */
                        /* Up 5% -> translateY(25%), Right 25% -> translateX(25%) */
                        transform: 'translateY(25%) translateX(25%) rotate(-5deg)',
                        transition: 'transform 0.5s ease-out'
                    }} />
                </div>
            </div>

            <style>{`
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }
        @media (max-width: 968px) {
            .container {
                grid-template-columns: 1fr !important; /* Stack vertically */
                text-align: center;
                gap: 20px !important;
                padding-top: 100px !important;
                height: auto !important;
                min-height: 100vh;
            }
            #hero-text {
                text-align: center !important;
                order: 1;
            }
            #hero-text p {
                margin: 0 auto 20px !important;
            }
            .hero-visual {
                order: 2;
                margin-top: 20px;
                transform: none !important;
            }
            .hero-visual img {
                width: 80% !important; /* Smaller image on mobile */
                transform: scale(1) rotate(0deg) !important;
            }
        }
      `}</style>
        </section>
    );
};

export default Hero;
