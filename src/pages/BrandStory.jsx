import React from 'react';
import Philosophy from '../components/sections/Philosophy';

const BrandStory = ({ lang }) => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Philosophy lang={lang} />
        </div>
    );
};

export default BrandStory;
