import React from 'react';
import * as S from './styled';
import { Theme } from '../../../theme';
import Header from './header';
import Body from './body';
import Footer from './Footer';
import ArrowShowSidebar from './arrow_show_sidebar';

const SidebarWeb = ({showSidebar, toggleSidebar}) => {
    return (
        <S.Sidebar color={Theme.colors.blue600} $showSidebar={showSidebar}>
            <Header showSidebar={showSidebar}/>
            <Body showSidebar={showSidebar}/>
            <Footer showSidebar={showSidebar} />
            <ArrowShowSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
           
        </S.Sidebar>
    )
}

export default SidebarWeb