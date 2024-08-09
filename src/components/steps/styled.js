import styled from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    /* margin: 0 auto;
    margin-bottom: 2rem; */
    &::after {
        content: "";
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translateY(-50%);
        border-bottom: 1px solid ${Theme.colors.grey500};
    }
`;
export const WrapStep = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .2rem 0.5rem;
    background-color: ${Theme.colors.white800};
    text-align: center;
    z-index: 1;
    transition: 350ms;
    & svg {
        margin-bottom: 0.1rem;
        font-size: 1.4rem;
        color: ${Theme.colors.grey600}
    }
    & p {
        font-size: .6em;
        letter-spacing: 0.1em;
        font-weight: 300;
        color: ${Theme.colors.grey500}
    }
    &.active {
        p {
            font-weight: bold;
            color: ${Theme.colors.green800};
        }
    }
    &.active > svg {
        fill: ${Theme.colors.green800};
    }

`;