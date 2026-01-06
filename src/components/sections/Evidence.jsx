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
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-light-rose"> {/* Alternating: Light Rose */}
            <div className="container">
                <div className="grid-cols-2">
                    <div>
                        <span style={{ color: 'var(--color-burgundy)', fontWeight: '600' }}>{text.subtitle}</span>
                        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>{text.title}</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>{text.desc}</p>

                        <div style={{ marginTop: '40px' }}>
                            <h4 style={{ marginBottom: '10px' }}>{text.chart}</h4>
                            {/* Placeholder Chart/Graph */}
                            <div style={{ width: '100%', height: '20px', background: '#eee', borderRadius: '10px', marginBottom: '10px', overflow: 'hidden' }}>
                                <div style={{ width: '90%', height: '100%', background: 'linear-gradient(90deg, var(--color-burgundy), var(--color-orange))' }}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
                                <span>Control</span>
                                <span><b>microPDRN + HA</b></span>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            width: '350px',
                            height: '350px',
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
