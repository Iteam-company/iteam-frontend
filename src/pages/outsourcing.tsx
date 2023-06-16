import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { memo, useRef } from "react";
import BgImage1 from "@/assets/bgImage/home/back.svg";
import BgImage2 from "@/assets/bgImage/outsourcing/bgout.svg";
import BgImage3 from "@/assets/bgImage/outsourcing/bgImage3.svg";
import BgImage4 from "@/assets/bgImage/outsourcing/bgImage4.svg";
import BgImage5 from "@/assets/bgImage/outsourcing/bgImage5.svg";
import BgImage6 from "@/assets/bgImage/outsourcing/bgImage6.svg";
import ITeamIcon from "@/assets/bgImage/iTeam.svg";
import { WhiteSection } from "@/anatomic/atoms/WhiteSection";
import { Card, FlexContainer, Img } from "@/lib/pageStyles/outstaffing";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import monitorIcon from "@/assets/bgImage/outsourcing/monitor.svg";
import { BgImage } from "@/anatomic/atoms/BgImage/";
import { BenefitsSlide } from "@/anatomic/molecules/BenefitsSlide";
import { SwiperSlide } from "swiper/react";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { useInView } from "framer-motion";
import { FitToViewport } from "react-fit-to-viewport";
import { SwiperRange } from "@/anatomic/organisms/SwiperRange";
import { AppsImplement } from "@/anatomic/organisms/AppsImplement";
import { CountUpNumbers } from "@/anatomic/molecules/CountUpNumbers";
import { Pages, useStrapiData } from "@/hooks/useStrapiData";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";

export interface ProcessInterface {
    step?: number;
    title: string;
    text: string;
}
export interface ServicesInterface {
    text: string;
}
export interface NumbersInterface {
    id?: number;
    title: number;
    subTitle?: string;
    text: string;
}
const Outsourcing = () => {
    const numbersViewRef = useRef(null);
    const isNumbersInView = useInView(numbersViewRef);
    const size = useWindowSize();
    const w = size.width! > 1800 ? "100%" : "60%";

    const [data, isLoading] = useStrapiData(Pages.outsourcing);
    if (!data) return <LogoAnimation />;
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
                    {data?.main.title}
                </Text>
                <Text
                    size={TEXT_SIZES.small.xl}
                    color={COLORS.textThird}
                    lineHeight="27px"
                >
                    {data?.main.description}
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
                    maxWidth={800}
                    top={-40}
                    left={-20}
                    mobileTop={-2}
                    mobileLeft={-40}
                    priority
                />
                <Card position="relative" style={{ overflow: "hidden" }}>
                    <BgImage
                        ds="block"
                        src={BgImage6}
                        maxWidth={500}
                        bottom={-6}
                        right={-28}
                        mobileRight={-46}
                        mobileBottom={-12}
                        loading="lazy"
                    />

                    <FlexContainer
                        alignItems="center"
                        justifyContent="center"
                        w="100%"
                        gap="30px"
                    >
                        <FlexColumn gap="36px" w="100%">
                            <Text
                                weight={TEXT_WEIGHTS.medium}
                                size={TEXT_SIZES.medium.l}
                                color={COLORS.textPrimary}
                            >
                                {data?.servicesTitle}
                            </Text>
                            <FlexColumn gap="20px">
                                {data?.services &&
                                    data.services.map(
                                        (
                                            item: ServicesInterface,
                                            index: number,
                                        ) => (
                                            <Text key={index}>
                                                • {item.text}
                                            </Text>
                                        ),
                                    )}
                            </FlexColumn>
                        </FlexColumn>
                        <FlexColumn
                            w="100%"
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
                                <Img src={monitorIcon.src} />
                            </FitToViewport>
                        </FlexColumn>
                    </FlexContainer>
                </Card>
            </FlexColumn>
            <FlexColumn w="100%" h="100%" position="relative" p="250px 0">
                <BgImage
                    src={BgImage2}
                    maxWidth={600}
                    top={10}
                    right={-15}
                    mobileRight={-48}
                    mobileTop={55}
                    loading="lazy"
                />
                <BgImage
                    ds="block"
                    src={ITeamIcon}
                    maxWidth={size.width! < 800 ? 300 : 660}
                    bottom={5}
                    right={2}
                    mobileBottom={5}
                    scrollable={false}
                    loading="lazy"
                />
                <WhiteSection p="0">
                    <AdaptContainer c="center">
                        <div style={{ textAlign: "center" }}>
                            <Text
                                weight={TEXT_WEIGHTS.medium}
                                color={COLORS.textPrimary}
                                size={TEXT_SIZES.medium.l}
                                textAlign="center"
                            >
                                {data?.numbersTitle}
                            </Text>
                        </div>
                        <FlexContainer
                            w="100%"
                            justifyContent="space-between"
                            alignItems="center"
                            p="10px 0 0"
                            gap="30px"
                            ref={numbersViewRef}
                        >
                            {data?.numbers.map((item: NumbersInterface) => (
                                <CountUpNumbers
                                    key={item.id}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    text={item.text}
                                    isNumbersInView={isNumbersInView}
                                />
                            ))}
                        </FlexContainer>
                    </AdaptContainer>
                </WhiteSection>
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
                    maxWidth={1000}
                    bottom={10}
                    left={-30}
                    mobileBottom={-20}
                    mobileLeft={-55}
                    loading="lazy"
                />

                <FlexColumn
                    mw="975px"
                    h="100%"
                    w="100%"
                    zIndex="3"
                    gap="20px"
                    style={{ boxSizing: "border-box" }}
                    p="0 20px"
                >
                    <FlexColumn p="20px">
                        <GradientTitle
                            w="550px"
                            size="42px"
                            weight={TEXT_WEIGHTS.main}
                            color="272.07deg, #17092D 35.9%, #7232E0 100%"
                        >
                            {data?.processTitle}
                        </GradientTitle>
                    </FlexColumn>

                    <SwiperRange maxValue={data?.process.length - 1}>
                        {data?.process &&
                            data.process.map((item: ProcessInterface) => (
                                <SwiperSlide key={item.step}>
                                    <BenefitsSlide
                                        title={item.title}
                                        description={item.text}
                                        id={item.step}
                                    />
                                </SwiperSlide>
                            ))}
                    </SwiperRange>
                </FlexColumn>

                <FlexColumn w="100%" h="100%" position="relative" p="150px 0 0">
                    <BookingForm h={size.width! < 886 ? "340px" : "250px"} />
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
                    src={BgImage4}
                    maxWidth={850}
                    top={-25}
                    right={-20}
                    mobileRight={-50}
                    mobileTop={-30}
                    loading="lazy"
                />
                <BgImage
                    ds="block"
                    src={BgImage5}
                    maxWidth={700}
                    bottom={-50}
                    left={-10}
                    mobileLeft={-30}
                    mobileBottom={-40}
                    loading="lazy"
                />

                <Text
                    color={COLORS.textPrimary}
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.medium.xl}
                >
                    {data?.appsTitle}
                </Text>

                {data?.apps && <AppsImplement apps={data.apps} />}
            </FlexColumn>
        </FlexColumn>
    );
};
export default memo(Outsourcing);
