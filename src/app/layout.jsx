import './globals.css';
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
            'naver-site-verification': 'YOUR_VERIFICATION_CODE', // Placeholder, user needs to provide or I leave blank/comment
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Since Header uses useState, we will need to wrap it or fix it to be a client component later. 
             Ideally the layout itself remains server component. */}
                <HeaderWrapper />
                <main className="min-h-screen">
                    {children}
                </main>
                <FooterWrapper />
            </body>
        </html>
    );
}

// Temporary wrappers to handle potential client-side requirements until components are fully migrated
// Real implementation will import direct components, assuming they have "use client" if needed.
// For now, let's implement a Client Component wrapper pattern if needed, but easier to just ensure Header/Footer map to client components.

function HeaderWrapper() {
    return <Header lang="en" />;
}
function FooterWrapper() {
    return <Footer lang="en" />;
}
