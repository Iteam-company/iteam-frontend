import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import Arrow_Rigth from "@/assets/icon/arrow-right.svg";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { log } from "console";
import { Box } from "../ExploreWithIteam/styled";

export const ProjectItemInfo: FC<{
    data: any;
}> = ({ data }) => {
    const size = useWindowSize();
    const { title, color } = data.projectDetail;
    const {
        developedTitle,
        developedText,
        requestTitle,
        requestText,
        approachTitle,
        approachText,
        visitLink,
    } = data;
    return (
        <>
            <Desktop>
                <Card mw="1150px">
                    <FlexRow w="100%" alignItems="center" gap="20px">
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
                                    {developedTitle}
                                </Text>
                                <Text size={TEXT_SIZES.small.l}>
                                    {developedText}
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    {requestTitle}
                                </Text>
                                <Text size={TEXT_SIZES.small.l}>
                                    {requestText}
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    {approachTitle}
                                </Text>
                                <Text size={TEXT_SIZES.small.l}>
                                    {approachText}
                                </Text>
                            </FlexColumn>
                            <FlexColumn m="80px 0 0 0 ">
                                <Button
                                    href={visitLink}
                                    gradient={data.projectDetail.color}
                                    variant={BUTTON_VARIANTS.gradient_link}
                                    label={
                                        <FlexRow
                                            alignItems="center"
                                            gridGap="10px"
                                        >
                                            <Text
                                                size={TEXT_SIZES.small.s}
                                                color={COLORS.dark}
                                                weight={TEXT_WEIGHTS.main}
                                            >
                                                Visit site
                                            </Text>

                                            <Image
                                                src={Arrow_Rigth.src}
                                                alt="swiper-imagurkle"
                                                width="21"
                                                height="20"
                                            />
                                        </FlexRow>
                                    }
                                />
                            </FlexColumn>
                        </FlexColumn>

                        <FlexColumn w="100%">
                            <HorizontalSwiperElem
                                minHeight={
                                    size.height! > 800 ? "350px" : "56vh"
                                }
                                maxWidth="470px"
                                loop={false}
                                slidesPerView={1}
                                spaceBetween={70}
                                loopedSlides={1}
                                m="0 0 50px 0"
                            >
                                {data.mainImages.data.map((item: any) => {
                                    return (
                                        <SwiperSlide
                                            key={item.attributes.url}
                                            style={{
                                                background:
                                                    "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                                                boxShadow:
                                                    "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                                borderRadius: "18px",
                                                overflow: "hidden",
                                                maxWidth: "470px",
                                                maxHeight: "250px",

                                                aspectRatio: "1.8/1.5",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",

                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        backgroundImage: `url(${item.attributes.url})`,
                                                        backgroundRepeat:
                                                            "no-repeat",
                                                        backgroundSize:
                                                            "100% 100%",
                                                        backgroundPosition:
                                                            "center",
                                                        overflow: "hidden",
                                                        width: "100%",
                                                        height: "250px",
                                                        aspectRatio: "1.8/1.5",
                                                    }}
                                                ></div>
                                                {/* <Image
                                                    src={item.attributes.url}
                                                    alt="swiper-image"
                                                    width="470"
                                                    height="300"
                                                /> */}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
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
                    minHeight="230px"
                    m="0 0 10px 0 "
                    width="100%"
                    maxWidth="850px"
                    navigation={false}
                    pagination={true}
                >
                    {data.mainImages.data.map((item: any) => {
                        return (
                            <SwiperSlide
                                key={item.attributes.url}
                                style={{
                                    background:
                                        "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    maxWidth: "800px",
                                    aspectRatio: "1.8/1",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        aspectRatio: "1.8/1",
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.attributes.url})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "100% 100%",
                                            backgroundPosition: "center",
                                            overflow: "hidden",
                                            width: "100%",
                                            height: "auto",
                                            aspectRatio: "1.8/1",
                                        }}
                                    ></div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </HorizontalSwiperElem>

                <FlexColumn gap="10px" w="100%">
                    <Text
                        color={COLORS.dark}
                        weight={TEXT_WEIGHTS.main}
                        whiteSpace="pre-line"
                    >
                        {developedTitle}
                    </Text>
                    <Text size={TEXT_SIZES.small.l} whiteSpace="pre-line">
                        {developedText}
                    </Text>

                    <FlexColumn
                        gap="10px"
                        w="100%"
                        style={{ minWidth: "100%" }}
                    >
                        <Text
                            color={COLORS.dark}
                            weight={TEXT_WEIGHTS.main}
                            whiteSpace="pre-line"
                        >
                            {requestTitle}
                        </Text>
                        <Text size={TEXT_SIZES.small.l} whiteSpace="pre-line">
                            {requestText}
                        </Text>
                    </FlexColumn>
                    <FlexColumn gap="10px" w="100%">
                        <Text
                            color={COLORS.dark}
                            weight={TEXT_WEIGHTS.main}
                            whiteSpace="pre-line"
                        >
                            {approachTitle}
                        </Text>
                        <Text size={TEXT_SIZES.small.l} whiteSpace="pre-line">
                            {approachText}
                        </Text>
                    </FlexColumn>
                    <FlexColumn m="40px 0 0 0 ">
                        <Button
                            href={visitLink}
                            gradient={data.projectDetail.color}
                            variant={BUTTON_VARIANTS.gradient_link}
                            label={
                                <FlexRow alignItems="center" gridGap="10px">
                                    <Text
                                        size={TEXT_SIZES.small.s}
                                        color={COLORS.dark}
                                        weight={TEXT_WEIGHTS.main}
                                    >
                                        Visit site
                                    </Text>

                                    <Image
                                        src={Arrow_Rigth.src}
                                        alt="swiper-imagurkle"
                                        width="21"
                                        height="20"
                                    />
                                </FlexRow>
                            }
                        />
                    </FlexColumn>
                </FlexColumn>
            </Mobile>
        </>
    );
};

interface cardProps {
    mw?: string;
}
export const Card = styled(FlexColumn)<cardProps>`
    z-index: 1;
    max-width: ${({ mw }) => (mw ? mw : "1068px")};
    padding: 30px;
    background: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
    box-sizing: border-box;

    @media all and (max-width: 700px) {
        padding: 30px;
    }
`;
