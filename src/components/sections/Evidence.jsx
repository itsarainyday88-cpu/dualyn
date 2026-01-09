"use client";
import React from 'react';

const Evidence = ({ lang }) => {
    const content = {
        kr: {
            subtitle: "Evidence",
            title: "Proven Results",
            desc: "HA+PN 병용 시너지를 통한 가속화되는 조직 회복.",
            chart: "세포 이동 속도 비교 (Wound Healing Assay)"
        },
        en: {
            subtitle: "Evidence",
            title: "Proven Results",
            desc: "Accelerated tissue recovery through the synergy of HA+PN.",
            chart: "Cell Migration Rate Comparison (Wound Healing Assay)"
        },
        th: {
            subtitle: "หลักฐาน",
            title: "ผลลัพธ์ที่พิสูจน์แล้ว",
            desc: "เร่งการฟื้นฟูเนื้อเยื่อผ่านการทำงานร่วมกันของ HA+PN",
            chart: "เปรียบเทียบอัตราการเคลื่อนที่ของเซลล์ (Wound Healing Assay)"
        },
        ar: {
            subtitle: "الأدلة",
            title: "نتائج مثبتة",
            desc: "تسريع استعادة الأنسجة من خلال تآزر HA+PN.",
            chart: "مقارنة معدل هجرة الخلايا (Wound Healing Assay)"
        },
        vn: {
            subtitle: "Bằng chứng",
            title: "Kết quả Đã được Chứng minh",
            desc: "Tăng tốc phục hồi mô thông qua sự hiệp đồng của HA+PN.",
            chart: "So sánh Tốc độ Di chuyển Tế bào (Thử nghiệm Chữa lành Vết thương)"
        },
        jp: {
            subtitle: "エビデンス",
            title: "実証された効果",
            desc: "HA+PNの相乗効果による組織回復の加速。",
            chart: "細胞移動速度の比較 (創傷治癒アッセイ)"
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-light-rose" style={{ padding: '98px 0' }}> {/* Alternating: Light Rose */}
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <span style={{ color: 'var(--color-burgundy)', fontWeight: '600', fontSize: '1.2rem' }}>{text.subtitle}</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', marginBottom: '20px' }}>{text.title}</h2>
                        <p style={{ fontSize: '1.45rem', marginBottom: '40px' }}>{text.desc}</p>

                        <div style={{ marginTop: '50px' }}>
                            <h4 style={{ marginBottom: '25px', fontSize: '1.2rem', fontWeight: '700', color: '#333' }}>
                                {text.chart}
                                <span style={{ display: 'block', marginTop: '4px', fontSize: '0.8em', fontWeight: '400', color: '#666' }}>(Gap Closure Rate at 24h)</span>
                            </h4>

                            {/* Chart Container */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                                {/* Control Group */}
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '1rem', color: '#666' }}>
                                        <span>Control</span>
                                        <span style={{ fontSize: '1rem', fontWeight: '700' }}>42.5% ± 3.2</span>
                                    </div>
                                    <div style={{ width: '100%', background: '#eee', height: '24px', borderRadius: '12px', position: 'relative', overflow: 'visible' }}>
                                        <div style={{ width: '42.5%', height: '100%', background: '#999', borderRadius: '12px 0 0 12px', position: 'relative' }}>
                                            {/* Error Bar: Line */}
                                            <div style={{ position: 'absolute', right: '-15px', top: '50%', marginTop: '-1px', width: '15px', height: '2px', background: '#666' }}></div>
                                            {/* Error Bar: Cap */}
                                            <div style={{ position: 'absolute', right: '-15px', top: '50%', marginTop: '-6px', width: '2px', height: '12px', background: '#666' }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Test Group */}
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '1.1rem', color: 'var(--color-burgundy)', fontWeight: '700' }}>
                                        <span>microPDRN + HA</span>
                                        <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>98.7% ± 1.5</span>
                                    </div>
                                    <div style={{ width: '100%', background: '#eee', height: '24px', borderRadius: '12px', position: 'relative', overflow: 'visible' }}>
                                        <div style={{ width: '98.7%', height: '100%', background: 'linear-gradient(90deg, var(--color-burgundy), var(--color-orange))', borderRadius: '12px 0 0 12px', position: 'relative' }}>
                                            {/* Error Bar: Line */}
                                            <div style={{ position: 'absolute', right: '-10px', top: '50%', marginTop: '-1px', width: '10px', height: '2px', background: '#333' }}></div>
                                            {/* Error Bar: Cap */}
                                            <div style={{ position: 'absolute', right: '-10px', top: '50%', marginTop: '-6px', width: '2px', height: '12px', background: '#333' }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1 1 300px' }}>
                        <div style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto',
                            aspectRatio: '1 / 1',
                            borderRadius: '50%',
                            border: '10px solid white',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img src="/assets/evidence_bg.png" alt="Cell Regeneration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Evidence;
