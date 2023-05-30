import styled from "styled-components";

interface ContainerProps {
    bg?: string;
    w?: string;
    c?: string;
    h?: string;
}
export const AdaptContainer = styled.div<ContainerProps>`
width: ${(props) => props.w || '100%'};
background-color: ${(props) => props.bg || 'inherit'};
    @media (min-width: 1800px) {
        max-width: 1450px;
        width: 100%;
        margin: 0 auto;
        overflow: ${(props) => props.h || 'hidden'};;
        text-align: ${(props) => props.c || 'left'};
    }

`
