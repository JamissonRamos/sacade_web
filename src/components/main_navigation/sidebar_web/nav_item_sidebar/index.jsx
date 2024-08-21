import React, { useState } from 'react'
import * as S from './styled';

const NavItemSidebar = ({item, showSidebar, handleShowModal}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {setSubnav(!subnav); }; //handleShowModal()
  const handleClick = () => { showSubnav();  };

  const handleOnclick = () =>{

    if(item.subNav){
      
      setSubnav(!subnav);
    }
    // Chama o handleShowModal se for o botão "Sair"
    if (item.title === 'Sair') {
      handleShowModal();
    }
  }

  return (
    <S.WrapNav $subnav={subnav}>
        <S.ItemMenu to={item.path} onClick={handleOnclick}> {/* item.subNav && showSubnav  */}
          <S.WrapItensMenu>
            <S.IconMenu> {item.icon} </S.IconMenu>
            <S.LabelMenu $showSidebar={showSidebar}> {item.title } </S.LabelMenu>
          </S.WrapItensMenu>
          <S.ArrowShowSubNav>
            {
              item.subNav && subnav 
              ? item.iconOpened 
              : item.subNav
              ? item.iconClosed
              : null
            }
          </S.ArrowShowSubNav>
        </S.ItemMenu>
        
        <S.SubMenu>
          {subnav &&
            item.subNav.map((item, index) => {
                return (
                    <S.DropdownLink to={item.path} key={index} onClick={handleClick}>
                        <S.IconMenu> {item.icon} </S.IconMenu>
                        <S.LabelMenu $showSidebar={showSidebar}>{ item.title}</S.LabelMenu>
                    </S.DropdownLink>
                );
          })}
        </S.SubMenu>
    </S.WrapNav>
  )
}

export default NavItemSidebar