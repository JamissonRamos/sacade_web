import { Theme } from '../../../theme'
import * as S from './Headline.styled'

const Headline = ({level = 'l', color = Theme.colors.grey800, children}) => {

    return (
        <>
            <S.HeadlineStyled  $level={level} color={color} >
                {children}
            </S.HeadlineStyled>
        </>
    )
}

export default Headline