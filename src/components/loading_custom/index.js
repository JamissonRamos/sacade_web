import styled, { keyframes } from 'styled-components';
import { Theme } from '../../theme';

// Animação do spinner
const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// Estilização do spinner
export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 30%;
    left: 50%;
    border: 4px solid ${Theme.colors.black900};
    border-top: 4px solid ${Theme.colors.green800};
    border-radius: 50%;
    animation: ${spinAnimation} 0.8s linear infinite;
`;