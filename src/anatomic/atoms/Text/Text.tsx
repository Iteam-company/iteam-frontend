import { FC, ReactNode } from "react";
import { TEXT_TYPES, TEXT_WEIGHTS, TEXT_SIZES } from "./util";
import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";

interface Props {
    type?: TEXT_TYPES;
    size?: TEXT_SIZES | string;
    weight?: TEXT_WEIGHTS | string;
    lineHeight?: string;
    color?: COLORS | string;
    className?: string;
    children?: ReactNode;
    w?: string;
    font?: string;
    textAlign?: string;
    textTransform?: string;
    whiteSpace?: string;
    letterSpacing?: string;
}

export const Text: FC<Props> = ({
    type = TEXT_TYPES.text,
    color,
    weight = TEXT_WEIGHTS.normal,
    size,
    children = null,
    className = "",
    w = "auto",
    textAlign,
    textTransform,
    letterSpacing,
    whiteSpace,
    lineHeight,
    font,
}) => {
    if (type === TEXT_TYPES.title) {
        return (
            <StyledTitle
                className={className}
                color={color}
                weight={weight}
                size={size}
                textAlign={textAlign}
                textTransform={textTransform}
                w={w}
                letterSpacing={letterSpacing}
                whiteSpace={whiteSpace}
                lineHeight={lineHeight}
                font={font}
            >
                {children}
            </StyledTitle>
        );
    }

    if (type === TEXT_TYPES.text) {
        return (
            <StyledText
                className={className}
                color={color}
                weight={weight}
                size={size}
                textAlign={textAlign}
                textTransform={textTransform}
                w={w}
                whiteSpace={whiteSpace}
                letterSpacing={letterSpacing}
                lineHeight={lineHeight}
                font={font}
            >
                {children}
            </StyledText>
        );
    }
    if (type === TEXT_TYPES.text_block) {
        return (
            <StyledBlockText
                className={className}
                color={color}
                weight={weight}
                size={size}
                textAlign={textAlign}
                textTransform={textTransform}
                w={w}
                whiteSpace={whiteSpace}
                letterSpacing={letterSpacing}
                lineHeight={lineHeight}
                font={font}
            >
                {children}
            </StyledBlockText>
        );
    }

    return null;
};
const StyledTitle = styled.h2<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.xl};
    color: ${({ color }) => color || COLORS.black};
    font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.medium};
    text-align: ${({ textAlign }) => textAlign || "start"};
    z-index: 2;
    text-transform: ${({ textTransform }) => textTransform || "none"};
    width: ${({ w }) => w || "auto"};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || "auto"};
    white-space: ${({ whiteSpace }) => whiteSpace || "auto"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font: ${({ font }) => font || "auto"};
`;

const StyledText = styled.span<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.xs};
    color: ${({ color }) => color || COLORS.gray};
    font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.normal};
    text-align: ${({ textAlign }) => textAlign || "start"};
    z-index: 2;
    text-transform: ${({ textTransform }) => textTransform || "none"};
    width: ${({ w }) => w || "auto"};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || "auto"};
    white-space: ${({ whiteSpace }) => whiteSpace || "auto"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font: ${({ font }) => font || "auto"};
`;

const StyledBlockText = styled.p<Props>`
    font-size: ${({ size }) => size || TEXT_SIZES.xs};
    color: ${({ color }) => color || COLORS.gray};
    font-weight: ${({ weight }) => weight || TEXT_WEIGHTS.normal};
    text-align: ${({ textAlign }) => textAlign || "start"};
    z-index: 2;
    text-transform: ${({ textTransform }) => textTransform || "none"};
    width: ${({ w }) => w || "auto"};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || "auto"};
    white-space: ${({ whiteSpace }) => whiteSpace || "auto"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font: ${({ font }) => font || "auto"};
`;
