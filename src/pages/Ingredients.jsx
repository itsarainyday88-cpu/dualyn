import React from 'react';
import IngredientsSection from '../components/sections/Ingredients';

const Ingredients = ({ lang }) => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <IngredientsSection lang={lang} />
        </div>
    );
};

export default Ingredients;
