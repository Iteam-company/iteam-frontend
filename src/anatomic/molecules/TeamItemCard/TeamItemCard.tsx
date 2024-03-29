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
import Image from "next/image";
import label from "../../../assets/icon/label.svg";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Technology } from "@/interfaces/pages/team";

interface Props {
    technology?: Technology[];
    experience: { position: string; year: number };
    rate: number;
}

export const TeamItemCard: FC<Props> = ({ technology, experience, rate }) => {
    const size = useWindowSize();
    return (
        <FlexColumn w="100%" alignItems="space-between">
            <Desktop w="100%" alignItems="space-between" mW={1250}>
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
                                <Text size="12px">
                                    {experience.year < 5 ? 5 : ""}
                                </Text>
                                <Label
                                    justifyContent="center"
                                    alignItems="center"
                                    width={
                                        experience.year < 5
                                            ? experience.year
                                            : experience.year - 0.2
                                    }
                                >
                                    <div style={{ paddingBottom: "10px" }}>
                                        <Text
                                            color={COLORS.dark}
                                            size={TEXT_SIZES.small.xs}
                                        >
                                            {experience.year} yrs
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
                            gap="16px"
                            alignItems="center"
                            h="100%"
                            w="100%"
                        >
                            {technology &&
                                technology.map((elem: Technology) => (
                                    <GradientElem
                                        gradient={COLORS.technologyGradient}
                                        key={elem.id}
                                        width="44%"
                                    >
                                        <GradientElemContent
                                            justifyContent="center"
                                            alignItems="center"
                                            gap="3px"
                                        >
                                            <FlexRow
                                                alignItems="center"
                                                justifyContent="flex-start"
                                                gap="10px"
                                                w="100%"
                                                h="100%"
                                                p="10px"
                                            >
                                                <Image
                                                    src={
                                                        elem.techIcon.data
                                                            .attributes.url
                                                    }
                                                    alt="tech_logo"
                                                    width={
                                                        size.width! > 1700
                                                            ? "25"
                                                            : "18"
                                                    }
                                                    height={
                                                        size.width! > 1700
                                                            ? "25"
                                                            : "18"
                                                    }
                                                />
                                                <Text
                                                    weight={TEXT_WEIGHTS.main}
                                                    color={COLORS.textSecondary}
                                                    size={
                                                        size.width! > 1600
                                                            ? TEXT_SIZES.small.s
                                                            : TEXT_SIZES.small
                                                                  .xs
                                                    }
                                                >
                                                    {elem.text}
                                                </Text>
                                            </FlexRow>
                                        </GradientElemContent>
                                    </GradientElem>
                                ))}
                        </FlexRow>
                    </Card>
                    <Card>
                        <FlexColumn gap="8px">
                            <FlexRow>
                                <FlexColumn gap="10px">
                                    <Text
                                        color={COLORS.purple}
                                        textTransform="uppercase"
                                        textDecoration="underline"
                                        weight={TEXT_WEIGHTS.medium}
                                        size={TEXT_SIZES.small.m}
                                    >
                                        Rate
                                    </Text>
                                    <div
                                        style={{
                                            marginTop: "-10px",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        <Text
                                            color={COLORS.textSecondary}
                                            size={TEXT_SIZES.medium.largeM}
                                            weight={TEXT_WEIGHTS.main}
                                        >
                                            {rate}$
                                        </Text>
                                    </div>
                                    <Text
                                        color={COLORS.textSecondary}
                                        size={TEXT_SIZES.small.m}
                                    >
                                        Hourly developer’s rate
                                    </Text>
                                </FlexColumn>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        maxWidth: "100px",
                                        minWidth: "70px",
                                        paddingLeft: "14px",
                                        paddingTop: "30px",
                                    }}
                                >
                                    <div style={{ position: "relative" }}>
                                        <CircularProgressbar
                                            maxValue={30}
                                            value={rate}
                                            styles={buildStyles({
                                                rotation:
                                                    rate === 30 || rate === 20
                                                        ? 0.33
                                                        : 0.16,
                                                pathColor: COLORS.progressPath,
                                                textColor: COLORS.textSecondary,
                                                trailColor:
                                                    COLORS.progressTrail,
                                            })}
                                        />
                                        <div
                                            style={
                                                rate === 30
                                                    ? { display: "none" }
                                                    : {
                                                          position: "absolute",
                                                          top: "-20%",
                                                          right: "44%",
                                                      }
                                            }
                                        >
                                            <Text
                                                color={COLORS.dark}
                                                size={TEXT_SIZES.small.xs}
                                            >
                                                30$
                                            </Text>
                                        </div>
                                        <Label
                                            bgImg={rate === 30 ? null : label}
                                            justifyContent="center"
                                            alignItems="center"
                                            top={
                                                rate === 30
                                                    ? "-29%"
                                                    : rate === 25
                                                    ? "17%"
                                                    : "53%"
                                            }
                                            right={
                                                rate === 30
                                                    ? "35%"
                                                    : rate === 25
                                                    ? "25%"
                                                    : "22%"
                                            }
                                        >
                                            <Text
                                                color={COLORS.dark}
                                                size={TEXT_SIZES.small.xs}
                                            >
                                                <div
                                                    style={
                                                        rate === 30
                                                            ? {
                                                                  padding:
                                                                      "3px 3px 8px 6px",
                                                              }
                                                            : {
                                                                  padding:
                                                                      "4px 12px 6px 10px",
                                                              }
                                                    }
                                                >
                                                    {`${rate}$`}
                                                </div>
                                            </Text>
                                        </Label>
                                    </div>
                                </div>
                            </FlexRow>
                            <FlexRow w="100%" gap="10px" h="100%">
                                <FlexRow w="100%" h="100%"></FlexRow>
                            </FlexRow>
                        </FlexColumn>
                    </Card>
                </FlexRow>
            </Desktop>

            <Mobile mW={1250}>
                <FlexRow
                    justifyContent={
                        size.height! > 650 ? "space-between" : "center"
                    }
                    w="100%"
                    gap="20px"
                >
                    <FlexColumn gap="10px" w="100%" alignItems="center">
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size={size.height! > 650 ? "12px" : "10px"}
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

                    <FlexColumn gap="10px" w="50%" alignItems="center">
                        <Text
                            color={COLORS.purple}
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                            size={size.height! > 650 ? "12px" : "10px"}
                        >
                            Expertise
                        </Text>
                        <FlexRow
                            flexWrap={size.width! > 600 ? "nowrap" : "wrap"}
                            gap="20px"
                            alignItems="space-between"
                            h="100%"
                            style={size.width! > 600 ? {} : { flex: "1 1 60%" }}
                        >
                            {technology &&
                                technology.map(
                                    (elem: Technology, index: number) => {
                                        return (
                                            <FlexRow
                                                key={elem.id}
                                                alignItems="center"
                                                justifyContent="center"
                                                flexWrap="wrap"
                                                gap="10px"
                                                w="100%"
                                                h="100%"
                                                style={
                                                    size.width! < 600
                                                        ? {
                                                              flex: "1 1 25%",
                                                          }
                                                        : {}
                                                }
                                            >
                                                {!(index % 2) && (
                                                    <Image
                                                        src={
                                                            elem.techIcon.data
                                                                .attributes.url
                                                        }
                                                        alt="tech_logo"
                                                        width={
                                                            size.height! > 650
                                                                ? "17"
                                                                : "13"
                                                        }
                                                        height={
                                                            size.height! > 650
                                                                ? "17"
                                                                : "13"
                                                        }
                                                    />
                                                )}
                                                {!!(index % 2) && (
                                                    <Image
                                                        src={
                                                            elem.techIcon.data
                                                                .attributes.url
                                                        }
                                                        alt="tech_logo"
                                                        width={
                                                            size.height! > 650
                                                                ? "17"
                                                                : "13"
                                                        }
                                                        height={
                                                            size.height! > 650
                                                                ? "17"
                                                                : "13"
                                                        }
                                                    />
                                                )}
                                            </FlexRow>
                                        );
                                    },
                                )}
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
                            size={size.height! > 650 ? "12px" : "10px"}
                        >
                            Rate
                        </Text>
                        <Text
                            weight={TEXT_WEIGHTS.main}
                            color={COLORS.black}
                            size={TEXT_SIZES.medium.m}
                        >
                            {rate} $
                        </Text>
                    </FlexColumn>
                </FlexRow>
            </Mobile>
        </FlexColumn>
    );
};
