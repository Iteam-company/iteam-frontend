import React, { FC } from "react";
import { TeamInterface, Technology } from "@/pages/api/team";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
    Card,
    Label,
    ProgressBar,
    ProgressIndicator,
    GradientElem,
    GradientElemContent,
    CardTitle,
} from "./styled";
import { TeamItemInfo } from "./TeamItemInfo";
import { CommentSlider } from "./CommentSlider";
import UpWorkLink from "@/assets/icon/upWorkLink.svg";

export const CardElem: FC<TeamInterface> = ({
    name,
    avatar,
    position,
    technology,
    comments,
    experience,
    rate,
}) => {
    return (
        <FlexRow gap="30px" p="46px 90px">
            <TeamItemInfo name={name} avatar={avatar} position={position} />

            <FlexColumn w="62vw" gap="40px">
                <FlexRow justifyContent="space-between" w="100%" gap="20px">
                    <Card justifyContent="space-between">
                        <FlexColumn gap="10px">
                            <CardTitle>Experience</CardTitle>
                            <Text>{experience.position}</Text>
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
                                        <Text color={COLORS.black} size="10px">
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
                        <CardTitle>Expertise</CardTitle>
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
                                                size={TEXT_SIZES.xs}
                                            >
                                                {elem.short}
                                            </Text>
                                            <Text
                                                weight={TEXT_WEIGHTS.main}
                                                color={COLORS.textSecondary}
                                                size="10px"
                                            >
                                                {elem.text}
                                            </Text>
                                        </GradientElemContent>
                                    </GradientElem>
                                ))}
                        </FlexRow>
                    </Card>

                    <Card>
                        <CardTitle>Rate</CardTitle>
                        <FlexRow alignItems="end" w="100%" gap="10px" h="100%">
                            <FlexRow alignItems="end" w="100%" h="100%">
                                <Text
                                    color={COLORS.textSecondary}
                                    size={TEXT_SIZES.xxs}
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
                <CommentSlider comments={comments} />
                <FlexColumn w="100%" justifyContent="end" alignItems="end">
                    <Text color={COLORS.textSecondary} size={TEXT_SIZES.xxxs}>
                        Follow the link to see more
                    </Text>
                    <img src={UpWorkLink.src} />
                </FlexColumn>
            </FlexColumn>
        </FlexRow>
    );
};
