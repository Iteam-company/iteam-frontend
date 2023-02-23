import React, { FC } from "react";
import { Text, TEXT_TYPES } from "@/anatomic/atoms/Text";
import { FlexRow } from "../Flex";
import { StyledLink } from "./styled";
import { Props } from "./util";

export const Link: FC<Props> = ({
    href,
    className,
    textClassName,
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
        <StyledLink
            href={href}
            p={p}
            linkPosition={linkPosition}
            className={className}
        >
            {icon ? (
                <FlexRow alignItems="center" gap={gap}>
                    {icon}
                    <Text
                        className={textClassName}
                        size={size}
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
                    className={className}
                    size={size}
                    color={color}
                    weight={weight}
                    textAlign={textAlign}
                    textTransform={textTransform}
                    w={w}
                    letterSpacing={letterSpacing}
                    whiteSpace={whiteSpace}
                    lineHeight={lineHeight}
                    font={font}
                    type={TEXT_TYPES.text_block}
                >
                    {linkText}
                </Text>
            )}
        </StyledLink>
    );
};
