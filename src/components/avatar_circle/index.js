import styled from "styled-components";
import { Theme } from "../../theme";

export const AvatarCircle = styled.div`
    /* border: 1px solid red; */
    width: 60px;
    height: 60px;
    background: ${Theme.colors.white800};
    box-shadow: ${Theme.shadow.sh900};
    border-radius: 100px;
    & span {
        /* border: 1px solid red; */
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 25px;
        text-transform: uppercase;
        color: ${Theme.colors.blue800};
    }
`;