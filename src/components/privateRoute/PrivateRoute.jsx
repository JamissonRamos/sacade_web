import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthContex";
import { Permissions } from "./Schema";

const PrivateRoute = ({ children, page }) => {
    const { currentUser } = useAuth();

    // Recupere o usuário logado do localStorage
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));
    console.log(userLogged) 
    console.log(currentUser) 
    if (!userLogged){
        console.log('nulo')
        return <Navigate to={`/users/form/form_update/${currentUser.uid}`} />
    }

    // Verifique se o usuário tem permissão para acessar a página
    const hasAccess = userLogged && Permissions[page]?.includes(parseInt(userLogged.occupation, 10));
    console.log(hasAccess) 
    if (!hasAccess) {
         // Redireciona para uma página de "Acesso Negado"  
        return <Navigate to={`/NoticeAuthorization/${userLogged.name}`}/>;
    }

    return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute

/* 
    1 quando clico menu home ele carrega o meu log, quando clico no cadastro ele carrega meu log, mais quando não clico no home ele não carrega meulo
        antes de clica na home não carrega o log, mais quando clico na home qual quer outro menu que clico carrega meu log executando minha fução
        acho que é erro de vazamento de função;
    2 o adm pode acessa ql usuarios e atualizar, professor e assistente somente os seus respectivos cadastros;
    3 verifficar pq o 3 não abri a home, quando faço o login
*/