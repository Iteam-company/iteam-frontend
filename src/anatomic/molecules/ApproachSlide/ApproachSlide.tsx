import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import checkIcon from "@/assets/icon/check.svg";
import { ApproachInterface } from "@/pages/api/outstaffing";
import { StepTitle, CircularProgressbarContainer, Container } from "./styled";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";

export const ApproachSlide: FC<ApproachInterface> = ({
    step,
    title,
    text,
    progress = 33,
    color,
}) => {
    return (
        <FlexColumn alignItems="center" gap="30px" p="40px 50px 75px">
            <Text
                color={COLORS.textThird}
                weight={TEXT_WEIGHTS.medium}
                size={TEXT_SIZES.xl}
            >
                Our approach
            </Text>
            <FlexRow gap="90px" justifyContent="center" alignItems="center">
                <FlexColumn mw="340px">
                    <FlexColumn w="100%" position="relative">
                        <GradientTitle
                            size="200px"
                            weight={TEXT_WEIGHTS.main}
                            lineHeight="200px"
                            color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                        >
                            {step}
                        </GradientTitle>
                        <StepTitle
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.medium}
                            size={TEXT_SIZES.xl}
                        >
                            {title}
                        </StepTitle>
                    </FlexColumn>
                    <Text
                        size={TEXT_SIZES.s}
                        color={COLORS.textMinor}
                        lineHeight="38px"
                    >
                        {text}
                    </Text>
                </FlexColumn>
                <FlexColumn w="100%">
                    {progress !== 100 ? (
                        <CircularProgressbarContainer>
                            <CircularProgressbar
                                text={`${progress}%`}
                                maxValue={100}
                                value={progress}
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
                            <img src={checkIcon.src} />
                        </Container>
                    )}
                </FlexColumn>
            </FlexRow>
        </FlexColumn>
    );
};
