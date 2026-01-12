import HomeContent from '../components/HomeContent';

export const metadata = {
    title: '25bp microPDRN & 3rd Gen LNP - Scientific Luxury | DUALYN', // CTR focused: Specific technical USPs
    description: 'Experience overwhelming penetration with our revolutionary "Delivery Structure". DUALYN is a professional aesthetic solution featuring 25bp microPDRN and 3rd Gen LNP technology for superior skin regeneration.', // Keywords: Penetration, Delivery Structure, Professional
    openGraph: {
        title: 'DUALYN: The Innovation of 25bp microPDRN', // Optimized for social sharing
        description: 'Beyond Ingredients. 3rd Gen LNP Delivery System with Pink Vitamin B12. Discover the new standard in skin boosters.',
        images: [
            {
                url: '/assets/pink_texture_og.png', // Suggesting a specific visual for "Pink Vitamin B12" if available, falling back to layout default if not
                width: 1200,
                height: 630,
                alt: 'DUALYN Pink 3rd Gen LNP',
            },
        ],
    },
    keywords: [
        // Brand & Tech (Global Identifiers)
        'Dualyn', 'PDRN', 'PN', '25bp microPDRN', '3rd Gen LNP',

        // English (EN)
        'New Generation Skin Booster', 'Skin Booster', 'Aesthetic Solution', 'Skin Regeneration',

        // Korean (KR)
        '신세대 스킨부스터', '듀알린', '스킨부스터', '피부재생', '마이크로PDRN', '3세대 LNP',

        // Chinese (CN)
        '新一代皮肤促进剂', '皮肤促进剂', '皮肤再生', '第三代LNP',

        // Thai (TH)
        'สกินบูสเตอร์รุ่นใหม่', 'สกินบูสเตอร์', 'ฟื้นฟูผิว', 'LNP รุ่นที่ 3',

        // Arabic (AR)
        'معزز البشرة من الجيل الجديد', 'معزز البشرة', 'تجديد البشرة', 'LNP الجيل الثالث',

        // Vietnamese (VN)
        'Skin Booster thế hệ mới', 'Tái tạo da', 'LNP thế hệ 3',

        // Japanese (JP)
        '新世代スキンブースター', 'スキンブースター', '肌再生', '第3世代LNP'
    ],
};

export default function Home() {
    return (
        <HomeContent />
    );
}
