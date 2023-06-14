import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { memo } from "react";
import BgImage1 from "@/assets/bgImage/home/back.svg";
import BgImage2 from "@/assets/bgImage/outstaffing/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/outstaffing/bgImage3.svg";
import BgImage4 from "@/assets/bgImage/outstaffing/bgImage4.svg";
import BgImage5 from "@/assets/bgImage/outstaffing/bgImage5.svg";
import ITeamIcon from "@/assets/bgImage/iTeam.svg";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { SwiperSlide } from "swiper/react";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { WhiteSection } from "@/anatomic/atoms/WhiteSection";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { BenefitsSlide } from "@/anatomic/molecules/BenefitsSlide";
import { Card, FlexContainer, Img } from "@/lib/pageStyles/outstaffing";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { BgImage } from "@/anatomic/atoms/BgImage/";
import { OurApproach } from "@/anatomic/organisms/OurApproach/OurApproach";
import teamIcon from "@/assets/projects/teamIcon.svg";
import { FitToViewport } from "react-fit-to-viewport";
import { Pages, useStrapiData } from "@/hooks/useStrapiData";
import { BenefitsInterface } from "@/anatomic/molecules/BenefitsSlide/BenefitsSlide";
import { useWindowSize } from "@/hooks/useWindowSize";

