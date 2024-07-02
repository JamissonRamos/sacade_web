import React, { useState } from 'react'
import * as S from './styled'
import { Theme } from '../../../theme'
import ItemSidebarMobile from './itemSidebarMobile/ItemSidebarMobile';
import SidebarMenuMobile from './sidebarMenuMobile/index';
import { SidebarData } from '../../../datas/sidebarData';



const SidebarMobile = () => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const toggleSidebar = () => {
        setSubnav(!subnav);
    }
    const filterSubItem = (mainTitle, subTitle = null) => {
        const mainItem = SidebarData.find(item => item.title === mainTitle);

        if (!mainItem) return null;

        if (!subTitle) return mainItem; // Se subTitle não for fornecido, retorna o item principal

        const mainSubTitle = mainItem.subNav ? mainItem.subNav.find(subItem => subItem.title === subTitle) : null;
        
        return mainSubTitle || null;
    };

    const homeItem = filterSubItem('Home'); 
    const alunosItem = filterSubItem('Cadastros', 'Alunos');
    const pagamentosItem = filterSubItem('Pagamentos'); 
    const usersItem = filterSubItem('Cadastros', 'Usuários');
    const menu = {
        title: 'Menu',
        path: '#',
        icon: <Theme.Icons.MdMenu />
    }
    return (
        <>
            <S.Sidebar color={Theme.colors.blue600}>
                <S.Wrap>
                    <ItemSidebarMobile item={homeItem} />
                    <ItemSidebarMobile item={alunosItem} />
                </S.Wrap>
                <S.WrapItemCircule>
                    <ItemSidebarMobile item={pagamentosItem} circule={true}/>
                </S.WrapItemCircule>
                <S.Wrap>
                    <ItemSidebarMobile item={usersItem} />
                    <S.WrapItem onClick={() => showSubnav() }>
                        <ItemSidebarMobile item={menu} />
                    </S.WrapItem>
                </S.Wrap>
            </S.Sidebar>
            {
                subnav ? <SidebarMenuMobile toggleSidebar={toggleSidebar} /> : null
            }
        </>
    )
}

export default SidebarMobile