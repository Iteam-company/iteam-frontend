import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Desktop, Mobile } from "../ProjectSlide/styled";
import {
    Card,
    Label,
    ProgressBar,
    ProgressIndicator,
    GradientElem,
    GradientElemContent,
} from "./styled";
import { Technology } from "@/pages/team";

interface Props {
    technology?: Technology[];
    experience: { position: string; year: number };
    rate: number;
}

export const TeamItemCard: FC<Props> = ({ technology, experience, rate }) => {
    return (
        <FlexColumn w="100%" alignItems="space-between">
            <Desktop w="100%" alignItems="space-between">
                <FlexRow
                    justifyContent="space-between"
                    alignItems="space-between"
                    w="100%"
                    gap="20px"
                >
                    <Card justifyContent="space-between">
                        <FlexColumn gap="10px">
                            <Text
                                color={COLORS.purple}
                                textTransform="uppercase"
                                textDecoration="underline"
                                weight={TEXT_WEIGHTS.medium}
                                size={TEXT_SIZES.small.m}
                            >
                                Experience
                            </Text>
                            <Text color={COLORS.dark} size={TEXT_SIZES.small.m}>
                                {experience.position}
                            </Text>
                        </FlexColumn>
                        <FlexColumn w="100%">
                            <FlexRow
                                justifyContent="space-between"
                                w="100%"
                                position="relative"
                            >
                                <Text size="12px">0</Text>
                                <Text size="12px">5</Text>
                                <Label
                                    justifyContent="center"
                                    alignItems="center"
                                    width={experience.year}
                                >
                                    <div style={{ paddingBottom: "10px" }}>
                                        <Text
                                            color={COLORS.dark}
                                            size={TEXT_SIZES.small.xs}
                                        >
                                            {experience.year} ysr
                                        </Text>
                                    </div>
                                </Label>
                            </FlexRow>

                            <ProgressBar>
                                <ProgressIndicator width={experience.year} />
                            </ProgressBar>
                        </FlexColumn>
                    </Card>
                    <Card gap="20px" alignItems="space-between">
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size={TEXT_SIZES.small.m}
                        >
                            Expertise
                        </Text>
                        <FlexRow
                            flexWrap="wrap"
                            gap="20px"
                            alignItems="space-between"
                            h="100%"
                        >
                            {technology &&
                                technology.map((elem: Technology) => (
                                    <GradientElem
                                        gradient={COLORS.technologyGradient}
                                        key={elem.id}
                                    >
                                        <GradientElemContent
                                            justifyContent="center"
                                            alignItems="center"
                                            gap="3px"
                                        >
                                            <Text
                                                color={COLORS.textSecondary}
                                                weight={TEXT_WEIGHTS.medium}
                                                size={TEXT_SIZES.small.l}
                                            >
                                                {elem.short}
                                            </Text>
                                            <Text
                                                weight={TEXT_WEIGHTS.main}
                                                color={COLORS.textSecondary}
                                                size={TEXT_SIZES.small.xs}
                                            >
                                                {elem.text}
                                            </Text>
                                        </GradientElemContent>
                                    </GradientElem>
                                ))}
                        </FlexRow>
                    </Card>
                    <Card>
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size={TEXT_SIZES.small.m}
                        >
                            Rate
                        </Text>
                        <FlexRow alignItems="end" w="100%" gap="10px" h="100%">
                            <FlexRow alignItems="end" w="100%" h="100%">
                                <Text
                                    color={COLORS.textSecondary}
                                    size={TEXT_SIZES.small.m}
                                >
                                    Hourly developer’s rate
                                </Text>
                            </FlexRow>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "117px",
                                    minWidth: "70px",
                                }}
                            >
                                <CircularProgressbar
                                    text={`${rate}$`}
                                    maxValue={30}
                                    value={rate}
                                    styles={buildStyles({
                                        pathColor: COLORS.progressPath,
                                        textColor: COLORS.textSecondary,
                                        trailColor: COLORS.progressTrail,
                                    })}
                                />
                            </div>
                        </FlexRow>
                    </Card>
                </FlexRow>
            </Desktop>

            <Mobile>
                <FlexRow justifyContent="space-between" w="100%" gap="20px">
                    <FlexColumn gap="10px" w="100%" alignItems="center">
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size="12px"
                        >
                            Experience
                        </Text>
                        <Text
                            color={COLORS.dark}
                            size={TEXT_SIZES.small.s}
                            textAlign="center"
                        >
                            {experience.position}
                        </Text>
                        <Text color={COLORS.dark} size={TEXT_SIZES.small.s}>
                            {experience.year} year
                        </Text>
                    </FlexColumn>

                    <FlexColumn gap="10px" w="100%" alignItems="center">
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size="12px"
                        >
                            Expertise
                        </Text>
                        <FlexRow
                            flexWrap="wrap"
                            gap="20px"
                            alignItems="space-between"
                            h="100%"
                        >
                            {/* {technology &&
                                technology.map((elem: Technology) => <></>)} */}
                        </FlexRow>
                    </FlexColumn>

                    <FlexColumn gap="10px" w="100%" alignItems="center">
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size="12px"
                        >
                            Rate
                        </Text>
                        <Text>{rate} $</Text>
                    </FlexColumn>
                </FlexRow>
            </Mobile>
        </FlexColumn>
    );
};
