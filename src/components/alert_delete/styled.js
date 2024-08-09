import styled from "styled-components";
import { Theme } from "../../theme";

export const AlertDelete = styled.div`
    position: fixed;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: .4rem;
    background: ${Theme.colors.white800};
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
    animation-duration: 1s;
    animation-name: formModal;
    @keyframes formModal {
        from {
            top: 0%;
        }
        to {
            top: 40%;
        }
    }
    @media (max-width: 425px) {
        width: 90%;
    }
    @media (max-width: 375px) {
        width: 100%;
    }
`;
export const Header = styled.div`
    width: 100%;
    height: 30px;
    padding: .2rem .4rem;
    background: red;
    color: #fff;
`;
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .2rem .4rem;
    background: #fff;
`;
export const WrapIcon = styled.div`
    width: 100%;
    padding: .2rem .4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        font-size: 4em;
        color: red;
    }
`;
export const WrapTitles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .2rem .4rem;
    margin-bottom: 1rem;
`;
export const WrapButtons = styled.div`
    width: 100%;
    padding: .2rem .4rem;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const WrapButton = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: end;
`;
