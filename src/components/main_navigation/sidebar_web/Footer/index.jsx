//Hooks
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"; // Para redirecionar o usuário após o logout
//Styled
import * as S from './styled';
//Components
import { SidebarData } from '../../../../datas/sidebarData';
import NavItemSidebar from '../nav_item_sidebar';
import Buttons from '../../../buttons';
import { Theme } from '../../../../theme';
 //Context
import { useAuth } from "../../../../contexts/authContext/AuthContex"; // Importa o contexto de autenticação

const Footer = ({showSidebar}) => {
    const [ showModal, setShowModal] = useState(false);
    const { logout } = useAuth(); // Acessa a função logout
    const navigate = useNavigate();

    const handleShowModal = () => {
        setShowModal((prev) => !prev)
    }

    const handleLogout = async () => {
        try {
            // Executa o logout
            await logout();
            setShowModal(false);
            // Limpa o localStorage
            localStorage.clear();
            // Redireciona o usuário para a página de login
            navigate("/login");
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    }

    return (
        <S.Footer>
            {
                SidebarData.map((item, index) => (item.title === 'Sair' ?
                    <NavItemSidebar 
                        item={item} 
                        key={index} 
                        showSidebar={showSidebar}
                        handleShowModal={handleShowModal}
                    />
                : null
                ))
            }

            {
                showModal && 
                <S.Modal>
                    <S.WrapButtonModal>
                        <Buttons.LinkCustom
                            href="#" 
                            color={Theme.colors.green800}
                            onClick={handleLogout}
                        >
                            <Theme.Icons.ImSwitch />
                            Certeza que deseja sair?
                        </Buttons.LinkCustom>

                        <Buttons.LinkCustom
                            href="#"  
                            color={Theme.colors.red600}
                            onClick={handleShowModal}
                        >
                            <Theme.Icons.MdCancel />
                            cancelar
                        </Buttons.LinkCustom>
                    </S.WrapButtonModal>
                </S.Modal>
            }
        </S.Footer>
    )
}

export default Footer

