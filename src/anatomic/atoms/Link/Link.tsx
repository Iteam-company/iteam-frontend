import React, { FC } from "react";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";

interface Props {
    href: string;
    size?: TEXT_SIZES | string;
    weight?: TEXT_WEIGHTS | string;
    lineHeight?: string;
    color?: COLORS | string;
    className?: string;
    w?: string;
    font?: string;
    textAlign?: string;
    textTransform?: string;
    whiteSpace?: string;
    letterSpacing?: string;
    linkText: string;
    p?: string;
}

interface StyledProps {
    p?: string;
}

export const Link: FC<Props> = ({
    href,
    className,
    color,
    weight,
    size,
    textAlign,
    textTransform,
    w,
    letterSpacing,
    whiteSpace,
    lineHeight,
    font,
    linkText,
    p,
}) => {
    return (
        <StyledLink href={href} p={p}>
            <Text
                size={size}
                className={className}
                color={color}
                weight={weight}
                textAlign={textAlign}
                textTransform={textTransform}
                w={w}
                letterSpacing={letterSpacing}
                whiteSpace={whiteSpace}
                lineHeight={lineHeight}
                font={font}
            >
                {linkText}
            </Text>
        </StyledLink>
    );
};

const StyledLink = styled.a<StyledProps>`
    text-decoration: none;
    padding: ${({ p }) => p || 0};
`;
