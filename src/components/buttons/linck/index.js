import styled from "styled-components";


const LinkCustom = styled.a `
    /* border: 1px solid red; */
    max-width: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.2rem;
    background-color: transparent;
    font-size: .6em;
    font-weight: 500;
    color: ${props => props.color};
    text-decoration: none;
    transition: background-color 0.3s ease;
    outline: none;
    cursor: pointer;
    &:hover {
        color: ${props => {
            const color = props.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
        }};

        
    }

    svg {
        margin-right: 8px;
        font-size: .6em;
    }
`

export default LinkCustom;