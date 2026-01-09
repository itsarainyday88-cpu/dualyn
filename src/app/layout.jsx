import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    metadataBase: new URL('https://dualyn.com'),
    title: 'DUALYN - Premium Skin Booster',
    description: 'Dualyn combines PDRN and polynucleotide for advanced skin regeneration. Experience scientific luxury.',
    openGraph: {
        title: 'DUALYN - Premium Skin Booster',
        description: 'Advanced dual-action skin regeneration technology.',
        type: 'website',
        locale: 'en_US',
        siteName: 'DUALYN',
        images: [
            {
                url: '/assets/hero_bg.png',
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
        other: {
            'naver-site-verification': 'YOUR_VERIFICATION_CODE',
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
