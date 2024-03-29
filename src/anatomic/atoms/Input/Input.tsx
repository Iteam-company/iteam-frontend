import { COLORS } from "@/lib/theme/color";
import React, { FC, ReactNode } from "react";
import { FlexColumn, FlexRow } from "../Flex";
import { LETTER_SPACING, Text, TEXT_SIZES } from "../Text";
import { Container, Icon, StyledInput } from "./styled";

interface Props {
    id?: string;
    name?: string;
    placeholder?: string;
    icon?: ReactNode;
    label?: string;
    validate?: Function;
    error?: string | null;
    borderRadius?: string;
    padding?: string;
    height?: string;
}

export const Input: FC<Props> = ({
    id,
    name,
    placeholder,
    icon,
    label,
    validate,
    error,
    padding,
}) => {
    return (
        <FlexColumn w="100%" gap="4px">
            {label && (
                <FlexRow gap="4px">
                    <Text
                        size={TEXT_SIZES.small.m}
                        color={COLORS.textPrimary}
                        letterSpacing={LETTER_SPACING.xs}
                        textTransform="capitalize"
                    >
                        {label}
                    </Text>
                    <sub>
                        <Text color={COLORS.red}>*</Text>
                    </sub>
                </FlexRow>
            )}

            <Container>
                {icon && <Icon>{icon}</Icon>}
                <StyledInput
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    validate={validate}
                    padding={padding}
                />
            </Container>
            {error && (
                <Text size={TEXT_SIZES.small.s} color={COLORS.red}>
                    {error}
                </Text>
            )}
        </FlexColumn>
    );
};
