import React, { FC, ReactNode } from "react";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";
import { FlexRow } from "../Flex";
import { LINK_POSITION } from "./util";

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
    icon?: ReactNode;
    gap?: string;
    linkPosition?: LINK_POSITION | string;
}

interface StyledProps {
    p?: string;
    linkPosition?: LINK_POSITION | string;
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
    icon,
    gap,
    linkPosition,
}) => {
    return (
        <StyledLink href={href} p={p} linkPosition={linkPosition}>
            {icon ? (
                <FlexRow alignItems="center" gap={gap}>
                    {icon}
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
                </FlexRow>
            ) : (
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
            )}
        </StyledLink>
    );
};

const StyledLink = styled.a<StyledProps>`
    text-decoration: none;
    padding: ${({ p }) => p || 0};

    &:hover {
        svg {
            fill: ${({ linkPosition }) =>
                linkPosition === LINK_POSITION.footer && COLORS.white};
            transition: all 0.5s ease;
        }
        span {
            color: ${({ linkPosition }) =>
                linkPosition === LINK_POSITION.footer && COLORS.white};
            transition: all 0.5s ease;
        }
    }
`;
