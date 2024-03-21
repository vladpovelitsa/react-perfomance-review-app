import AppHeader from './components/common/AppHeader.jsx';
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <AppHeader />
    <Outlet />
  </>
);

export default App;
