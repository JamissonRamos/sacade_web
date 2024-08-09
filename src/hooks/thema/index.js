import { useState, useEffect } from 'react';

export const useScreenWidth = (width) => {
    const [isWidthMatch, setIsWidthMatch] = useState(window.innerWidth <= width);

    useEffect(() => {
        const handleResize = () => {
            setIsWidthMatch(window.innerWidth <= width);
        };

        window.addEventListener('resize', handleResize);

        // Chama handleResize imediatamente para verificar o tamanho da tela no carregamento
        handleResize();

        // Limpeza do evento de escuta ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    return isWidthMatch;
};

