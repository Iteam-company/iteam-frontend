import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { SideChevron } from "@/anatomic/atoms/SideChevron";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { CoreValueInterface } from "@/pages/api/home";
import React, { FC } from "react";
import {
    Container,
    Desktop,
    GradientText,
    Divider,
    Dot,
    Mobile,
} from "./styled";

interface Props {
    info: CoreValueInterface[];
}

export const OurCoreValues: FC<Props> = ({ info = [] }) => {
    return (
        <Container
            p="110px 20px"
            w="100%"
            h="100%"
            bg="linear-gradient(180deg, rgba(48, 25, 115, 0.46) 7.84%, rgba(70, 22, 205, 0) 45.98%);"
            alignItems="center"
            gap="30px"
        >
            <Text
                size={TEXT_SIZES.medium.xl}
                weight={TEXT_WEIGHTS.medium}
                color={COLORS.textPrimary}
            >
                Our Core Values
            </Text>
            <Desktop>
                <FlexRow
                    w="100%"
                    mw="926px"
                    p="0 20px"
                    style={{ boxSizing: "border-box" }}
                >
                    {info.map((item) => (
                        <FlexColumn
                            key={item.id}
                            justifyContent="center"
                            alignItems="center"
                            w="50%"
                            gap="20px"
                        >
                            <GradientText
                                weight={TEXT_WEIGHTS.medium}
                                size="200px"
                                lineHeight="200px"
                                color="180deg, #250743 0%, rgba(95, 59, 199, 0.46) 63.54%, rgba(95, 59, 199, 0.23) 97.92%"
                            >
                                {item.letter}
                            </GradientText>
                            <FlexColumn
                                w="100%"
                                position="relative"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Divider height="1px" />
                                <Dot />
                            </FlexColumn>

                            <FlexColumn
                                p="30px 0 0"
                                w="80%"
                                gap="10px"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text
                                    size={TEXT_SIZES.medium.s}
                                    color={COLORS.textPrimary}
                                    weight={TEXT_WEIGHTS.medium}
                                    textAlign="center"
                                >
                                    {item.title}
                                </Text>
                                <Divider height="2px" />
                                <Text
                                    size={TEXT_SIZES.small.l}
                                    color={COLORS.textPrimary}
                                >
                                    {item.text}
                                </Text>
                            </FlexColumn>
                        </FlexColumn>
                    ))}
                </FlexRow>
            </Desktop>

            <Mobile w="100%">
                <FlexColumn
                    w="100%"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    style={{ boxSizing: "border-box", overflow: "hidden" }}
                >
                    {info.map((item) => (
                        <FlexRow
                            key={item.id}
                            justifyContent="space-evenly"
                            alignItems="center"
                            position="relative"
                            h="100%"
                            w="100%"
                        >
                            <FlexColumn
                                w="60%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <GradientText
                                    weight={TEXT_WEIGHTS.medium}
                                    size="150px"
                                    lineHeight="150px"
                                    textAlign="center"
                                    color="180deg, #250743 0%, rgba(95, 59, 199, 0.46) 63.54%, rgba(95, 59, 199, 0.23) 97.92%"
                                >
                                    {item.letter}
                                </GradientText>
                            </FlexColumn>

                            <FlexColumn
                                h="100%"
                                w="50%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Divider height="150px" width="2px" />
                                <Dot />
                            </FlexColumn>

                            <FlexColumn
                                gap="10px"
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                            >
                                <Text
                                    size={TEXT_SIZES.medium.s}
                                    color={COLORS.textPrimary}
                                    weight={TEXT_WEIGHTS.medium}
                                    mobileSize={TEXT_SIZES.small.l}
                                >
                                    {item.title}
                                </Text>
                                <SideChevron>
                                    <Text
                                        size={TEXT_SIZES.small.l}
                                        color={COLORS.textPrimary}
                                    >
                                        {item.text}
                                    </Text>
                                </SideChevron>
                            </FlexColumn>
                        </FlexRow>
                    ))}
                </FlexColumn>
            </Mobile>
        </Container>
    );
};
