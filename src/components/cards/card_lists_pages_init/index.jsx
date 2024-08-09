import React from 'react'
import * as S from './styled'
import { AvatarCircle } from '../../avatar_circle/index'
import { BadgeCustom } from '../../badge/index'
import Buttons from '../../buttons/index'
import { Theme } from '../../../theme'
import { useNavigate } from 'react-router-dom'


const CardListPagesInit = ({data, handleDeleteData}) => {
    const navigate = useNavigate();
    const handleShowForm = (id) => {
        navigate(`/users/form/form_update/${id}`); // Substitua pelo caminho da página que você quer navegar
    };
    return (
        <S.Container>
            {
                data && data.map(({id, name, lastName, status}) => (
                    <S.Card key={id}>
                        <S.Header>
                            <AvatarCircle>
                                <span> {name.charAt(0)} </span>
                            </AvatarCircle>
                            <S.Name>
                                <span> {name + ' ' + lastName} </span>
                            </S.Name>
                        </S.Header>
                        <S.Body>
                            <BadgeCustom type={status === 'Ativo' ? 'primary' : 'danger'}>
                                <span>{status}</span>
                            </BadgeCustom>
                        </S.Body>
                        <S.Footer>
                            <S.WrapButton>
                                <Buttons.ButtonCircle 
                                $variant={'contained'} 
                                color={Theme.colors.blue700} 
                                icon={<Theme.Icons.MdEdit/>} 
                                onclick={() => handleShowForm(id)}
                            />
                            </S.WrapButton>
                            <S.WrapButton>
                                <Buttons.ButtonCircle 
                                    $variant={'outline'} 
                                    color={Theme.colors.red800}  
                                    icon={<Theme.Icons.MdDelete/>} 
                                    onclick={() => handleDeleteData(id, name, lastName)}
                                />
                            </S.WrapButton>
                        </S.Footer>
                    </S.Card>

                ))
            }

        </S.Container>
    )
}

export default CardListPagesInit