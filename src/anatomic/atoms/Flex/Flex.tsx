import styled from "styled-components";

interface DefaultElementProps {
    w?: string;
    mw?: string;
    h?: string;
    m?: string;
    mh?: string;
    p?: string;
    bg?: string;
    bgSize?: string;
    bgPosition?: string;
    boxShadow?: string;
    borderRadius?: string;
    position?: string;
    zIndex?: string;
}

interface FlexProps {
    alignItems?: string;
    justifyContent?: string;
    alignSelf?: string;
    justifySelf?: string;
    flexWrap?: string;
    gap?: string;
    type?: "column";
}

export const Flex = styled.div<FlexProps & DefaultElementProps>`
    display: flex;
    width: ${(props) => props.w || "auto"};
    max-width: ${(props) => props.mw || "auto"};
    min-height: ${(props) => props.mh || "auto"};
    height: ${(props) => props.h || "auto"};
    margin: ${(props) => props.m || "0"};
    padding: ${(props) => props.p || "0"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-self: ${(props) => props.alignSelf || "none"};
    justify-self: ${(props) => props.justifySelf || "none"};
    flex-wrap: ${(props) => props.flexWrap || "none"};
    background: ${({ bg }) => bg || "none"};
    background-size: ${({ bgSize }) => bgSize || "auto"};
    z-index: ${({ zIndex }) => zIndex || "auto"};
    ${({ gap }) => gap && `gap: ${gap}`};
    ${({ position }) => position && `position: ${position}`};
    flex-direction: ${(props) => props.type || "row"};
    box-shadow: ${(props) => props.boxShadow || "none"};
    border-radius: ${(props) => props.borderRadius || "none"};
`;

export const FlexRow = styled(Flex)`
    flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;
