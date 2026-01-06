import React from 'react';

const Ingredients = ({ lang }) => {
    const content = {
        kr: {
            title: "Technical Specification",
            subtitle: "FORMULATION DATA",
            specs: [
                { label: "miPDRN Complex", value: "5 mg/mL", sub: "0.50% microPDRN" },
                { label: "Sodium Hyaluronate (High)", value: "1.80 %", sub: "18mg/mL High Molecular" },
                { label: "Sodium Hyaluronate (Low)", value: "0.50 %", sub: "Low Molecular Optimized" },
                { label: "Polynucleotide (PN)", value: "0.10 %", sub: "Cellular Scaffold" },
                { label: "Cyanocobalamin (Vit B12)", value: "0.0005 %", sub: "High Purity Grade" }
            ]
        },
        en: {
            title: "Technical Specification",
            subtitle: "FORMULATION DATA",
            specs: [
                { label: "miPDRN Complex", value: "5 mg/mL", sub: "0.50% microPDRN" },
                { label: "Sodium Hyaluronate (High)", value: "1.80 %", sub: "18mg/mL High Molecular" },
                { label: "Sodium Hyaluronate (Low)", value: "0.50 %", sub: "Low Molecular Optimized" },
                { label: "Polynucleotide (PN)", value: "0.10 %", sub: "Cellular Scaffold" },
                { label: "Cyanocobalamin (Vit B12)", value: "0.0005 %", sub: "High Purity Grade" }
            ]
        },
        th: {
            title: "ข้อมูลจำเพาะทางเทคนิค",
            subtitle: "ข้อมูลสูตร",
            specs: [
                { label: "miPDRN Complex", value: "5 mg/mL", sub: "0.50% microPDRN" },
                { label: "Sodium Hyaluronate (High)", value: "1.80 %", sub: "18mg/mL โมเลกุลสูง" },
                { label: "Sodium Hyaluronate (Low)", value: "0.50 %", sub: "โมเลกุลต่ำที่เหมาะสม" },
                { label: "Polynucleotide (PN)", value: "0.10 %", sub: "โครงสร้างเซลล์" },
                { label: "Cyanocobalamin (Vit B12)", value: "0.0005 %", sub: "เกรดความบริสุทธิ์สูง" }
            ]
        },
        ar: {
            title: "المواصفات الفنية",
            subtitle: "بيانات التركيبة",
            specs: [
                { label: "miPDRN Complex", value: "5 mg/mL", sub: "0.50% microPDRN" },
                { label: "Sodium Hyaluronate (High)", value: "1.80 %", sub: "18 ملغ/مل جزيئي عالي" },
                { label: "Sodium Hyaluronate (Low)", value: "0.50 %", sub: "جزيئي منخفض محسن" },
                { label: "Polynucleotide (PN)", value: "0.10 %", sub: "دعامة خلوية" },
                { label: "Cyanocobalamin (Vit B12)", value: "0.0005 %", sub: "درجة نقاء عالية" }
            ]
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-white" style={{ color: '#1A1A1A' }}> {/* Alternating: White */}
            <div className="container" style={{ maxWidth: '1000px' }}>

                {/* Header */}
                <div style={{ borderBottom: '2px solid var(--color-burgundy)', paddingBottom: '20px', marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <span style={{ color: 'var(--color-burgundy)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: '700' }}>{text.subtitle}</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginTop: '10px', lineHeight: '1', color: '#1A1A1A' }}>{text.title}</h2>
                    </div>
                    <div style={{ textAlign: 'right', opacity: 0.6, fontSize: '0.8rem', fontFamily: 'monospace', color: '#1A1A1A' }}>
                        REF. DUALYN-2026-V1<br />
                        CERTIFIED GRADE
                    </div>
                </div>

                {/* Spec Grid - CDL Style White Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', /* Responsive 2-column */
                    gap: '20px',
                    width: '100%'
                }}>
                    {text.specs.map((item, index) => (
                        <div key={index} className="spec-card" style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '24px', /* Soft commercial curve */
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 13, 22, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                <h4 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    color: '#2c2c2c',
                                    fontFamily: 'var(--font-body)',
                                    maxWidth: '70%'
                                }}>{item.label}</h4>
                                <span className="pill-tag" style={{
                                    fontSize: '0.75rem',
                                    padding: '4px 12px',
                                    background: '#f2d5d7',
                                    color: 'var(--color-burgundy)',
                                    fontWeight: '700',
                                    borderRadius: '9999px',
                                    whiteSpace: 'nowrap'
                                }}>SPEC</span>
                            </div>

                            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
                                <span style={{
                                    display: 'block',
                                    fontFamily: 'var(--font-body)', /* Ensure Pretendard/Sans for modern look */
                                    fontSize: '3rem', /* Massive Impact */
                                    fontWeight: '800',
                                    color: 'var(--color-burgundy)',
                                    lineHeight: '1',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {item.value}
                                </span>
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    fontWeight: '500',
                                    marginTop: '5px',
                                    display: 'block'
                                }}>{item.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div style={{ marginTop: '60px', paddingTop: '20px', borderTop: '0.5px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontSize: '0.8rem' }}>
                    <span>* All measurements are subject to standard lab tolerance.</span>
                    <span>DUALYN™ ORIGINAL FORMULA</span>
                </div>

            </div>
        </section>
    );
};

export default Ingredients;
