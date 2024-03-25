import AuthProvider from './AuthProvider.jsx';

const AppHeader = () => (
  <>
    <h1
      className={
        'font-playfair-display text-center text-3xl font-bold text-amber-950'
      }
    >
      AppHeader
    </h1>
    <AuthProvider />
  </>
);

export default AppHeader;
