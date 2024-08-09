import { Theme } from "../../theme";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <Theme.Icons.MdHome  />
    },
    {
        title: 'Cadastros',
        path: '#',
        icon:  <Theme.Icons.MdAddCircle  />,
        iconClosed:  <Theme.Icons.RiArrowDownSFill  />,
        iconOpened: <Theme.Icons.RiArrowUpSFill  />,
        subNav: [
            {
                title: 'Alunos',
                path: '/alunos',
                icon: <Theme.Icons.MdPerson  />,
            },
            {
                title: 'Usuários',
                path: '/users',
                icon: <Theme.Icons.MdSupervisedUserCircle  />,
            }
        ]
    },
    {
        title: 'Pagamentos',
        path: '/pagamentos',
        icon: <Theme.Icons.MdAttachMoney  />
    },
    {
        title: 'Configurações',
        path: '#',
        icon:  <Theme.Icons.MdSettings  />,
        iconClosed:  <Theme.Icons.RiArrowDownSFill  />,
        iconOpened: <Theme.Icons.RiArrowUpSFill  />,
        subNav: [
            {
                title: 'Alterar Senha',
                path: '/changePassword',
                icon: <Theme.Icons.MdLockReset  />,
            }
        ]
    },
    {
        title: 'Sair',
        path: '/login',
        icon: <Theme.Icons.MdLogout  /> 
    },
    
];