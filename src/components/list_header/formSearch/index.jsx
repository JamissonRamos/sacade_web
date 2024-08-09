import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';

import * as S from './styled'

import { Theme } from '../../../theme';
import AllFields from '../../all_fields';
import { useSearch } from '../../../contexts/search/SearchContext';

const FormSearch = () => {

    const { register, watch, handleSubmit} = useForm();
    const { setSearchQuery } = useSearch();
    const onSubmit = data => alert(data);
    const searchValue = watch('search');

    useEffect(() => {
        setSearchQuery(searchValue || '');

        }, [searchValue, setSearchQuery]);

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.WrapperFieldForm >
                <AllFields.Text 
                    level='n'
                    label='Pesquisa' 
                    type='text' 
                    name='search' 
                    placeholder='Pesquise pelo nome do cadastro'
                    Icon={Theme.Icons.MdSearch} 
                    register={register} 
                    //setValue={setValue}
                />
                {/* <HelperText > { errors.user?.message } </HelperText>   */}
            </S.WrapperFieldForm>
        </S.Form>
    )
}

export default FormSearch