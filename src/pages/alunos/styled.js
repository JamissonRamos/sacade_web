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
    /* border: 1px solid yellow; */
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