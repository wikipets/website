import React, { createContext, useContext, useState } from 'react';

const ConteudoContext = createContext();

export const ConteudoProvider = ({ children }) => {
    const [conteudo, setConteudo] = useState('');

    return (
        <ConteudoContext.Provider value={{ conteudo, setConteudo }}>
            {children}
        </ConteudoContext.Provider>
    );
};

export const useConteudo = () => {
    const context = useContext(ConteudoContext);
    if (!context) {
        throw new Error('useConteudo deve ser usado dentro de um ConteudoProvider');
    }
    return context;
};
