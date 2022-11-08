import { Outlet } from 'react-router-dom';
import AuthAdminContextProvider from '../../contexts/AuthAdminContext';
import ContainerAdmin from '../container/ContainerAdmin';
import HeaderAdmin from '../header/HeaderAdmin';
import Panel from '../panel/Panel';
import Sidebar from '../sidebar/Sidebar';

function AuthAdminLayout() {
  return (
    <>
      <AuthAdminContextProvider>
        <HeaderAdmin />
        <ContainerAdmin>
          <Sidebar />
          <Panel>
            <Outlet />
          </Panel>
        </ContainerAdmin>
      </AuthAdminContextProvider>
    </>
  );
}

export default AuthAdminLayout;
