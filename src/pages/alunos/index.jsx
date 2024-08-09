//Styleds
import * as S from './styled';

//Components
import { WarapperMainPage } from '../../components/Wrapper/pages'
import AlertCustom from '../../components/alert';
import ListHeader from '../../components/list_header';
import ListAlunos from './lista';
import { Cards } from '../../components/cards/index';
import { Spinner } from '../../components/loading_custom';
import { Typography } from '../../components/Typography';
// import FormSearch from '../../components/list_header/formSearch';

//Hooks
import { AllHooks } from '../../hooks';
import { Theme } from '../../theme';
import { useAlunos } from '../../hooks/alunos';

//Contexts
import { SearchProvider, useSearch  } from '../../contexts/search/SearchContext';

const Alunos = () => {
  const isValueScreen = AllHooks.useScreenWidth(768);
  const { alunos, isLoading, errorSql } = useAlunos.useAllRegistrations()

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SearchProvider initialList={alunos}>
      <WarapperMainPage>
        {
          errorSql && <AlertCustom variant={'danger'}> {errorSql} </AlertCustom>
        }
        <S.Contend>
          <S.SectionHeader>
              <ListHeader title={'Alunos'} subTitle={'alunos'}/>
          </S.SectionHeader>
          <S.SectionBody>
            <FilteredAlunos isValueScreen={isValueScreen} />
          </S.SectionBody>
        </S.Contend>
      </WarapperMainPage>
    </SearchProvider>
  )
}

const FilteredAlunos = ({ isValueScreen }) => {
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

  return !isValueScreen ? (
    <ListAlunos data={filteredList} />
  ) : (
    <Cards.CardListPagesInit data={filteredList} />
  );
};

export default Alunos