import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { NumbersInterface } from "@/pages/outsourcing";
import React, { FC } from "react";
import CountUp from "react-countup";

export const CountUpNumbers: FC<
    NumbersInterface & { isNumbersInView: boolean }
> = ({ title, subTitle, text, isNumbersInView }) => {
    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            gap="15px"
            w="100%"
        >
            <Text
                weight={TEXT_WEIGHTS.medium}
                size={TEXT_SIZES.large.m}
                color={COLORS.textPrimary}
            >
                {isNumbersInView && <CountUp end={title} duration={2} />}
                {subTitle}
            </Text>
            <Text
                weight={TEXT_WEIGHTS.main}
                size={TEXT_SIZES.small.l}
                color={COLORS.textThird}
                textAlign="center"
            >
                {text}
            </Text>
        </FlexColumn>
    );
};
