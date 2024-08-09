import { createContext, useContext, useState, useEffect } from 'react';
import { filterList } from './filterHelpers';  // Importar funções auxiliares de outro arquivo

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children, initialList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(initialList);

  useEffect(() => {
    setFilteredList(filterList(initialList, searchQuery));
  }, [searchQuery, initialList]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredList }}>
      {children}
    </SearchContext.Provider>
  );
};

    