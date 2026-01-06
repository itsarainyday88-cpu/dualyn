import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import CoreTech from '../components/sections/CoreTech';
import LNPTech from '../components/sections/LNPTech';
import DualSystem from '../components/sections/DualSystem';
import Evidence from '../components/sections/Evidence';
import Ingredients from '../components/sections/Ingredients';

const Home = ({ lang }) => {
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
};

export default Home;
