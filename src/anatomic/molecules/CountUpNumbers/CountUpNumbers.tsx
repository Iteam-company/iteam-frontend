import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import CountUp from "react-countup";

interface Props {
    title: number;
    subTitle?: string;
    text: string;
    isNumbersInView: boolean;
}

export const CountUpNumbers: FC<Props> = ({
    title,
    subTitle,
    text,
    isNumbersInView,
}) => {
    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            gap="15px"
            w="100%"
        >
            <Text
                weight={TEXT_WEIGHTS.medium}
                size={TEXT_SIZES.xxl}
                color={COLORS.textThird}
            >
                {isNumbersInView && <CountUp end={title} duration={3} />}
                {subTitle}
            </Text>
            <Text
                weight={TEXT_WEIGHTS.main}
                size={TEXT_SIZES.xs}
                color={COLORS.textMinor}
                textAlign="center"
            >
                {text}
            </Text>
        </FlexColumn>
    );
};
