import { COLORS } from "@/lib/theme/color";
import React, { FC, ReactNode } from "react";
import { FlexColumn, FlexRow } from "../Flex";
import { LETTER_SPACING, Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
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
    borderRadius,
    padding,
    height,
}) => {
    return (
        <FlexColumn w="100%" gap="4px">
            <FlexRow gap="4px">
                <Text
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.xxs}
                    color={COLORS.text}
                    letterSpacing={LETTER_SPACING.xs}
                    textTransform="capitalize"
                >
                    {label}
                </Text>
                {label && (
                    <sub>
                        <Text color={COLORS.red}>*</Text>
                    </sub>
                )}
            </FlexRow>

            <Container>
                {icon && <Icon>{icon}</Icon>}
                <StyledInput
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    validate={validate}
                    radius={borderRadius}
                    padding={padding}
                    height={height}
                />
            </Container>
            {error && <Text size={TEXT_SIZES.xxs}>{error}</Text>}
        </FlexColumn>
    );
};
