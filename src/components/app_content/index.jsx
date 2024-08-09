
import { Route, Routes, useLocation } from 'react-router-dom';

// Componentes
import MainHeaderPanel from '../main_header_panel/index'
import MainNavigation from '../main_navigation/index';
// Pages
import { Pages } from '../../pages/index';

const AppContent = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            {!isLoginPage && <MainHeaderPanel />}
            {!isLoginPage && <MainNavigation />}
            {
                isLoginPage ?
            <Routes>
                <Route path="/login" element={<Pages.Login />} />
            </Routes> 
            :
            <main >
                <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/alunos" element={<Pages.Alunos />} />
                <Route path="/pagamentos" element={<Pages.Pagamentos />} />
                <Route path="/users" element={<Pages.Users />} />
                <Route path="/users/form/form_create" element={<Pages.FormCreate/>} />
                <Route path="/users/form/form_update/:id?" element={<Pages.FormUpdate />} />
                <Route path="/changePassword" element={<Pages.ChangePassword />} />
                </Routes>
            </main>
            }
        </>
    );
};

export default AppContent;
