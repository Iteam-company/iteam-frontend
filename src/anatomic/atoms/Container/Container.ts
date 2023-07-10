import styled from "styled-components";

interface ContainerProps {
    bg?: string;
    w?: string;
    c?: string;
    h?: string;
    mw?: string;
}
export const AdaptContainer = styled.div<ContainerProps>`
    width: ${(props) => props.w || "100%"};
    background-color: ${(props) => props.bg || "inherit"};
    @media (min-width: 1600px) {
        max-width: ${(props) => props.mw || "1200px"};
        padding: 0 10px;
        width: 100%;
        margin: 0 auto;
        overflow: ${(props) => props.h || "hidden"};
        text-align: ${(props) => props.c || "left"};
    }
`;
