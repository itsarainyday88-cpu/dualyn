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
    keywords: ['25bp microPDRN', '3rd Gen LNP', 'Skin Booster', 'Pink Vitamin B12', 'Aesthetic Solution', 'PDRN', 'Skin Regeneration'],
};

export default function Home() {
    return (
        <HomeContent />
    );
}
