import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const ProjectItemInfo: FC<{ color: string; title: string }> = ({
    color,
    title,
}) => {
    return (
        <>
            <Desktop>
                <Card>
                    <FlexRow w="100%" mh="80vh" alignItems="center" gap="20px">
                        <FlexColumn w="100%" gap="20px">
                            <GradientTitle
                                size={TEXT_SIZES.medium.l}
                                weight={TEXT_WEIGHTS.main}
                                color={color}
                                mobileSize={TEXT_SIZES.medium.xs}
                            >
                                {title}
                            </GradientTitle>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Developed responsive app, created new
                                    features.
                                </Text>
                                <Text size={TEXT_SIZES.small.l}>
                                    Design and development of a Angular app for
                                    the users to deploy media content on
                                    different platforms such as Apple Music,
                                    Spotify, etc.
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Client’s request
                                </Text>
                                <Text size={TEXT_SIZES.small.l}>
                                    Design and development of a Angular app for
                                    the users to deploy media content on
                                    different platforms such as Apple Music,
                                    Spotify, etc.
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Our approach
                                </Text>
                                <Text size={TEXT_SIZES.small.l}>
                                    Design and development of a Angular app for
                                    the users to deploy media content on
                                    different platforms such as Apple Music,
                                    Spotify, etc.
                                </Text>
                            </FlexColumn>
                        </FlexColumn>

                        <FlexColumn w="100%">
                            <HorizontalSwiperElem
                                minHeight="64vh"
                                width="100%"
                                maxWidth="42vw"
                            >
                                <SwiperSlide
                                    style={{
                                        background:
                                            "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "16px",
                                        minHeight: "50vh",
                                    }}
                                >
                                    1
                                </SwiperSlide>
                                <SwiperSlide
                                    style={{
                                        background:
                                            "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "16px",
                                        minHeight: "50vh",
                                    }}
                                >
                                    2
                                </SwiperSlide>
                            </HorizontalSwiperElem>
                        </FlexColumn>
                    </FlexRow>
                </Card>
            </Desktop>
            <Mobile
                h="100%"
                w="100%"
                gap="20px"
                style={{ boxSizing: "border-box" }}
            >
                <GradientTitle
                    size={TEXT_SIZES.large.m}
                    weight={TEXT_WEIGHTS.main}
                    color={color}
                    mobileSize={TEXT_SIZES.medium.xs}
                >
                    {title}
                </GradientTitle>

                <HorizontalSwiperElem
                    minHeight="55vh"
                    width="100%"
                    maxWidth="850px"
                    navigation={false}
                    pagination={true}
                >
                    <SwiperSlide
                        style={{
                            background:
                                "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                            borderRadius: "16px",
                            minHeight: "45vh",
                        }}
                    >
                        1
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            background:
                                "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                            borderRadius: "16px",
                            minHeight: "45vh",
                        }}
                    >
                        2
                    </SwiperSlide>
                </HorizontalSwiperElem>

                <FlexColumn gap="10px">
                    <Text color={COLORS.dark} weight={TEXT_WEIGHTS.main}>
                        Developed responsive app, created new features.
                    </Text>
                    <Text size={TEXT_SIZES.small.l}>
                        Design and development of a Angular app for the users to
                        deploy media content on different platforms such as
                        Apple Music, Spotify, etc.
                    </Text>

                    <FlexColumn gap="10px">
                        <Text color={COLORS.dark} weight={TEXT_WEIGHTS.main}>
                            Client’s request
                        </Text>
                        <Text size={TEXT_SIZES.small.l}>
                            Design and development of a Angular app for the
                            users to deploy media content on different platforms
                            such as Apple Music, Spotify, etc.
                        </Text>
                    </FlexColumn>
                    <FlexColumn gap="10px">
                        <Text color={COLORS.dark} weight={TEXT_WEIGHTS.main}>
                            Our approach
                        </Text>
                        <Text size={TEXT_SIZES.small.l}>
                            Design and development of a Angular app for the
                            users to deploy media content on different platforms
                            such as Apple Music, Spotify, etc.
                        </Text>
                    </FlexColumn>
                </FlexColumn>
            </Mobile>
        </>
    );
};

export const Card = styled(FlexColumn)`
    z-index: 1;
    max-width: 1068px;
    padding: 30px;
    background: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
    box-sizing: border-box;

    @media all and (max-width: 700px) {
        padding: 30px;
    }
`;
