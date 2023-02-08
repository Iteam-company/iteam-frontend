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
    lable?: string;
    validate?: Function;
    error?: string | null;
}

export const Input: FC<Props> = ({
    id,
    name,
    placeholder,
    icon,
    lable,
    validate,
    error,
}) => {
    return (
        <FlexColumn w="100%" gap="4px">
            <FlexRow gap="4px">
                <Text
                    weight={TEXT_WEIGHTS.bold}
                    size={TEXT_SIZES.xxs}
                    color={COLORS.text}
                    letterSpacing={LETTER_SPACING.xs}
                    textTransform="capitalize"
                >
                    {lable}
                </Text>
                <sub>
                    <Text color={COLORS.red}>*</Text>
                </sub>
            </FlexRow>

            <Container>
                <Icon>{icon}</Icon>
                <StyledInput
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    validate={validate}
                />
            </Container>
            {error && <Text size={TEXT_SIZES.xxs}>{error}</Text>}
        </FlexColumn>
    );
};
