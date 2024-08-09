import { Theme } from '../../theme'
import * as S from './styled'

const Steps = ({currentStep}) => {
    return (
        <S.Container >
            <S.WrapStep className='active'>
                <Theme.Icons.MdAccountCircle />
                <p>Informações</p>
            </S.WrapStep>
            <S.WrapStep className={` ${currentStep >= 1 ? "active" : ""}`}>
                <Theme.Icons.MdContactPhone />
                <p>Contatos</p>
            </S.WrapStep>
            <S.WrapStep className={` ${currentStep >= 2 ? "active" : ""}`}>
                <Theme.Icons.FaMapLocationDot />
                <p>Endereço</p>
            </S.WrapStep>
        </S.Container>
    )
}

export default Steps