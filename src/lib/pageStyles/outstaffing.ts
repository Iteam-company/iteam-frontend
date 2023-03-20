import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { COLORS } from "../theme/color";

interface BgImageI {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    height?: number;
}

export const Card = styled(FlexColumn)`
    z-index: 1;
    max-width: 935px;
    padding: 40px 50px 75px;
    background: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
    box-sizing: border-box;
`;

export const BGImage = styled.img<BgImageI>`
    position: absolute;
    z-index: 0 !important;
    height: ${({ height }) => height}px;
    top: ${({ top }) => top}px;
    bottom: ${({ bottom }) => bottom}px;
    right: ${({ right }) => right}px;
    left: ${({ left }) => left}px;
`;
