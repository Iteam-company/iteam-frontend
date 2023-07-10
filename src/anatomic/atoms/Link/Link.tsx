import React, { FC } from "react";
import { Text, TEXT_TYPES } from "@/anatomic/atoms/Text";
import { FlexRow } from "../Flex";
import { StyledLink } from "./styled";
import { Props } from "./util";

export const Link: FC<Props> = ({
    href,
    className,
    linkText,
    p,
    icon,
    gap,
    linkPosition,
    textStyles,
    children,
}) => {
    return (
        <StyledLink
            href={href}
            p={p}
            linkPosition={linkPosition}
            className={className}
        >
            <>
                {icon ? (
                    <FlexRow alignItems="center" gap={gap}>
                        {icon}
                        <Text {...textStyles}>{linkText}</Text>
                    </FlexRow>
                ) : (
                    <Text type={TEXT_TYPES.text_block} {...textStyles}>
                        {linkText}
                    </Text>
                )}
                {children}
            </>
        </StyledLink>
    );
};
