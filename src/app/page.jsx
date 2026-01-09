import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import CoreTech from '../components/sections/CoreTech';
import LNPTech from '../components/sections/LNPTech';
import DualSystem from '../components/sections/DualSystem';
import Evidence from '../components/sections/Evidence';
import Ingredients from '../components/sections/Ingredients';

export const metadata = {
    title: 'DUALYN - Scientific Luxury Skin Booster',
    description: 'Experience the next generation of skin regeneration with DUALYN. Powered by dual PDRN technology.',
};

export default function Home() {
    const lang = 'en'; // Default lang for now until i18n is fully set up
    return (
        <>
            <Hero lang={lang} />
            <Philosophy lang={lang} />
            <CoreTech lang={lang} />
            <LNPTech lang={lang} />
            <DualSystem lang={lang} />
            <Evidence lang={lang} />
            <Ingredients lang={lang} />
        </>
    );
}
