import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import {
    AppsInterface,
    Desktop,
    Mobile,
} from "@/anatomic/organisms/AppsImplement/AppsImplement";
import { COLORS } from "@/lib/theme/color";
import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

export const ImplementSlide: FC<AppsInterface & { isActive?: boolean }> = ({
    title,
    step,
    text,
    isActive,
}) => {
    return (
        <FlexColumn
            h="100%"
            gap="35px"
            p="40px 45px 50px"
            style={{ boxSizing: "border-box" }}
        >
            <FlexRow
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="space-between"
                gap="15px"
            >
                <FlexColumn
                    h="160px"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="start"
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

                <GradientTitle
                    size="200px"
                    weight={TEXT_WEIGHTS.main}
                    lineHeight="160px"
                    color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                >
                    {step}
                </GradientTitle>
            </FlexRow>

            <Desktop>
                {isActive && (
                    <FlexColumn
                        as={motion.div}
                        w="100%"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1] }}
                        transition={{ duration: 0.3 }}
                    >
                        <Text
                            w="70%"
                            size={TEXT_SIZES.small.m}
                            color={COLORS.textThird}
                        >
                            {text}
                        </Text>
                    </FlexColumn>
                )}
            </Desktop>
            <Mobile>
                {isActive && (
                    <FlexColumn
                        as={motion.div}
                        w="100%"
                        h="100%"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1] }}
                        transition={{ duration: 0.3 }}
                    >
                        <Text
                            size={TEXT_SIZES.small.m}
                            color={COLORS.textThird}
                        >
                            {text}
                        </Text>
                    </FlexColumn>
                )}
            </Mobile>
        </FlexColumn>
    );
};

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: ${COLORS.textThird};
    margin-bottom: 20px;
`;
