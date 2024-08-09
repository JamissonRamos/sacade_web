import React from 'react'
import * as S from './styled';
import { SidebarData } from '../../../../datas/sidebarData';
import NavItemSidebar from '../nav_item_sidebar';

const Footer = () => {
    return (
        <S.Footer>
            {
                SidebarData.map((item, index) => (item.title === 'Sair' 
                    ?
                        <NavItemSidebar 
                            item={item} 
                            key={index} 
                        />
                    : null
                ))
            }
        </S.Footer>
    )
}

export default Footer

