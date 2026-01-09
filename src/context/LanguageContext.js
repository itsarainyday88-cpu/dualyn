"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get lang from localStorage or default to 'en'
    const [lang, setLang] = useState('en');

    useEffect(() => {
        // Only run on client side
        const savedLang = localStorage.getItem('dualyn-lang');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    const handleSetLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem('dualyn-lang', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
