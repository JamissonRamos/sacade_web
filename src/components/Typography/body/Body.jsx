

import * as S from "./Body.styled";

const Body = ({children, level, color}) => {
    return (
        <>
            <S.Body $level={level} color={color}>

                {children}
            </S.Body>
        </>
    )
}

export default Body