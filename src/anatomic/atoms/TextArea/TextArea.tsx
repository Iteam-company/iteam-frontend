import { COLORS } from "@/lib/theme/color";
import React, { FC, ReactNode } from "react";
import { FlexColumn, FlexRow } from "../Flex";
import { LETTER_SPACING, Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import { Container, Icon, StyledTextArea } from "./styled";

interface Props {
    id?: string;
    name?: string;
    placeholder?: string;
    icon?: ReactNode;
    label?: string;
    value?: string;
    onChange?: any;
    error?: string | null;
}

export const TextArea: FC<Props> = ({
    id,
    name,
    placeholder,
    icon,
    label,
    onChange,
    value,
    error,
}) => {
    return (
        <FlexColumn w="100%" gap="4px">
            <FlexRow gap="4px">
                <Text
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.xxs}
                    color={COLORS.black}
                    letterSpacing={LETTER_SPACING.xs}
                    textTransform="capitalize"
                >
                    {label}
                </Text>
                <sub>
                    <Text color={COLORS.red}>*</Text>
                </sub>
            </FlexRow>

            <Container>
                <Icon>{icon}</Icon>
                <StyledTextArea
                    as="textarea"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </Container>
            {error && <Text size={TEXT_SIZES.xxs}>{error}</Text>}
        </FlexColumn>
    );
};
