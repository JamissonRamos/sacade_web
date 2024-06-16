import styled from "styled-components";
import { Theme } from "../../../theme";

const HelperText = styled.p`
    /* border:1px solid red; */
    /* width: 100%; */
    padding: 0 16px;
    color: ${Theme.colors.red800};
    font-size: .8em;
    font-weight: 400;
`;

export default HelperText;