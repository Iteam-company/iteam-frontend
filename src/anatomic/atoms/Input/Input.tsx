import { COLORS } from "@/lib/theme/color";
import { Field } from "formik";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "../Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";

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
                    letterSpacing="0.44px"
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
const StyledInput = styled(Field)`
    border: 1px solid #dee2e6;
    border-radius: 6px;
    height: 40px;
    box-sizing: border-box;
    padding: 6px 12px 6px 40px;
    width: 100%;
    outline: none;
    :focus-within {
        border: 1px solid ${COLORS.black};
        transition: border 0.5s;
    }
`;
const Icon = styled.div`
    height: 40px;
    width: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    position: relative;
    width: 100%;
`;
