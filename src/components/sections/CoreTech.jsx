import React, { useState } from 'react';
import { Zap, Activity, Microscope } from 'lucide-react';
import micropdrnImage from '../../assets/micropdrn_penetration.png';

const CoreTech = ({ lang }) => {
    const content = {
        kr: {
            subtitle: "Core Tech",
            headline: "microPDRN™",
            keyMessage: "성분을 추가하지 않습니다.\n흡수의 구조를 다시 설계합니다.",
            comparison: { conventional: "Conventional PDRN (Blocked Surface)", micro: "microPDRN™ (Deep Penetration)" },
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
            comparison: { conventional: "Conventional PDRN (Blocked Surface)", micro: "microPDRN™ (Deep Penetration)" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "Under 25bp structure" },
                { icon: <Zap size={24} />, title: "Speed", desc: "Superior absorption speed" },
                { icon: <Activity size={24} />, title: "Regeneration", desc: "Maximized cell response" }
            ]
        },
        th: {
            subtitle: "เทคโนโลยีหลัก",
            headline: "microPDRN™",
            keyMessage: "เราไม่ได้แค่เพิ่มส่วนผสม\nแต่เราออกแบบโครงสร้างการดูดซึมใหม่",
            comparison: { conventional: "PDRN ทั่วไป (ถูกบล็อกที่ผิว)", micro: "microPDRN™ (ซึมลึก)" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "โครงสร้างเล็กกว่า 25bp" },
                { icon: <Zap size={24} />, title: "Speed", desc: "ความเร็วในการดูดซึมที่เหนือกว่า" },
                { icon: <Activity size={24} />, title: "Regeneration", desc: "ตอบสนองต่อเซลล์สูงสุด" }
            ]
        },
        ar: {
            subtitle: "التقنية الأساسية",
            headline: "microPDRN™",
            keyMessage: "نحن لا نضيف المكونات فحسب.\nبل نعيد تصميم هيكل الامتصاص.",
            comparison: { conventional: "PDRN تقليدي (سطح مسدود)", micro: "microPDRN™ (اختراق عميق)" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "هيكل أقل من 25bp" },
                { icon: <Zap size={24} />, title: "السرعة", desc: "سرعة امتصاص فائقة" },
                { icon: <Activity size={24} />, title: "التجديد", desc: "استجابة خلوية قصوى" }
            ]
        },
        vn: {
            subtitle: "Công nghệ Cốt lõi",
            headline: "microPDRN™",
            keyMessage: "Chúng tôi không chỉ thêm thành phần.\nChúng tôi thiết kế lại cấu trúc hấp thụ.",
            comparison: { conventional: "PDRN Truyền thống (Bị chặn ở bề mặt)", micro: "microPDRN™ (Thâm nhập sâu)" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "Cấu trúc dưới 25bp" },
                { icon: <Zap size={24} />, title: "Speed", desc: "Tốc độ hấp thụ vượt trội" },
                { icon: <Activity size={24} />, title: "Regeneration", desc: "Phản ứng tế bào tối đa" }
            ]
        },
        jp: {
            subtitle: "コアテクノロジー",
            headline: "microPDRN™",
            keyMessage: "成分を加えるだけではありません。\n吸収の構造を再設計します。",
            comparison: { conventional: "従来のPDRN (表面でブロック)", micro: "microPDRN™ (深層浸透)" },
            features: [
                { icon: <Microscope size={24} />, title: "25bp", desc: "25bp以下の微細構造" },
                { icon: <Zap size={24} />, title: "Speed", desc: "圧倒的な吸収速度" },
                { icon: <Activity size={24} />, title: "Regeneration", desc: "細胞反応の最大化" }
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
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginTop: '10px', marginBottom: '30px', fontFamily: 'var(--font-serif)', color: 'var(--color-burgundy)', lineHeight: '1' }}>{text.headline}</h2> {/* Increased size to 5rem, reduced margins */}

                    {/* Refined Philosophy Statement */}
                    <div style={{ position: 'relative', padding: '20px 0' }}> {/* Reduced padding from 40px */}
                        <div style={{ width: '2px', height: '30px', background: 'var(--color-burgundy)', margin: '0 auto 20px', opacity: 0.4 }}></div> {/* Thicker, shorter line */}
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
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

                {/* New 3D Simulation Graphic */}
                <div style={{
                    marginBottom: '80px',
                    padding: '0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        maxWidth: '900px',
                        width: '100%',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(99, 13, 22, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative'
                    }}>
                        <img
                            src={micropdrnImage}
                            alt="Conventional PDRN vs microPDRN Penetration Comparison"
                            style={{
                                width: '100%',
                                display: 'block',
                                objectFit: 'cover'
                            }}
                        />

                        {/* Overlay Labels (Optional - if image doesn't have them, or to enforce the specific text requested) */}
                        {/* Using a caption bar below instead for cleaner look with the detailed requested text */}
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: '900px',
                        marginTop: '25px',
                        padding: '0 10px'
                    }}>
                        <div style={{ width: '45%', textAlign: 'center' }}>
                            <p style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.1rem',
                                color: '#666',
                                fontWeight: '500'
                            }}>{text.comparison.conventional}</p>
                        </div>
                        <div style={{ width: '45%', textAlign: 'center' }}>
                            <p style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.2rem',
                                color: 'var(--color-burgundy)',
                                fontWeight: '700'
                            }}>{text.comparison.micro}</p>
                        </div>
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
                                {i === 0 ? 'TECHNOLOGY' : i === 1 ? 'MECHANISM' : 'CLINICAL'}
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
      `}</style>
        </section >
    );
};

export default CoreTech;
