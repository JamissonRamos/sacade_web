//Styleds
import * as S from './styled';

//Components
import { BadgeCustom } from '../../../components/badge/index';
import Buttons from '../../../components/buttons';

//Hooks
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';


const TableRecords = ({data, handleDeleteData}) => {
    console.log(data);
    
    const navigate = useNavigate();
    const handleShowForm = (id) => {
        navigate(`/users/form/form_update/${id}`); // Substitua pelo caminho da página que você quer navegar
    };
    
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
                        data.map(({uid, name, lastName, status}) => (
                            
                            <S.TableRow key={uid}>
                                <S.TableCell $flex={2}>
                                    <S.CircleLetterName>
                                        {name.charAt(0)}
                                    </S.CircleLetterName>
                                    <span className='fullName' >{name + ' ' + lastName }</span>
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
                                            onclick={() => handleDeleteData(uid, name, lastName)}
                                        />
                                    </S.WrapButton>
                                    <S.WrapButton>
                                        <Buttons.ButtonCustom
                                            $variant={'contained'}
                                            value={'Editar'}
                                            color={Theme.colors.blue800} 
                                            icon={<Theme.Icons.MdEdit/> }
                                            onclick={() => handleShowForm(uid)}
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

export default TableRecords;
