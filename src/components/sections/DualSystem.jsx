"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const DualSystem = ({ lang: propLang }) => {
    const { lang: contextLang } = useLanguage();
    const lang = propLang || contextLang || 'en';
    const content = {
        kr: {
            subtitle: "Dual System",
            title: "Immediate & Lasting",
            items: [
                { title: "microPDRN", desc: "초기 세포 반응 유도" },
                { title: "PN", desc: "장기적인 조직 개선 및 탄력 유지" },
                { title: "Multi-HA", desc: "즉각적 수분 공급 + 지속적 보습" },
                { title: "Vitamin B12", desc: "세포 에너지 대사 활성화" }
            ]
        },
        en: {
            subtitle: "Dual System",
            title: "Immediate & Lasting",
            items: [
                { title: "microPDRN", desc: "Induces initial cellular response" },
                { title: "PN", desc: "Long-term tissue improvement" },
                { title: "Multi-HA", desc: "Immediate hydration + sustained moisture" },
                { title: "Vitamin B12", desc: "Activates cell energy metabolism", highlight: true }
            ]
        },
        cn: {
            subtitle: "双重系统",
            title: "即效 & 持久",
            items: [
                { title: "microPDRN", desc: "诱导初期细胞反应" },
                { title: "PN", desc: "长期组织改善" },
                { title: "Multi-HA", desc: "即刻补水 + 持续保湿" },
                { title: "Vitamin B12", desc: "激活细胞能量代谢", highlight: true }
            ]
        },
        th: {
            subtitle: "ระบบคู่ขนาน",
            title: "เห็นผลทันที & ยั่งยืน",
            items: [
                { title: "microPDRN", desc: "กระตุ้นการตอบสนองของเซลล์ในระยะแรก" },
                { title: "PN", desc: "ปรับปรุงเนื้อเยื่อและคงความยืดหยุ่นในระยะยาว" },
                { title: "Multi-HA", desc: "เติมน้ำทันที + ชุ่มชื้นยาวนาน" },
                { title: "Vitamin B12", desc: "กระตุ้นการเผาผลาญพลังงานของเซลล์", highlight: true }
            ]
        },
        ar: {
            subtitle: "نظام مزدوج",
            title: "فوري ودائم",
            items: [
                { title: "microPDRN", desc: "يحفز الاستجابة الخلوية الأولية" },
                { title: "PN", desc: "تحسين الأنسجة على المدى الطويل" },
                { title: "Multi-HA", desc: "ترطيب فوري + ترطيب مستدام" },
                { title: "Vitamin B12", desc: "ينشط عملية التمثيل الغذائي لطاقة الخلية", highlight: true }
            ]
        },
        vn: {
            subtitle: "Hệ thống Kép",
            title: "Tức thì & Lâu dài",
            items: [
                { title: "microPDRN", desc: "Kích thích phản ứng tế bào ban đầu" },
                { title: "PN", desc: "Cải thiện mô lâu dài" },
                { title: "Multi-HA", desc: "Cấp nước tức thì + dưỡng ẩm bền vững" },
                { title: "Vitamin B12", desc: "Kích hoạt chuyển hóa năng lượng tế bào", highlight: true }
            ]
        },
        jp: {
            subtitle: "デュアルシステム",
            title: "即効性と持続性",
            items: [
                { title: "microPDRN", desc: "初期細胞反応を誘導" },
                { title: "PN", desc: "長期的な組織改善と弾力維持" },
                { title: "Multi-HA", desc: "即時の水分供給 + 持続的な保湿" },
                { title: "Vitamin B12", desc: "細胞エネルギー代謝の活性化", highlight: true }
            ]
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-white" style={{ paddingBottom: '108px' }}> {/* Alternating: White */}
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <span className="pill-tag" style={{
                        background: '#f2d5d7', color: 'var(--color-burgundy)',
                        padding: '6px 16px', fontWeight: '700', fontSize: '0.8rem',
                        marginBottom: '20px', display: 'inline-block'
                    }}>
                        FULL FACE PROTOCOL
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-burgundy)', marginBottom: '10px' }}>{text.title}</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>{text.desc}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {text.items.map((item, idx) => (
                        <div key={idx} style={{
                            background: 'white',
                            padding: '40px 20px',
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            borderTop: `4px solid ${item.highlight ? '#f45d48' : 'var(--color-burgundy)'}`, /* Conditional Border Color */
                            textAlign: 'center'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: item.highlight ? '#f45d48' : 'var(--color-burgundy)' /* Conditional Text Color */ }}>
                                {item.title}
                            </h3>
                            <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DualSystem;
