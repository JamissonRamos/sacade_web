import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding-bottom: .4rem;
    
`;
export const WrapRowInputs = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    justify-content: start;
    padding-right: .4rem;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: none;
        gap: 1px;
    }

`;
export const WrapInput = styled.div`
    /* border: 1px solid blue; */
    max-width: 350px;

    flex: 1;
`;