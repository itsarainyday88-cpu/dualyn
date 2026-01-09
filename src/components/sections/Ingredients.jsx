"use client";
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
        },
        vn: {
            title: "Thông số Kỹ thuật",
            subtitle: "DỮ LIỆU CÔNG THỨC",
            specs: [
                { label: "miPDRN Complex", value: "5 mg/mL", sub: "0.50% microPDRN" },
                { label: "Sodium Hyaluronate (High)", value: "1.80 %", sub: "18mg/mL Phân tử Cao" },
                { label: "Sodium Hyaluronate (Low)", value: "0.50 %", sub: "Phân tử Thấp Tối ưu hóa" },
                { label: "Polynucleotide (PN)", value: "0.10 %", sub: "Khung Tế bào" },
                { label: "Cyanocobalamin (Vit B12)", value: "0.0005 %", sub: "Cấp độ Tinh khiết Cao" }
            ]
        },
        jp: {
            title: "技術仕様",
            subtitle: "処方データ",
            specs: [
                { label: "miPDRN Complex", value: "5 mg/mL", sub: "0.50% microPDRN" },
                { label: "Sodium Hyaluronate (High)", value: "1.80 %", sub: "18mg/mL 高分子" },
                { label: "Sodium Hyaluronate (Low)", value: "0.50 %", sub: "低分子最適化" },
                { label: "Polynucleotide (PN)", value: "0.10 %", sub: "細胞足場" },
                { label: "Cyanocobalamin (Vit B12)", value: "0.0005 %", sub: "高純度グレード" }
            ]
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-white" style={{ color: '#1A1A1A', padding: '100px 0' }}> {/* Alternating: White */}
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', /* Optimized for mobile */
                    gap: '60px',
                    width: '100%'
                }}>
                    {text.specs.map((item, index) => (
                        <SpecCard key={index} item={item} />
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

const SpecCard = ({ item }) => {
    // Default to displaying ppm (true)
    const [isPpm, setIsPpm] = React.useState(true);

    // Check if the value is a percentage
    const isPercentage = item.value.includes('%');

    // Calculate display value
    let displayValue = item.value;
    if (isPercentage && isPpm) {
        const numValue = parseFloat(item.value);
        if (!isNaN(numValue)) {
            // 1% = 10,000 ppm
            displayValue = `${(numValue * 10000).toLocaleString()} ppm`;
        }
    }

    return (
        <div className="spec-card" style={{
            background: 'white',
            padding: '16px', /* Minimal padding - Reduced further */
            borderRadius: '16px', /* Soft commercial curve - Reduced further */
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            minHeight: '140px', /* Uniform pricing - Significantly Reduced */
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(0,0,0,0.03)',
            cursor: isPercentage ? 'pointer' : 'default',
            userSelect: 'none'
        }}
            onClick={() => isPercentage && setIsPpm(!isPpm)}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 13, 22, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h4 style={{
                    fontSize: '0.9rem', /* Reduced from 1.0rem */
                    fontWeight: '700',
                    color: '#2c2c2c',
                    fontFamily: 'var(--font-body)',
                    maxWidth: '80%'
                }}>{item.label}</h4>
                <span className="pill-tag" style={{
                    fontSize: '0.65rem', /* Reduced */
                    padding: '2px 8px', /* Reduced padding */
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
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', /* Significantly Reduced from 1.6/3.5/2.2 */
                    fontWeight: '800',
                    color: 'var(--color-burgundy)',
                    lineHeight: '1',
                    letterSpacing: '-0.02em',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isPpm ? 0.8 : 1,
                    transform: isPpm ? 'scale(0.95)' : 'scale(1)',
                    transformOrigin: 'right center'
                }}>
                    {displayValue}
                </span>
                <span style={{
                    fontSize: '0.8rem', /* Reduced from 0.85rem */
                    color: '#666',
                    fontWeight: '500',
                    marginTop: '4px',
                    display: 'block'
                }}>{item.sub}</span>
            </div>
        </div>
    );
};

export default Ingredients;
