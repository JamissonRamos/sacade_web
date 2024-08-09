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
            <S.TableHeader>
                <S.TableHeaderCell flex={1}>
                    id
                </S.TableHeaderCell>
                <S.TableHeaderCell flex={2}>
                    id2
                </S.TableHeaderCell>
                <S.TableHeaderCell>
                    id3
                </S.TableHeaderCell>
            </S.TableHeader>
        </S.Content>
    );
};

export default ListBody