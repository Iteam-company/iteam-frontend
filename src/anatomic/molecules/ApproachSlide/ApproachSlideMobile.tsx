import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import checkIcon from "@/assets/icon/check.svg";
import { ApproachInterface } from "@/pages/api/outstaffing";
import { StepTitle, CircularProgressbarContainer, Container } from "./styled";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import Image from "next/image";

const PROGRESS: any = {
    1: 33,
    2: 66,
    3: 97,
    4: 100,
};

export const ApproachSlideMobile: FC<ApproachInterface> = ({
    step,
    title,
    text,
    color,
}) => (
    <FlexColumn alignItems="center" gap="30px" p="20px" position="relative">
        <Text
            color={COLORS.textThird}
            weight={TEXT_WEIGHTS.medium}
            size={TEXT_SIZES.l}
        >
            Our approach
        </Text>

        <FlexRow
            w="100%"
            gap="20px"
            justifyContent="space-between"
            alignItems="start"
        >
            <FlexColumn w="100%" position="relative">
                <GradientTitle
                    size="100px"
                    weight={TEXT_WEIGHTS.main}
                    lineHeight="100px"
                    color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                >
                    {step}
                </GradientTitle>
                <StepTitle
                    color={COLORS.textThird}
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.s}
                >
                    {title}
                </StepTitle>
            </FlexColumn>

            <FlexColumn>
                {PROGRESS[step] !== 100 ? (
                    <CircularProgressbarContainer>
                        <CircularProgressbar
                            text={`${PROGRESS[step]}%`}
                            maxValue={100}
                            value={PROGRESS[step]}
                            styles={buildStyles({
                                pathColor: color,
                                textColor: color,
                                trailColor: COLORS.progressTrail,
                            })}
                        />
                    </CircularProgressbarContainer>
                ) : (
                    <Container
                        color={color}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            width={50}
                            height={50}
                            src={checkIcon.src}
                            alt="check"
                        />
                    </Container>
                )}
            </FlexColumn>
        </FlexRow>
        <Text size={TEXT_SIZES.xxs} color={COLORS.textMinor} lineHeight="22px">
            {text}
        </Text>
    </FlexColumn>
);
