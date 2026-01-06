import React from 'react';

const Philosophy = ({ lang }) => {
    const content = {
        kr: {
            subtitle: "Philosophy",
            headline: "Beyond Ingredients",
            body: "피부 재생을 위해 수많은 성분이 사용되고 있습니다. 그러나 우리는 질문합니다. '이 성분이 실제로 얼마나 피부에 전달되고 있는가?' 듀알린은 성분의 수치가 아니라, 전달 구조의 수치에 집중합니다."
        },
        en: {
            subtitle: "Philosophy",
            headline: "Beyond Ingredients",
            body: "Countless ingredients are used for skin regeneration. However, we ask: 'How much of this ingredient is actually delivered to the skin?' DUALYN focuses on the delivery structure, not just the ingredient levels."
        }
    };

    const text = content[lang];

    return (
        <section className="section bg-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div>
                    <img src="/assets/philosophy_bg.png" alt="Micro Structure" style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                </div>
                <div>
                    <span style={{ display: 'block', color: 'var(--color-burgundy)', fontWeight: '700', marginBottom: '15px', letterSpacing: '2px', textTransform: 'uppercase' }}>{text.subtitle}</span>
                    <h2 style={{ marginBottom: '30px', lineHeight: '1.1' }}>{text.headline}</h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '540px', fontWeight: '400', color: '#4a4a4a' }}>
                        {text.body}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
