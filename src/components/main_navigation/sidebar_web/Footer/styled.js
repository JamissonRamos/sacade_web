import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Footer = styled.footer`

    flex: .8;
    /* padding: 0.4rem 18px 0 18px; */
    border-top: 1px solid ${Theme.colors.grey800};  
`;
export const Modal = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    position: absolute;
    bottom: 60px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .2rem;
    padding: .4rem 0;
    transform: translateX(-50%);
    box-shadow: ${Theme.shadow.sh900};
    animation-duration: .4s;
    animation-name: formModal;
    @keyframes formModal {
        from {
            bottom: 0%;
            opacity: .1;
        }
        50%{
            bottom: 10%;
            opacity: .2;
        }
        to {
            bottom: 60px;
            opacity: .8;
        }
    }
`;

export const WrapButtonModal = styled.div `
    /* border: 1px solid red; */
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .2rem 0;
    border-radius: 8px;
    transform: 9s;
    font-size: 1em;

    & :hover{
        background-color: ${Theme.colors.blue200};
    }

    & svg{
        margin-right: 8px;
        font-size: 1em;
    }
`;


