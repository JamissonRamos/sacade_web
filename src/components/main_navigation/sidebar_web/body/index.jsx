import React from 'react'
import * as S from './styled';
import { SidebarData } from '../../../../datas/sidebarData/index';
import NavItemSidebar from '../nav_item_sidebar';

const Body = ({showSidebar}) => {
    return (
        <S.Body>
            {
                SidebarData
                .filter(item => item.title !== 'Sair')
                .map((item, index) => (
                    <NavItemSidebar 
                        item={item} 
                        key={index} 
                        showSidebar={showSidebar}
                    />
                ))
            }

        </S.Body>
    )
}

export default Body
