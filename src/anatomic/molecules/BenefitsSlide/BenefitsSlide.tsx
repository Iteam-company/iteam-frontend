import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { BenefitsInterface } from "@/pages/api/outstaffing";
import styled from "styled-components";

export const BenefitsSlide: FC<BenefitsInterface> = ({ title, text }) => {
    return (
        <FlexContainer h="100%">
            <Text
                size={TEXT_SIZES.medium.m}
                color={COLORS.textPrimary}
                weight={TEXT_WEIGHTS.medium}
            >
                {title}
            </Text>
            <TextDefinition
                size={TEXT_SIZES.medium.xs}
                color={COLORS.textThird}
            >
                {text}
            </TextDefinition>
        </FlexContainer>
    );
};

const FlexContainer = styled(FlexColumn)`
    padding: 40px 45px 150px;
    gap: 50px;
    @media all and (max-width: 700px) {
        padding: 30px;
        gap: 20px;
    }
`;

const TextDefinition = styled(Text)`
    @media all and (max-width: 500px) {
        font-size: ${TEXT_SIZES.small.l} !important;
    }
`;
