import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    metadataBase: new URL('https://dualyn-bijou.com'),
    title: {
        default: 'DUALYN - Premium Skin Booster',
        template: '%s | DUALYN',
    },
    description: 'Dualyn combines PDRN and polynucleotide for advanced skin regeneration. Experience scientific luxury.',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'DUALYN - Premium Skin Booster',
        description: 'Advanced dual-action skin regeneration technology.',
        type: 'website',
        locale: 'en_US',
        siteName: 'DUALYN',
        images: [
            {
                url: '/assets/hero_bg.png', // Ensure this asset exists or update to a valid OG image
                width: 1200,
                height: 630,
                alt: 'DUALYN Premium Skin Booster',
            },
        ],
    },
    alternates: {
        canonical: '/',
    },
    verification: {
        google: '5FwD5E-EiJHtWupncuuIIpxhjLust7LwKTkIG-fB8e0',
        other: {
            // 'naver-site-verification': 'YOUR_VERIFICATION_CODE', // Uncomment and add code if available
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>
                    <Header />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
