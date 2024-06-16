import styled from "styled-components";
import { Theme } from "../../../theme";

const Label = styled.label`
    /* border: 1px solid red; */
    /* width: 100%; */
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    padding-left: 16px;
    color: ${Theme.colors.grey600};
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    transition: top 0.4s, left 0.4s, 0.3s, color 0.3s;    
    &.is-focused {
        top: 12%;
        left: 14px;
        padding: 0 4px;
        background-color: ${Theme.colors.white800};
        font-size: .8rem;
        color: ${Theme.colors.green800};
    }
`;

export default Label;