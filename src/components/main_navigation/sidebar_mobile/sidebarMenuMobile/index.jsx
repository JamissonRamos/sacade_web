
import { SidebarData } from '../../../../datas/sidebarData/index'
import NavItemSidebar from '../nav_item_sidebar/index'
import * as S from './styled'

const SidebarMenuMobile = ({toggleSidebar}) => {
  return (
    <S.Wrap>
        <S.NameMenu>
          <span>MENU</span>
        </S.NameMenu>

        <S.NavItem>
          {
            SidebarData.map((item, i) => <NavItemSidebar key={i} item={item}  toggleSidebar={toggleSidebar}/>)
          }
        </S.NavItem>

    </S.Wrap>
  )
}

export default SidebarMenuMobile