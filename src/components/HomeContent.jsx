"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import CoreTech from './sections/CoreTech';
import LNPTech from './sections/LNPTech';
import DualSystem from './sections/DualSystem';
import Evidence from './sections/Evidence';
import Ingredients from './sections/Ingredients';

const HomeContent = () => {
    const { lang } = useLanguage();
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

export default HomeContent;
