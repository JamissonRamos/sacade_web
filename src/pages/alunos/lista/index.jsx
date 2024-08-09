import React from 'react'
import * as S from './styled';
import { BadgeCustom } from '../../../components/badge/index';
import Buttons from '../../../components/buttons';
import { Theme } from '../../../theme';


const ListAlunos = ({data}) => {
    return (
        <S.Content>
            <S.TableHeader>
                <S.TableRow>
                    <S.TableHeaderCell $flex={2}>
                        <span>Nome</span>
                    </S.TableHeaderCell>
                    <S.TableHeaderCell>
                        <span>SituaÇão</span>
                    </S.TableHeaderCell>
                    <S.TableHeaderCell $flex={2}>
                        <span></span>
                    </S.TableHeaderCell>
                </S.TableRow>
            </S.TableHeader>

            <S.TableBody>
                {
                    data && 
                        data.map(({id, name, lastName, status}) => (
                            <S.TableRow key={id}>
                                <S.TableCell $flex={2}>
                                    <S.CircleLetterName>
                                        {name.charAt(0)}
                                    </S.CircleLetterName>
                                    <span>{name + ' ' + lastName}</span>
                                </S.TableCell>
                                <S.TableCell>
                                    <BadgeCustom type={status === 'Ativo' ? 'primary' : 'danger'}>
                                        <span>{status}</span>
                                    </BadgeCustom>
                                </S.TableCell>
                                <S.TableCell $flex={2}>
                                    <S.WrapButton>
                                        <Buttons.ButtonCustom
                                            $variant={'outline'}
                                            value={'Excluir'}
                                            color={Theme.colors.red800} 
                                            icon={<Theme.Icons.MdDelete/> }
                                        />
                                    </S.WrapButton>
                                    <S.WrapButton>
                                        <Buttons.ButtonCustom
                                            $variant={'contained'}
                                            value={'Editar'}
                                            color={Theme.colors.blue800} 
                                            icon={<Theme.Icons.MdEdit/> }
                                        />
                                    </S.WrapButton>
                                </S.TableCell>
                            </S.TableRow>
                        )) 
                } 
            </S.TableBody>
        </S.Content>
    );
};

export default ListAlunos