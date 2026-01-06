import React, { useState } from 'react';
import { Zap, Activity, Microscope } from 'lucide-react';

const CoreTech = ({ lang }) => {
    const content = {
        kr: {
            subtitle: "Core Tech",
            headline: "microPDRN™",
            keyMessage: "성분을 추가하지 않습니다.\n흡수의 구조를 다시 설계합니다.",
            comparison: { conventional: "Conventional PDRN", micro: "microPDRN" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "25bp 이하 초저분자 구조" },
                { icon: <Zap size={24} />, title: "Speed", desc: "압도적인 흡수 속도" },
                { icon: <Activity size={24} />, title: "Regeneration", desc: "세포 반응 극대화" }
            ]
        },
        en: {
            subtitle: "Core Tech",
            headline: "microPDRN™",
            keyMessage: "We don't just add ingredients.\nWe redesign the absorption structure.",
            comparison: { conventional: "Conventional PDRN", micro: "microPDRN" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "Under 25bp structure" },
                { icon: <Zap size={24} />, title: "Speed", desc: "Superior absorption speed" },
                { icon: <Activity size={24} />, title: "Regeneration", desc: "Maximized cell response" }
            ]
        }
    };

    const text = content[lang];
    const [activeFeature, setActiveFeature] = useState(null);

    return (
        <section className="section bg-light-rose" style={{ overflow: 'hidden' }}>
            <div className="container">

                {/* Header Area */}
                {/* Header Area */}
                <div className="text-center" style={{ marginBottom: '50px' }}> {/* Reduced from 80px */}
                    <span style={{ color: 'var(--color-burgundy)', letterSpacing: '3px', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase' }}>{text.subtitle}</span>
                    <h2 style={{ fontSize: '5rem', marginTop: '10px', marginBottom: '30px', fontFamily: 'var(--font-serif)', color: 'var(--color-burgundy)', lineHeight: '1' }}>{text.headline}</h2> {/* Increased size to 5rem, reduced margins */}

                    {/* Refined Philosophy Statement */}
                    <div style={{ position: 'relative', padding: '20px 0' }}> {/* Reduced padding from 40px */}
                        <div style={{ width: '2px', height: '30px', background: 'var(--color-burgundy)', margin: '0 auto 20px', opacity: 0.4 }}></div> {/* Thicker, shorter line */}
                        <h3 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                            lineHeight: '1.5',
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            whiteSpace: 'pre-line',
                            fontWeight: '400',
                            color: '#2c2c2c'
                        }}>
                            {text.keyMessage}
                        </h3>
                        <div style={{ width: '1px', height: '40px', background: 'var(--color-burgundy)', margin: '30px auto 0', opacity: 0.3 }}></div>
                    </div>
                </div>

                {/* Minimalist Schematic Comparison */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '80px',
                    marginBottom: '100px',
                    padding: '60px 0',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>

                    {/* Conventional Left */}
                    <div className="text-center" style={{ opacity: 0.5 }}>
                        <div style={{
                            width: '200px', height: '200px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            background: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 25px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Heavy, dense lines representing large molecules */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'scale(1.5)' }}>
                                <path d="M10,10 Q30,40 50,10 T90,10" fill="none" stroke="#999" strokeWidth="3" />
                                <path d="M-10,30 Q20,60 50,30 T110,30" fill="none" stroke="#999" strokeWidth="4" />
                                <path d="M0,50 Q40,80 60,50 T100,50" fill="none" stroke="#999" strokeWidth="3" />
                                <path d="M10,70 Q30,90 50,70 T90,70" fill="none" stroke="#999" strokeWidth="5" />
                                <path d="M20,90 Q50,60 80,90" fill="none" stroke="#999" strokeWidth="4" />
                            </svg>
                        </div>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', letterSpacing: '0.05em' }}>{text.comparison.conventional}</p>
                    </div>

                    <div style={{ height: '100px', borderLeft: '1px solid #ddd', transform: 'rotate(15deg)' }}></div>

                    {/* microPDRN Right */}
                    <div className="text-center">
                        <div style={{
                            width: '200px', height: '200px',
                            borderRadius: '50%',
                            border: '1px solid var(--color-burgundy)',
                            background: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 25px',
                            position: 'relative',
                            boxShadow: '0 20px 40px rgba(99, 13, 22, 0.05)'
                        }}>
                            {/* Fine, elegant lines representing micro molecules (25bp) */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100" className="micro-structure">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-rose)" strokeWidth="0.5" opacity="0.5" />
                                <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-rose)" strokeWidth="0.5" opacity="0.7" />
                                {[...Array(12)].map((_, i) => (
                                    <line
                                        key={i}
                                        x1="50" y1="50"
                                        x2={50 + 35 * Math.cos(i * 30 * Math.PI / 180)}
                                        y2={50 + 35 * Math.sin(i * 30 * Math.PI / 180)}
                                        stroke="var(--color-burgundy)"
                                        strokeWidth="0.5"
                                        strokeDasharray="2 2"
                                    />
                                ))}
                                <circle cx="50" cy="50" r="2" fill="var(--color-burgundy)" />

                                {/* Orbiting Particles */}
                                <g className="orbiting-particles">
                                    <circle r="1.5" fill="var(--color-orange)">
                                        <animateMotion dur="4s" repeatCount="indefinite" path="M 0,-30 A 30,30 0 1,1 0,30 A 30,30 0 1,1 0,-30" />
                                    </circle>
                                    <circle r="1.5" fill="var(--color-orange)">
                                        <animateMotion dur="6s" repeatCount="indefinite" path="M 0,-20 A 20,20 0 1,0 0,20 A 20,20 0 1,0 0,-20" />
                                    </circle>
                                </g>
                            </svg>
                        </div>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-burgundy)', letterSpacing: '0.05em' }}>{text.comparison.micro}</p>
                    </div>
                </div>

                {/* Interactive Features - CDL Info Units */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginTop: '60px'
                }}>
                    {text.features.map((f, i) => (
                        <div key={i}
                            onMouseEnter={() => setActiveFeature(i)}
                            onMouseLeave={() => setActiveFeature(null)}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '30px',
                                boxShadow: activeFeature === i ? '0 20px 40px rgba(99, 13, 22, 0.15)' : '0 4px 20px rgba(0,0,0,0.02)',
                                border: '1px solid rgba(0,0,0,0.03)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>

                            {/* Tag */}
                            <div className="pill-tag" style={{
                                display: 'inline-block',
                                padding: '6px 14px',
                                background: i === 0 ? '#E3F2FD' : i === 1 ? '#FFF3E0' : '#E8F5E9',
                                color: i === 0 ? '#1565C0' : i === 1 ? '#EF6C00' : '#2E7D32',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                marginBottom: '20px'
                            }}>
                                {i === 0 ? 'PATENTED' : i === 1 ? 'MECHANISM' : 'CLINICAL'}
                            </div>

                            {/* Icon/Visual - Integrated */}
                            <div style={{
                                width: '80px', height: '80px',
                                background: 'var(--color-bg)',
                                borderRadius: '20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '25px',
                                color: 'var(--color-burgundy)'
                            }}>
                                {React.cloneElement(f.icon, { size: 40 })}
                            </div>

                            {/* Text Content */}
                            <h4 style={{
                                fontSize: '1.4rem',
                                color: '#1A1A1A',
                                fontWeight: '700',
                                marginBottom: '10px',
                                lineHeight: '1.2'
                            }}>{f.title}</h4>

                            <p style={{
                                fontSize: '1rem',
                                color: '#666',
                                lineHeight: '1.6',
                                fontWeight: '500'
                            }}>
                                {i === 0 ? 'Micro-sized particles for deep penetration.' : i === 1 ? 'Dual action PDRN + HA synergy.' : 'Clinically proven skin regeneration.'}
                            </p>

                            {/* Hover Active Indicator */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                height: '4px',
                                background: 'var(--color-burgundy)',
                                transform: activeFeature === i ? 'scaleX(1)' : 'scaleX(0)',
                                transformOrigin: 'left',
                                transition: 'transform 0.3s ease'
                            }}></div>
                            {/* Elegant Tooltip - Restored */}
                            <div style={{
                                position: 'absolute',
                                top: '120%',
                                left: '50%',
                                transform: activeFeature === i ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)',
                                padding: '15px 20px',
                                background: 'white',
                                color: '#2c2c2c',
                                border: '1px solid rgba(0,0,0,0.1)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                fontSize: '0.85rem',
                                width: '220px',
                                opacity: activeFeature === i ? 1 : 0,
                                pointerEvents: 'none',
                                transition: 'all 0.3s',
                                zIndex: 10,
                                fontFamily: 'var(--font-body)'
                            }}>
                                {f.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .orbiting-particles {
            transform-origin: 50px 50px;
            animation: spin 20s linear infinite;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
        </section >
    );
};

export default CoreTech;
