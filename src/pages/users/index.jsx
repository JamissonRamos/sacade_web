//Styelds
import * as S from './styled';

//Hooks
import { AllHooks } from '../../hooks';
import { useUsers } from '../../hooks/users';
import { Theme } from '../../theme';

//Contexts
import { SearchProvider, useSearch } from '../../contexts/search/SearchContext';

//Components
import { Spinner } from '../../components/loading_custom';
import { WarapperMainPage } from '../../components/Wrapper/pages'
import AlertCustom from '../../components/alert';
import ListHeader from '../../components/list_header';
import { Typography } from '../../components/Typography';
import TableRecords from './lista';
import { Cards } from '../../components/cards/index';
import { useState } from 'react';
import DeleteData from '../../components/alert_delete';



const Users = () => {
  const isValueScreen = AllHooks.useScreenWidth(768);
  const { registered, isLoading, errorSql } = useUsers.useAllRegistrations();
  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SearchProvider initialList={registered}>
      <WarapperMainPage>
        {
          errorSql && <AlertCustom variant={'danger'}> {errorSql} </AlertCustom>
        }
        <S.Contend>
          <S.SectionHeader>
              <ListHeader title={'Usuários'} subTitle={'usuários'}/>
          </S.SectionHeader>
          <S.SectionBody>
            <FilteredUsers isValueScreen={isValueScreen} />
          </S.SectionBody>
        </S.Contend>
      </WarapperMainPage>
    </SearchProvider>
  )
}

const FilteredUsers = ({ isValueScreen }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [nameLastName, setNameLastName] = useState('')
  const [deleteID, setDeleteID] = useState('')

  const handleDeleteData = (id, name, lastName) => {
    setIsVisibleModal((prevState) => !prevState);
    setNameLastName(name + ' ' + lastName)
    setDeleteID(id)
  };

  const { filteredList } = useSearch();

  if (filteredList.length === 0) {
    return (
      <S.Empty>
        <Typography.Headline level={'m'} color={Theme.colors.green800}>
          Nenhum cadastro
          <Typography.Body level={'s'}>
            Não encontramos nenhum cadastro em nossa base de dados.
          </Typography.Body>
        </Typography.Headline>
      </S.Empty>
    );
  }

  return (
    <>
      {
        !isValueScreen ? (
          <TableRecords data={filteredList} handleDeleteData={handleDeleteData} />
        ) : (
          <Cards.CardListPagesInit data={filteredList} handleDeleteData={handleDeleteData} />
        )
      }

      { isVisibleModal && <S.WrapModal /> }
      { isVisibleModal && <DeleteData id={deleteID} nameLastName={nameLastName} handleDeleteData={handleDeleteData} />}
  </>
  )
};


export default Users