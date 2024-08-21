import styled from 'styled-components'
import { Theme } from '../../../theme';


export const Sidebar = styled.div`
    /* border:1px solid blue; */
    width: 240px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${({color})=>color};
    z-index: 1000;
    transition: width 0.4s; 
    @media (max-width: 768px) {
        width: ${({$showSidebar}) => $showSidebar ? '72px' : '240px'} ;
    }
`;
// export const ModalLogout = styled.div`
//     border:1px solid blue;
//     width: 240px;
//     /* height: 100%; */
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     display: flex;
//     flex-direction: column;
//     background-color: ${({color})=>color};
//     transition: width 0.4s; 
//     @media (max-width: 768px) {
//         width: ${({$showSidebar}) => $showSidebar ? '72px' : '240px'} ;
//     }
// `;


