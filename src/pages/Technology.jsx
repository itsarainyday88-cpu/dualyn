import React from 'react';
import CoreTech from '../components/sections/CoreTech';
import LNPTech from '../components/sections/LNPTech';
import DualSystem from '../components/sections/DualSystem';
import Evidence from '../components/sections/Evidence';

const Technology = ({ lang }) => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <CoreTech lang={lang} />
            <LNPTech lang={lang} />
            <DualSystem lang={lang} />
            <Evidence lang={lang} />
        </div>
    );
};

export default Technology;
