
import * as S from './Display.styled';

const Display = ({children, level, color}) => {
    return (
        <>
            <S.Display  $level={level} color={color} >
                {children}
            </S.Display>
        </>
    )
};

export default Display