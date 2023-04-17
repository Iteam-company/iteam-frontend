import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { TEXT_SIZES, TEXT_WEIGHTS, Props } from "./util";

export const StyledTitle = styled.h1<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.medium.l};
    color: ${({ color }) => color || COLORS.dark};
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
        line-height: ${({ mobileLineHeight }) => mobileLineHeight};
    }
`;

export const StyledText = styled.span<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.small.l};
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
        line-height: ${({ mobileLineHeight }) => mobileLineHeight};
    }
`;

export const StyledBlockText = styled.p<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.small.l};
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
        line-height: ${({ mobileLineHeight }) => mobileLineHeight};
    }
`;
