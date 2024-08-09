import React, { useState } from 'react'
import * as S from './styled'
import { Theme } from '../../theme'
import { Typography } from '../Typography'
import Buttons from '../buttons'
import { useUsers } from '../../hooks/users'
import AlertCustom from '../alert'
import { Spinner } from '../loading_custom'

const DeleteData =   ({id, nameLastName, handleDeleteData }) => {
    const [alert, setAlert] = useState(null);
    const [msgBox, setMsgBox] = useState('');
    const {deleteUser, isLoading, errorSql} = useUsers.useDelete()
    console.log(nameLastName)
    const handleDelete = async (id) => {

        let result = await deleteUser(id)
        console.log(result);

        if (result) {
            setMsgBox('Cadastro excluído com sucesso')
            setAlert(true)
            setTimeout(() => {
                handleDeleteData()
                location.reload(); // Recarrega a página atual
            }, 2000);
        }else {
            setTimeout(() => {
                handleDeleteData()
                location.reload(); // Recarrega a página atual
            }, 2000);
        }

    }
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <>
            {
                errorSql && <AlertCustom variant={'danger'}> {errorSql} </AlertCustom>
            }
            {
                alert && <AlertCustom variant={'primary'}> {msgBox} </AlertCustom>
            }
            <S.AlertDelete>
            
                <S.Header>
                    <Typography.Body level='s' color={Theme.colors.white800}> Excluir Cadastro</Typography.Body>
                </S.Header>
                <S.Body>
                    <S.WrapIcon>
                        <Theme.Icons.MdDelete/>
                    </S.WrapIcon>
                    <S.WrapTitles>
                        <Typography.Body level='l' color={Theme.colors.red800}>Você Tem Certeza ?</Typography.Body>
                        <Typography.Body level='s' color={Theme.colors.red800}>
                            Realmente deseja excluir este cadastro? Esta ação não pode ser desfeita.
                        </Typography.Body>
                        <Typography.Body level='l' color={Theme.colors.red700}>{nameLastName}</Typography.Body>
                    </S.WrapTitles>

                    <S.WrapButtons>
                        <S.WrapButton>
                            <Buttons.ButtonCustom 
                            $variant={'outline'}
                            value={'Cancelar'}
                            color={Theme.colors.grey600}
                            onclick={handleDeleteData}
                        />
                        </S.WrapButton>
                        <S.WrapButton>
                            <Buttons.ButtonCustom  
                                value={'Sim, Excluir Cadastro'} 
                                color={Theme.colors.red800}
                                onclick={() => handleDelete(id)}
                            />
                        </S.WrapButton>
                    </S.WrapButtons>


                </S.Body>
            </S.AlertDelete>
        </>
    )
}

export default DeleteData