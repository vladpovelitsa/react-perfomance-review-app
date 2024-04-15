import AuthProvider from './AuthProvider.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AppHeader = () => {
  let selectedLanguage = useSelector(
    (state) => state.tableFilterReducer.selectedLanguage,
  );

  return (
    <>
      <h1
        className={
          'text-center font-playfair-display text-3xl font-bold text-amber-950'
        }
      >
        AppHeader
      </h1>
      <AuthProvider />
      current selected lang = {selectedLanguage}
    </>
  );
};

export default AppHeader;
