import React, { FC } from "react";
import { Text } from "@/anatomic/atoms/Text";
import { FlexRow } from "../Flex";
import { StyledLink } from "./styled";
import { Props } from "./util";

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
