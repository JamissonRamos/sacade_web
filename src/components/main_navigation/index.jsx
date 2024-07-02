import React, { useEffect, useState } from 'react'
import SidebarWeb from './sidebar_web'
import SidebarMobile from './sidebar_mobile'


const MainNavigation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 475);
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };
        window.addEventListener('resize', handleResize);
        // Limpeza do evento de escuta ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    
    return (
        <>
            {
                isMobile ? <SidebarMobile /> : <SidebarWeb showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
            }
            
        </>
    )
    }

    export default MainNavigation