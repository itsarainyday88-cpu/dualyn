import React from 'react';

const Footer = ({ lang }) => {
    const content = {
        kr: { inquiry: '글로벌 파트너십 문의', btn: '공식 홈페이지 문의하기' },
        en: { inquiry: 'Global Partnership Inquiry', btn: 'Contact via Official Website' },
        th: { inquiry: 'ติดต่อความร่วมมือทางธุรกิจ', btn: 'ติดต่อผ่านเว็บไซต์ทางการ' },
        ar: { inquiry: 'استفسار عن الشراكة العالمية', btn: 'تواصل عبر الموقع الرسمي' },
        vn: { inquiry: 'Yêu cầu Đối tác Toàn cầu', btn: 'Liên hệ qua Website Chính thức' }
    };
    const text = content[lang] || content.en;

    return (
        <footer style={{ background: 'var(--color-burgundy)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: 'white', marginBottom: '20px' }}>DUALYN</h2>
                <p style={{ opacity: 0.7, marginBottom: '40px' }}>
                    {text.inquiry}
                </p>
                {/* Action Button - Pill Shape & Hover Fill */}
                <a href="http://biobijou.co.kr/sub4/inquiry.php" target="_blank" rel="noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '16px 50px',
                        background: 'transparent',
                        border: '1px solid white', /* Outlined initially */
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1rem',
                        borderRadius: '9999px', /* Full Pill */
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.05em'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'var(--color-burgundy)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'white';
                    }}
                >
                    {text.btn}
                </a>

                <div style={{ marginTop: '60px', fontSize: '0.8rem', opacity: 0.5 }}>
                    © 2026 BIOBIJOU. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
