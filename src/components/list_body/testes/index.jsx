import React from 'react'
import * as S from './styled';
import Buttons from '../buttons';
import { Theme } from '../../theme';
import { BadgeCustom } from '../badge';


const ListBody = () => {

const data = [
{ name: 'John Doe', situacao: 'ativo' },
{ name: 'Jane Smith', situacao: 'desativado' },
{ name: 'Bob Johnson', situacao: 'desativado' },
{ name: 'Sarah Lee', situacao: 'ativo'},
{ name: 'Sarah Lee', situacao: 'ativo'},
{ name: '222Sarah Lee', situacao: 'ativo'},
];

    return (
        <S.Content>
            <S.Table>
                <S.TableHeader>
                    <S.TableRow>
                        <S.TableHeaderCell colSpan={2}>Nome</S.TableHeaderCell>
                        <S.TableHeaderCell>Situação</S.TableHeaderCell>
                        <S.TableHeaderCell colSpan={2}></S.TableHeaderCell>
                    </S.TableRow>
                </S.TableHeader>
                <S.TableBody>
                    {data.map((row, index) => (
                        <S.TableRow key={index}>
                            {/* <S.WrapTableCell> */}
                                <S.TableCell >
                                    <S.CircleLetterName>
                                        {row.name.charAt(0)}
                                    </S.CircleLetterName>
                                </S.TableCell>
                                <S.TableCell>{row.name}</S.TableCell>
                                <S.TableCell>
                                    <BadgeCustom type={row.situacao === 'ativo' ? 'primary' : 'danger'}>
                                        {row.situacao}
                                    </BadgeCustom>
                                </S.TableCell>
                            {/* </S.WrapTableCell> */}
                            <S.WrapButtons>
                                <S.TableCell>
                                    <S.WrapButton>
                                        <Buttons.ButtonCustom
                                            $variant={'outline'}
                                            value={'Excluir'}
                                            color={Theme.colors.red800} 
                                            icon={<Theme.Icons.MdDelete/> }/>
                                    </S.WrapButton>
                                    
                                </S.TableCell>
                                <S.TableCell> 
                                    <S.WrapButton>
                                        <Buttons.ButtonCustom
                                            $variant={'contained'}
                                            value={'Editar'}
                                            color={Theme.colors.blue800} 
                                            icon={<Theme.Icons.MdEdit/> }
                                        />
                                    </S.WrapButton>

                                </S.TableCell>
                            </S.WrapButtons>
                        </S.TableRow>
                    ))}
                </S.TableBody>
            </S.Table>
        </S.Content>
    );
};

export default ListBody