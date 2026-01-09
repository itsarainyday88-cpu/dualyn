"use client";
import React from 'react';
import { Shield, Activity, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LNPTech = ({ lang: propLang }) => {
    const { lang: contextLang } = useLanguage();
    const lang = propLang || contextLang || 'en';
    const content = {
        kr: {
            title: "성분을 넘어, 전달의 혁신으로",
            subtitle: "3rd GENERATION DELIVERY SYSTEM",
            desc: "리포좀의 한계를 넘어 각질층을 통과하는 3세대 LNP 기술이\n듀알린의 Dual-Layer 성분을 피부 기저층까지 정밀하게 배달합니다.",
            features: [
                { title: "우수한 안정성", eng: "Superior Stability" },
                { title: "높은 세포 흡수율", eng: "High Cell Uptake" },
                { title: "생체 적합성", eng: "Biocompatibility" }
            ]
        },
        en: {
            title: "Beyond Ingredients,\nInnovation in Delivery",
            subtitle: "3rd GENERATION DELIVERY SYSTEM",
            desc: "Beyond the limitations of liposomes, 3rd generation LNP technology\nprecisely delivers DUALYN's Dual-Layer ingredients through the stratum corneum to the basal layer.",
            features: [
                { title: "Superior Stability", eng: "Molecular Stability" },
                { title: "High Cell Uptake", eng: "Enhanced Absorption" },
                { title: "Biocompatibility", eng: "Skin Friendly" }
            ]
        },
        cn: {
            title: "超越成分，\n输送技术的创新",
            subtitle: "第三代输送系统",
            desc: "超越脂质体的局限，第三代LNP技术\n将DUALYN的双层成分精确输送穿过角质层到达基底层。",
            features: [
                { title: "卓越稳定性", eng: "分子稳定性" },
                { title: "高细胞摄取率", eng: "吸收增强" },
                { title: "生物相容性", eng: "亲肤性" }
            ]
        },
        th: {
            title: "เหนือกว่าส่วนผสม\nนวัตกรรมแห่งการส่งผ่าน",
            subtitle: "ระบบส่งผ่านรุ่นที่ 3",
            desc: "ก้าวข้ามขีดจำกัดของไลโปโซมด้วยเทคโนโลยี LNP รุ่นที่ 3\nส่งผ่านส่วนผสม Dual-Layer ของ DUALYN ผ่านชั้นผิวหนังกำพร้าสู่ชั้นฐานได้อย่างแม่นยำ",
            features: [
                { title: "ความเสถียรที่เหนือกว่า", eng: "Molecular Stability" },
                { title: "การดูดซึมเข้าเซลล์สูง", eng: "Enhanced Absorption" },
                { title: "ความเข้ากันได้ทางชีวภาพ", eng: "Skin Friendly" }
            ]
        },
        ar: {
            title: "ما وراء المكونات،\nابتكار في التوصيل",
            subtitle: "نظام توصيل الجيل الثالث",
            desc: "تجاوز حدود الليبوسومات، تقنية LNP من الجيل الثالث\nتوصل مكونات DUALYN مزدوجة الطبقة بدقة عبر الطبقة القرنية إلى الطبقة القاعدية.",
            features: [
                { title: "ثبات فائق", eng: "Molecular Stability" },
                { title: "امتصاص خلوي عالي", eng: "Enhanced Absorption" },
                { title: "التوافق الحيوي", eng: "Skin Friendly" }
            ]
        },
        vn: {
            title: "Vượt qua Thành phần,\nĐổi mới trong Dẫn truyền",
            subtitle: "HỆ THỐNG DẪN TRUYỀN THẾ HỆ 3",
            desc: "Vượt qua giới hạn của liposome, công nghệ LNP thế hệ thứ 3\ndẫn truyền chính xác các thành phần Dual-Layer của DUALYN qua lớp sừng đến lớp đáy.",
            features: [
                { title: "Độ ổn định vượt trội", eng: "Molecular Stability" },
                { title: "Hấp thụ tế bào cao", eng: "Enhanced Absorption" },
                { title: "Tương thích sinh học", eng: "Skin Friendly" }
            ]
        },
        jp: {
            title: "成分を超えて、\nデリバリーの革新へ",
            subtitle: "第3世代デリバリーシステム",
            desc: "リポソームの限界を超え、第3世代LNP技術が\nDUALYNのDual-Layer成分を角質層を通過して基底層まで正確に届けます。",
            features: [
                { title: "優れた安定性", eng: "Molecular Stability" },
                { title: "高い細胞吸収率", eng: "Enhanced Absorption" },
                { title: "生体適合性", eng: "Skin Friendly" }
            ]
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-white" style={{ padding: '100px 0' }}>
            <div className="container">

                {/* Header */}
                <div className="text-center" style={{ marginBottom: '80px' }}>
                    <span className="pill-tag" style={{
                        background: '#f2d5d7', color: 'var(--color-burgundy)',
                        padding: '6px 16px', fontWeight: '700', fontSize: '0.8rem',
                        marginBottom: '20px', display: 'inline-block'
                    }}>
                        {text.subtitle}
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        color: 'var(--color-burgundy)',
                        whiteSpace: 'pre-line',
                        lineHeight: '1.2'
                    }}>
                        {text.title}
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        marginTop: '30px',
                        whiteSpace: 'pre-line',
                        lineHeight: '1.8'
                    }}>
                        {text.desc}
                    </p>
                </div>

                {/* Graphic Visual - LNP vs Liposome */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '80px',
                    position: 'relative'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: '400px',
                        background: '#F9F9F9',
                        borderRadius: '30px',
                        border: '1px solid #eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
                    }}>
                        {/* Placeholder for "3rd Generation Delivery System" Graphic */}
                        {/* In a real scenario, this would be a custom illustration */}
                        <div style={{ textAlign: 'center', opacity: 0.5 }}>
                            <div style={{
                                display: 'flex',
                                gap: '60px',
                                alignItems: 'center'
                            }}>
                                {/* Liposome (Old) */}
                                <div style={{ opacity: 0.4, transform: 'scale(0.8)' }}>
                                    <div style={{
                                        width: '150px', height: '150px',
                                        borderRadius: '50%', border: '4px dashed #999',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Liposome</span>
                                    </div>
                                    <p style={{ marginTop: '15px' }}>2nd Gen</p>
                                </div>

                                {/* Arrow */}
                                <div style={{ fontSize: '2rem', color: 'var(--color-burgundy)' }}>➔</div>

                                {/* LNP (New) */}
                                <div>
                                    <div style={{
                                        width: '180px', height: '180px',
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle at 30% 30%, #f2d5d7, var(--color-burgundy))',
                                        boxShadow: '0 10px 30px rgba(99, 13, 22, 0.3)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white'
                                    }}>
                                        <span style={{ fontSize: '2rem', fontWeight: '800' }}>LNP</span>
                                    </div>
                                    <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'var(--color-burgundy)' }}>3rd Gen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metric Capsules */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '30px',
                    flexWrap: 'wrap'
                }}>
                    {text.features.map((item, index) => (
                        <div key={index} style={{
                            background: 'white',
                            border: '1px solid #f2d5d7',
                            borderRadius: '50px', /* Capsule Shape */
                            padding: '20px 40px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            boxShadow: '0 10px 20px rgba(99, 13, 22, 0.05)',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                background: 'var(--color-burgundy)',
                                borderRadius: '50%',
                                width: '40px', height: '40px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'white'
                            }}>
                                {index === 0 ? <Shield size={20} /> : index === 1 ? <Zap size={20} /> : <Activity size={20} />}
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-burgundy)', fontWeight: '700' }}>{item.title}</h4>
                                <span style={{ fontSize: '0.8rem', color: '#999' }}>{item.eng}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LNPTech;
