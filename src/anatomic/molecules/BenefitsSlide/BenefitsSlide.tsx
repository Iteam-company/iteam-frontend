import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { BenefitsInterface } from "@/pages/api/outstaffing";

export const BenefitsSlide: FC<BenefitsInterface> = ({ title, text }) => {
    return (
        <FlexColumn h="100%" gap="50px" p="40px 45px 150px">
            <Text
                size={TEXT_SIZES.l}
                color={COLORS.textThird}
                weight={TEXT_WEIGHTS.medium}
            >
                {title}
            </Text>
            <Text size={TEXT_SIZES.m} color={COLORS.textMinor}>
                {text}
            </Text>
        </FlexColumn>
    );
};
