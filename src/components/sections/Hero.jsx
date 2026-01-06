import React, { useEffect, useState } from 'react';

const Hero = ({ lang }) => {
    const content = {
        kr: {
            subtitle: "The New Standard",
            title: "오늘의 거울이 반갑고,\n내일의 탄력이 기다려지는 이유",
            desc: "재생의 기준을 새롭게 정의합니다."
        },
        en: {
            subtitle: "The New Standard",
            title: "Cherish Today’s Reflection, Anticipate Tomorrow’s Resilience.",
            desc: "Redefining the standard of regeneration."
        },
        th: {
            subtitle: "มาตรฐานใหม่",
            title: "ชื่นชมเงาสะท้อนของวันนี้\nรอคอยความยืดหยุ่นของวันพรุ่งนี้",
            desc: "นิยามใหม่ของมาตรฐานการฟื้นฟู"
        },
        ar: {
            subtitle: "المعيار الجديد",
            title: "اعتز بانعكاسك اليوم،\nوترقب مرونة الغد.",
            desc: "إعادة تعريف معايير التجديد."
        },
        vn: {
            subtitle: "Tiêu chuẩn Mới",
            title: "Trân trọng Hình ảnh Hôm nay,\nMong chờ Sự Phục hồi của Ngày mai",
            desc: "Định nghĩa lại tiêu chuẩn của sự tái tạo"
        }
    };

    const text = content[lang];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const visual = document.querySelector('.hero-visual-img');
            const text = document.querySelector('#hero-text');
            const particles = document.querySelectorAll('.particle');

            if (visual) {
                visual.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`;
            }
            if (text) {
                text.style.transform = `translateY(${scrollY * 0.1}px)`;
                text.style.opacity = 1 - scrollY / 600;
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
            background: 'radial-gradient(circle at center, #6b0f1a 0%, #3a0509 100%)' /* Refined Deep Burgundy */
        }}>

            {/* Background Particles - Elegant & Slower */}
            <div className="particles-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        background: '#fff8e1', /* Soft Champagne White */
                        borderRadius: '50%',
                        opacity: Math.random() * 0.5 + 0.3,
                        boxShadow: '0 0 8px rgba(255, 248, 225, 0.6)',
                        animation: `twinkle ${Math.random() * 4 + 3}s infinite ease-in-out`
                    }} />
                ))}
            </div>

            {/* Visual Background - Centered, Subtle, Balanced */}
            <div className="hero-visual-img" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                maxWidth: '1200px',
                zIndex: 0,
                opacity: 0.12,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="/assets/hero_bg.png" alt="Background Graphic" style={{
                    width: '110%',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'blur(0.5px)'
                }} />
            </div>

            {/* Main Content - Centered & Luxurious */}
            <div id="hero-text" style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
                maxWidth: '1000px',
                width: '100%'
            }}>
                <p style={{
                    fontSize: '1rem',
                    letterSpacing: '0.3em',
                    color: '#e6cfaa', /* Muted Champagne Gold */
                    fontWeight: '500',
                    marginBottom: '35px',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    borderBottom: '1px solid rgba(230, 207, 170, 0.4)',
                    paddingBottom: '12px'
                }}>{text.subtitle}</p>

                <h1 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', /* Reduced Size (~40%) */
                    lineHeight: '1.4',
                    marginBottom: '45px',
                    color: '#ffffff',
                    textShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                    whiteSpace: 'pre-line',
                    letterSpacing: '0.05em', /* Wider Spacing */
                    fontWeight: '500', /* Medium Weight */
                    fontFamily: 'var(--font-heading, serif)'
                }}>
                    {text.title}
                </h1>

                <p style={{
                    fontSize: '1.15rem',
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: '300',
                    fontFamily: 'var(--font-serif, sans-serif)',
                    fontStyle: 'italic',
                    maxWidth: '650px',
                    lineHeight: '1.7',
                    letterSpacing: '0.02em',
                    marginTop: '0'
                }}>{text.desc}</p>
            </div>

            <style>{`
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
        }
        @media (max-width: 768px) {
            .hero-visual-img img {
                width: 140% !important;
                opacity: 0.15;
            }
            #hero-text h1 {
                margin-bottom: 30px;
            }
        }
      `}</style>
        </section>
    );
};

export default Hero;
