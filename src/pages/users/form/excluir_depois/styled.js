import styled from "styled-components";


export const Form = styled.form`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 2;
`;

export const WrapInputsContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    flex: 2;
    padding-bottom: 2rem;
    overflow-y: auto;
    @media (max-width: 425px) {
        padding-bottom: 5rem;
    }
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

    flex: ${({$flex}) => $flex ? $flex : 1};
`;


export const WrapButtonActions = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    flex: .3;
`;
export const WrapButtonCircule = styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 130px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem;
`;