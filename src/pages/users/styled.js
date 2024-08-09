import styled from "styled-components";

export const Contend = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 425px) {
        justify-content: start;
        gap: .8rem;
    }

`;
export const SectionHeader = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    flex: 1;
    @media (max-width: 425px) {
        flex: none;
    }
`;
export const SectionBody = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    flex: 2;
    @media (max-width: 425px) {
        height: 300px;
        padding: 0;
        flex: none;
    }
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    @media (max-width: 425px) {
        height: 300px;
        padding: 0;
        flex: none;
    }
`;
export const WrapModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.8;
    animation-duration: 1s ;
    animation-name: showModal;
    @keyframes showModal {
        from {
            opacity: 0.4;
        }

        to {
            opacity: 0.6;
        }
    }
`;