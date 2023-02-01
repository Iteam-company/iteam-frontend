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
    value?: string;
    onChange?: any;
}

export const TextArea: FC<Props> = ({
    id,
    name,
    placeholder,
    icon,
    lable,
    onChange,
    value,
}) => {
    return (
        <FlexColumn w="100%" gap="4px">
            <FlexRow gap="4px">
                <Text
                    weight={TEXT_WEIGHTS.bold}
                    size={TEXT_SIZES.xxs}
                    color={COLORS.black}
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
                <StyledTextArea
                    as="textarea"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </Container>
        </FlexColumn>
    );
};
const StyledTextArea = styled(Field)`
    resize: vertical;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 6px 12px 6px 40px;
    width: 100%;
    min-height: 143px;
    outline: none;
    font-family: "Nunito", sans-serif;
    line-height: 26px;

    :focus-within {
        border: 1px solid ${COLORS.black};
        transition: border 0.5s;
    }
`;
const Icon = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
`;
const Container = styled.div`
    position: relative;
    width: 100%;
`;
