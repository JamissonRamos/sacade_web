import * as S from './styled';

const ItemSidebarMobile = ({item, circule= false}) => {
    console.log(item.path)
    return (
        <S.Wrap to={item.path} $circule={circule}>
            <S.MenuIcon $circule={circule}> {item.icon} </S.MenuIcon>
        {
            !circule && <S.Label>{item.title }</S.Label>
        }
        </S.Wrap>



    )
}

export default ItemSidebarMobile