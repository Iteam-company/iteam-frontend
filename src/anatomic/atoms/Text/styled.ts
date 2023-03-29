import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { TEXT_SIZES, TEXT_WEIGHTS, Props } from "./util";

export const StyledTitle = styled.h2<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.xl};
    color: ${({ color }) => color || COLORS.black};
    font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.medium};
    text-align: ${({ textAlign }) => textAlign || "start"};
    z-index: 2;
    text-transform: ${({ textTransform }) => textTransform || "none"};
    text-decoration: ${({ textDecoration }) => textDecoration || "none"};
    width: ${({ w }) => w || "auto"};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || "auto"};
    white-space: ${({ whiteSpace }) => whiteSpace || "auto"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font: ${({ font }) => font || "auto"};
    @media all and (max-width: 600px) {
        font-size: ${({ mobileSize }) => mobileSize};
    }
`;

export const StyledText = styled.span<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.xs};
    color: ${({ color }) => color || COLORS.gray};
    font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.normal};
    text-align: ${({ textAlign }) => textAlign || "start"};
    z-index: 2;
    text-transform: ${({ textTransform }) => textTransform || "none"};
    text-decoration: ${({ textDecoration }) => textDecoration || "none"};
    width: ${({ w }) => w || "auto"};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || "auto"};
    white-space: ${({ whiteSpace }) => whiteSpace || "auto"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font: ${({ font }) => font || "auto"};
    @media all and (max-width: 600px) {
        font-size: ${({ mobileSize }) => mobileSize};
    }
`;

export const StyledBlockText = styled.p<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.xs};
    color: ${({ color }) => color || COLORS.gray};
    font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.normal};
    text-align: ${({ textAlign }) => textAlign || "start"};
    z-index: 2;
    text-transform: ${({ textTransform }) => textTransform || "none"};
    text-decoration: ${({ textDecoration }) => textDecoration || "none"};
    width: ${({ w }) => w || "auto"};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || "auto"};
    white-space: ${({ whiteSpace }) => whiteSpace || "auto"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font: ${({ font }) => font || "auto"};
    @media all and (max-width: 600px) {
        font-size: ${({ mobileSize }) => mobileSize};
    }
`;
