import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import styled from "styled-components";

export const Container = styled(FlexRow)`
    gap: 5%;
    background: linear-gradient(
        to bottom,
        transparent 0% 50%,
        ${COLORS.textPrimary} 50% 100%
    );
    @media all and (max-width: 1050px) {
        gap: 10%;
    }
    @media all and (max-width: 750px) {
        padding: 25px;
        flex-direction: column;
        background: linear-gradient(
            to left,
            transparent 0% 50%,
            ${COLORS.textPrimary} 50% 100%
        );
    }
`;

export const Circle = styled(FlexColumn)`
    height: 200px;
    width: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 60px 0px 100px 0px rgba(232, 232, 232, 0.251) inset;
    background-color: ${COLORS.textPrimary};
    z-index: 4;
    @media all and (max-width: 1050px) {
        height: 140px;
        width: 140px;
    }
    @media all and (max-width: 600px) {
        height: 100px;
        width: 100px;
    }
`;

export const CircleBorder = styled(FlexColumn)<{
    topColor: string;
    bottomColor: string;
}>`
    width: 360px;
    height: 360px;
    justify-content: center;
    align-items: center;
    background: ${({ topColor, bottomColor }) =>
        topColor &&
        bottomColor &&
        `linear-gradient(to bottom, ${topColor} 0 50%, ${bottomColor} 50% 100%)`};
    border-radius: 50%;
    margin: 0 -80px;
    position: relative;

    @media all and (max-width: 1050px) {
        height: 260px;
        width: 260px;
    }
    @media all and (max-width: 750px) {
        background: ${({ topColor, bottomColor }) =>
            topColor &&
            bottomColor &&
            `linear-gradient(to left, ${topColor} 0 50%, ${bottomColor} 50% 100%)`};
    }
    @media all and (max-width: 600px) {
        height: 200px;
        width: 200px;
        margin: -25px 0;
    } ;
`;

export const StepNumber = styled(FlexColumn)<{ step: string }>`
    top: ${({ step }) => !(+step % 2) && "0px"};
    bottom: ${({ step }) => +step % 2 && 0};
    @media all and (max-width: 750px) {
        right: ${({ step }) => (!(+step % 2) ? 0 : "auto")};
        left: ${({ step }) => (+step % 2 ? 0 : "auto")};
        top: auto;
        bottom: auto;
        z-index: 100;
    }
`;
export const StepText = styled(FlexColumn)<{ step: string }>`
    bottom: ${({ step }) => (!(+step % 2) ? "-50px" : "auto")};
    top: ${({ step }) => (+step % 2 ? "-50px" : "auto")};
    max-width: 200px;
    @media all and (max-width: 750px) {
        left: ${({ step }) => (!(+step % 2) ? "-160px" : "auto")};
        right: ${({ step }) => (+step % 2 ? "-160px" : "auto")};
        top: auto;
        bottom: auto;
        z-index: 100;
    }
    @media all and (max-width: 600px) {
        left: ${({ step }) => (!(+step % 2) ? "-60px" : "auto")};
        right: ${({ step }) => (+step % 2 ? "-60px" : "auto")};
        max-width: 100px;
    }
`;

export const Line = styled(FlexColumn)<{ step: string }>`
    position: absolute;
    height: 50px;
    width: 4px;
    z-index: 5;
    background-color: ${COLORS.brightPurple};
    top: ${({ step }) => (+step % 2) ? "50px": ""};
    bottom: ${({ step }) => !(+step % 2) ? "50px" : ""};
    @media all and (max-width: 1050px) and (min-width: 751px) {
        height: 20px;
    }
    @media all and (max-width: 750px) {
        height: 30px;
        rotate: 90deg;
        left: ${({ step }) => !(+step % 2) && "50px"};
        right: ${({ step }) => +step % 2 && "50px"};
        top: auto;
        bottom: auto;
    }
    @media all and (max-width: 600px) {
        height: 20px;
        width: 2px;
    }
`;
