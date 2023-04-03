import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
    title: string;
    step: string;
    text: string;
}
export const ImplementSlide: FC<Props> = ({ title, step, text }) => {
    return (
        <FlexColumn h="100%" gap="35px" p="40px 45px 50px" alignItems="start">
            <FlexRow
                h="100%"
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                gap="15px"
            >
                <FlexColumn
                    h="100%"
                    w="100%"
                    alignItems="start"
                    position="relative"
                >
                    <Text
                        size={TEXT_SIZES.medium.m}
                        color={COLORS.textPrimary}
                        weight={TEXT_WEIGHTS.main}
                        w="70%"
                    >
                        {title}
                    </Text>
                    <Divider />
                </FlexColumn>

                <GradientTitleElem
                    size="200px"
                    weight={TEXT_WEIGHTS.main}
                    lineHeight="160px"
                    color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                >
                    {step}
                </GradientTitleElem>
            </FlexRow>
            <Text w="70%" size={TEXT_SIZES.small.m} color={COLORS.textThird}>
                {text}
            </Text>
        </FlexColumn>
    );
};

const Divider = styled.div`
    position: absolute;
    bottom: -33px;
    width: 100%;
    height: 1px;
    background: ${COLORS.textThird};
`;
const GradientTitleElem = styled(GradientTitle)`
    @media all and (max-width: 603px) {
        font-size: 100px;
    }
`;
