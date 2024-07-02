import React from 'react'
import * as S from './styled';
import { Theme } from '../../../../theme';

const ArrowShowSidebar = ({showSidebar, toggleSidebar}) => {
    return (
        <S.WrapArrow color={Theme.colors.blue600}  $boxShadow={Theme.shadow.sh500} $showSidebar={showSidebar}>
            {
                showSidebar ? 
                    <Theme.Icons.MdOutlineArrowForwardIos onClick={toggleSidebar}  /> 
                :
                    <Theme.Icons.MdOutlineArrowBackIos  onClick={toggleSidebar} /> 
            }
        </S.WrapArrow>
    )
}

export default ArrowShowSidebar

{/* onClick={toggleSidebar} */}