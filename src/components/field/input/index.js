import styled from "styled-components";
import { Theme } from "../../../theme";


const Input = styled.input`
    width: 100%;
    max-width: 380px;
    height: 46px;
    padding-left: ${({$iconLeft}) => $iconLeft ? '32px' : '16px'};
    background-color: transparent;
    font-size: 1rem; 
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${Theme.colors.grey800};
    border: 1px solid ${Theme.colors.grey800};
    border-radius: 8px;
    outline: none;
    transition:  outline 0.9s border-color 0.3s;
    &.is-focused {
        border-color: ${Theme.colors.green800};
    }
    &:focus {
        border-color: ${Theme.colors.green800};
        outline: 1px solid ${Theme.colors.green800}; 
    }
    &::placeholder {
        color: ${Theme.colors.grey800};
    }
`;

export default Input;