const Outstaffing = () => {
    const [data, isLoading] = useStrapiData(Pages.outstaffing);
    const size = useWindowSize();
    if (!data) return null;
    return (
        <FlexColumn
            w="100%"
            h="100%"
            alignItems="center"
            style={{ overflowX: "hidden" }}
        >
            <FlexColumn
                mw="630px"
                gap="50px"
                p="100px 20px 0"
                alignItems="center"
                style={{ boxSizing: "border-box" }}
            >
                <Text
                    color={COLORS.textPrimary}
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.large.xs}
                    type={TEXT_TYPES.title}
                >
                    {data.main.title}
                </Text>
                <Text
                    size={TEXT_SIZES.small.xl}
                    color={COLORS.textThird}
                    lineHeight="27px"
                >
                    {data.main.description}
                </Text>
            </FlexColumn>
            <FlexColumn
                w="100%"
                h="100%"
                position="relative"
                alignItems="center"
                p="100px 20px 0px"
                style={{ boxSizing: "border-box" }}
            >
                <BgImage
                    ds="block"
                    src={BgImage1}
                    maxWidth={750}
                    top={-30}
                    left={-16}
                    mobileTop={-14}
                    mobileLeft={-40}
                    priority
                />

                <OurApproach
                    title={data.approachTitle}
                    approaches={data.approach}
                />
            </FlexColumn>
            <FlexColumn w="100%" h="100%" position="relative" p="150px 0">
                <BgImage
                    ds="block"
                    src={BgImage2}
                    maxWidth={710}
                    top={1}
                    right={-20}
                    mobileRight={-60}
                    loading="lazy"
                />
                <BgImage
                    ds="block"
                    src={ITeamIcon}
                    maxWidth={size.width! < 715 ? 300 : 660}
                    bottom={-4}
                    right={2}
                    mobileBottom={3}
                    scrollable={false}
                    loading="lazy"
                />
                <BookingForm h="350px" />
            </FlexColumn>

            <FlexColumn
                w="100%"
                h="100%"
                position="relative"
                alignItems="center"
            >
                <BgImage
                    ds="block"
                    src={BgImage3}
                    maxWidth={1200}
                    bottom={5}
                    left={-30}
                    mobileBottom={12}
                    mobileLeft={-40}
                    loading="lazy"
                />

                <FlexColumn
                    mw="995px"
                    h="100%"
                    w="100%"
                    zIndex="3"
                    gap="50px"
                    style={{ boxSizing: "border-box" }}
                    p="0 20px"
                >
                    <FlexColumn mw="600px" alignItems="center" p="0 20px 0 ">
                        <GradientTitle
                            size={
                                size.width! < 800
                                    ? TEXT_SIZES.medium.largeM
                                    : TEXT_SIZES.large.m
                            }
                            lineHeight="130%"
                            weight={TEXT_WEIGHTS.main}
                            color="272.07deg, #17092D 35.9%, #7232E0 100%"
                        >
                            {data.benefitsTitle}
                        </GradientTitle>
                    </FlexColumn>

                    <FlexColumn w="100%">
                        <HorizontalSwiperElem
                            minHeight="500px"
                            width="100%"
                            maxWidth="975px"
                        >
                            {data.benefits.map((item: BenefitsInterface) => (
                                <SwiperSlide
                                    key={item.id}
                                    style={{
                                        borderRadius: "16px",
                                        minHeight: "400px",
                                        background: COLORS.white,
                                        maxWidth: "975px",
                                        boxShadow:
                                            "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                    }}
                                >
                                    <BenefitsSlide
                                        title={item.title}
                                        description={item.description}
                                    />
                                </SwiperSlide>
                            ))}
                        </HorizontalSwiperElem>
                    </FlexColumn>
                </FlexColumn>

                <FlexColumn w="100%" h="100%" position="relative" p="50px 0 0">
                    <WhiteSection>
                        <Text
                            color={COLORS.textPrimary}
                            weight={TEXT_WEIGHTS.medium}
                            size={TEXT_SIZES.medium.xl}
                        >
                            {data.helpingToClients.title}
                        </Text>
                        <Button
                            href="/projects"
                            gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                            variant={BUTTON_VARIANTS.gradient_link}
                            label={
                                <Text
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.main}
                                    size={TEXT_SIZES.small.l}
                                >
                                    {data.helpingToClients.button}
                                </Text>
                            }
                        />
                    </WhiteSection>
                </FlexColumn>
            </FlexColumn>
            <FlexColumn
                w="100%"
                h="100%"
                position="relative"
                alignItems="center"
                p="200px 20px"
                style={{ boxSizing: "border-box", overflow: "hidden" }}
                gap="50px"
            >
                <BgImage
                    ds="block"
                    src={BgImage4}
                    maxWidth={850}
                    top={-25}
                    right={-20}
                    mobileRight={-50}
                    mobileTop={-10}
                    loading="lazy"
                />
                <BgImage
                    ds="block"
                    src={BgImage5}
                    maxWidth={700}
                    bottom={-50}
                    left={-14}
                    mobileLeft={-50}
                    mobileBottom={-30}
                    loading="lazy"
                />

                <Text
                    color={COLORS.textPrimary}
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.medium.xl}
                >
                    {data.teamTitle}
                </Text>

                <FlexColumn
                    w="100%"
                    h="100%"
                    position="relative"
                    alignItems="center"
                >
                    <Card w="100%" h="100%">
                        <FlexContainer
                            justifyContent="space-between"
                            alignItems="center"
                            w="100%"
                            h="100%"
                            gap="20px"
                        >
                            <FlexColumn w="100%" h="100%" gap="40px">
                                <FlexColumn gap="20px">
                                    {data.team.map((item: any) => (
                                        <Text
                                            key={item.id}
                                            color={COLORS.textThird}
                                            size={TEXT_SIZES.medium.xs}
                                        >
                                            • {item.text}
                                        </Text>
                                    ))}
                                </FlexColumn>
                                <Button
                                    href="/projects"
                                    gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                    variant={BUTTON_VARIANTS.gradient_link}
                                    label={
                                        <Text
                                            color={COLORS.dark}
                                            weight={TEXT_WEIGHTS.main}
                                            size={TEXT_SIZES.small.l}
                                        >
                                            View our team
                                        </Text>
                                    }
                                />
                            </FlexColumn>
                            <FlexColumn
                                w="100%"
                                h="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <FitToViewport
                                    style={{
                                        maxWidth: "600px",
                                        height: "auto",
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    width={0}
                                    height={0}
                                    minZoom={0}
                                    maxZoom={1}
                                >
                                    <Img src={teamIcon.src} />
                                </FitToViewport>
                            </FlexColumn>
                        </FlexContainer>
                    </Card>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
    );
};
export default memo(Outstaffing);
