import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import {
    Container,
    CircleBorder,
    StepText,
    Line,
    Circle,
    StepNumber,
} from "./styled";
import { PropsI, HomeInterface } from "./utils";

export const HowWeWork: FC<PropsI> = ({ howWeWork }) => {
    if (!howWeWork) return null;
    return (
        <FlexColumn w="100%" justifyContent="center" alignItems="center">
            <FlexColumn w="80%">
                <Text
                    size={TEXT_SIZES.medium.xs}
                    weight={TEXT_WEIGHTS.main}
                    color={COLORS.dark}
                >
                    {howWeWork.title}
                </Text>
            </FlexColumn>
            <Container
                w="100%"
                h="100%"
                p="100px"
                alignItems="center"
                justifyContent="center"
            >
                {howWeWork.explanationWork &&
                    howWeWork.explanationWork.map((item: HomeInterface) => (
                        <CircleBorder
                            key={item.step}
                            topColor={
                                +item.step % 2 ? "transparent" : COLORS.light
                            }
                            bottomColor={
                                +item.step % 2
                                    ? COLORS.transparentPurple
                                    : "transparent"
                            }
                        >
                            <StepText
                                step={item.step}
                                position="absolute"
                                alignItems="center"
                            >
                                <Text
                                    textAlign="center"
                                    size={TEXT_SIZES.small.xl}
                                    color={
                                        +item.step % 2
                                            ? COLORS.dark
                                            : COLORS.white
                                    }
                                    weight={TEXT_WEIGHTS.medium}
                                    mobileSize={TEXT_SIZES.small.s}
                                >
                                    Result:
                                </Text>
                                <Text
                                    textAlign="center"
                                    size={TEXT_SIZES.small.l}
                                    color={
                                        +item.step % 2
                                            ? COLORS.dark
                                            : COLORS.white
                                    }
                                    mobileSize={TEXT_SIZES.small.xs}
                                >
                                    {item.text}
                                </Text>
                            </StepText>
                            <Line step={item.step} />
                            <Circle>
                                <Text
                                    size={TEXT_SIZES.medium.xs}
                                    color={COLORS.pageBG}
                                    weight={TEXT_WEIGHTS.medium}
                                    textAlign="center"
                                    mobileSize={TEXT_SIZES.small.s}
                                >
                                    {item.title}
                                </Text>
                            </Circle>
                            <StepNumber
                                position="absolute"
                                mw="200px"
                                alignItems="center"
                                step={item.step}
                            >
                                <Text
                                    textAlign="center"
                                    size={TEXT_SIZES.medium.l}
                                    color={
                                        +item.step % 2
                                            ? "#fdfbff25"
                                            : "#504d5373"
                                    }
                                    weight={TEXT_WEIGHTS.main}
                                    mobileSize={TEXT_SIZES.small.xl}
                                >
                                    {item.step}
                                </Text>
                            </StepNumber>
                        </CircleBorder>
                    ))}
            </Container>
        </FlexColumn>
    );
};
