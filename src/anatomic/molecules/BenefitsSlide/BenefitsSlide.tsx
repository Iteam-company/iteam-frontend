import React, { FC } from "react";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";

export interface BenefitsInterface {
    id?: number;
    title: string;
    description: string;
}

export const BenefitsSlide: FC<BenefitsInterface> = ({
    title,
    description,
    id,
}) => {
    return (
        <FlexContainer gap="40px">
            <FlexColumn h="100%" gap="25px">
                <Text
                    size={TEXT_SIZES.medium.m}
                    color={COLORS.textPrimary}
                    weight={TEXT_WEIGHTS.medium}
                    mobileSize={TEXT_SIZES.medium.xs}
                >
                    {title}
                </Text>
                <Text
                    size={TEXT_SIZES.medium.xs}
                    color={COLORS.textThird}
                    mobileSize={TEXT_SIZES.small.m}
                >
                    {description}
                </Text>
            </FlexColumn>
            {id && (
                <GradientTitle
                    size="200px"
                    weight={TEXT_WEIGHTS.main}
                    lineHeight="160px"
                    mobileSize="100px"
                    mobileLineHeight="100px"
                    color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                >
                    {id}
                </GradientTitle>
            )}
        </FlexContainer>
    );
};

const FlexContainer = styled(FlexRow)`
    padding: 40px 45px 100px;
    @media all and (max-width: 700px) {
        padding: 30px 30px 50px;
        gap: 20px;
    }
`;
