import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";

export const Dot = styled.div`
    height: 8px;
    width: 8px;
    border: 2px solid ${COLORS.dark};
    border-radius: 50%;
    position: relative;

    &.dot--outer-circle::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        content: "";
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: ${COLORS.dark};
    }
`;

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 999;
`;

export const StyledFrameContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 290px;
    min-width: 290px;
    overflow: hidden;
`;

export const StyledImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;
    transform: none;
    overflow: hidden;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const StyledIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
    overflow: hidden;
`;

export const StyledNavDots = styled.div`
    position: absolute;
    left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 22px;
`;
