import styled from 'styled-components';

export const Form = styled.form`
    /* border: 1px solid blue; */
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: .8rem; 
`;

export const WrapperFieldForm = styled.div `
    /* border: 1px solid blue; */
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;   
    @media (max-width: 768px) {
        align-items: center;
    }

`;