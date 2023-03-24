import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BgImage1 from "@/assets/bgImage/outsourcing/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/outsourcing/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/outsourcing/bgImage3.svg";
import BgImage4 from "@/assets/bgImage/outsourcing/bgImage4.svg";
import BgImage5 from "@/assets/bgImage/outsourcing/bgImage5.svg";
import ITeamIcon from "@/assets/bgImage/iTeam.svg";
import { WhiteSection } from "@/anatomic/atoms/WhiteSection";
import { Card } from "@/lib/pageStyles/outstaffing";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import monitorIcon from "@/assets/bgImage/outsourcing/monitor.svg";
import { BgImage } from "@/anatomic/atoms/BgImage/";
import { BenefitsInterface } from "./api/outstaffing";
import { BenefitsSlide } from "@/anatomic/molecules/BenefitsSlide";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { SwiperSlide } from "swiper/react";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { Input } from "@/lib/pageStyles/outsourcingStyles";
import { NumbersInterface, ProcessInterface } from "./api/outsourcing";
import client from "@/axios";
import styled from "styled-components";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const DATA = [
    {
        title: "Progressive Web App",
        step: 1,
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        title: "Single page Application",
        step: 2,
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        title: "Progressive Web Apps",
        step: 3,
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        title: "Progressive Web Apps",
        step: 4,
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];

const Outsourcing = () => {
    const [value, setValue] = useState("0");
    const swiperRef = useRef<any>(null);
    const implementSwiperRef = useRef<any>(null);

    const [numbers, setNumbers] = useState<NumbersInterface[]>([]);
    const [process, setProcess] = useState<ProcessInterface[]>([]);
    const [services, setServices] = useState<string[]>([]);

    const numbersViewRef = useRef(null);

    const isNumbersInView = useInView(numbersViewRef);

    const getData = useCallback(async () => {
        try {
            const { data } = await client.get("/api/outsourcing");
            setNumbers(data.numbers);
            setProcess(data.process);
            setServices(data.services);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    const handleSlideTo = (index: number) => {
        swiperRef.current != null &&
            swiperRef.current.swiper.slideTo(index.toString());
    };

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
                    color={COLORS.textThird}
                    weight={TEXT_WEIGHTS.medium}
                    size="34px"
                >
                    Outsourcing with iTeam.
                </Text>
                <Text
                    size={TEXT_SIZES.s}
                    color={COLORS.textMinor}
                    lineHeight="27px"
                >
                    Establish world-class agility, scalability and security in
                    your organisation.
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
                <BgImage src={BgImage1.src} top={-150} left={-300} />
                <Card p="40px 50px 75px">
                    <FlexRow alignItems="center" justifyContent="center">
                        <FlexColumn gap="36px">
                            <Text
                                weight={TEXT_WEIGHTS.medium}
                                size={TEXT_SIZES.xl}
                                color={COLORS.textThird}
                            >
                                Software Development Services We Provide
                            </Text>
                            <FlexColumn gap="20px">
                                {services &&
                                    services.map((item) => (
                                        <Text> • {item}</Text>
                                    ))}
                            </FlexColumn>
                        </FlexColumn>
                        <FlexColumn justifyContent="center" alignItems="center">
                            <img
                                src={monitorIcon.src}
                                style={{ maxWidth: "300px" }}
                            />
                        </FlexColumn>
                    </FlexRow>
                </Card>
            </FlexColumn>

            <FlexColumn w="100%" h="100%" position="relative" p="250px 0">
                <BgImage src={BgImage2.src} top={20} right={-200} />
                <BgImage
                    src={ITeamIcon.src}
                    bottom={0}
                    right={0}
                    scrollable={false}
                />
                <WhiteSection>
                    <Text
                        weight={TEXT_WEIGHTS.medium}
                        color={COLORS.textThird}
                        size={TEXT_SIZES.xl}
                    >
                        Why Businesses Trust Us
                    </Text>
                    <FlexRow
                        w="60%"
                        justifyContent="space-between"
                        p="10px 0 0"
                        ref={numbersViewRef}
                    >
                        {numbers &&
                            numbers.map((item) => (
                                <FlexColumn
                                    justifyContent="center"
                                    alignItems="center"
                                    gap="15px"
                                    key={item.id}
                                >
                                    <Text
                                        weight={TEXT_WEIGHTS.medium}
                                        size={TEXT_SIZES.xxl}
                                        color={COLORS.textThird}
                                    >
                                        {isNumbersInView && (
                                            <CountUp
                                                end={item.title}
                                                duration={3}
                                            />
                                        )}
                                        {item.subTitle}
                                    </Text>
                                    <Text
                                        weight={TEXT_WEIGHTS.main}
                                        size={TEXT_SIZES.xs}
                                        color={COLORS.textMinor}
                                    >
                                        {item.text}
                                    </Text>
                                </FlexColumn>
                            ))}
                    </FlexRow>
                </WhiteSection>
            </FlexColumn>

            <FlexColumn
                w="100%"
                h="100%"
                position="relative"
                alignItems="center"
            >
                <BgImage src={BgImage3.src} top={0} left={-800} />

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
                            Our Process
                        </GradientTitle>
                    </FlexColumn>
                    <FlexColumn
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <HorizontalSwiperElem
                            swiperRef={swiperRef}
                            minHeight="500px"
                            width="100%"
                            maxWidth="975px"
                            navigation={false}
                            onChangeSlide={() => {
                                if (swiperRef.current != null) {
                                    setValue(
                                        swiperRef.current.swiper.activeIndex.toString(),
                                    );
                                }
                            }}
                        >
                            {process &&
                                process.map((item: BenefitsInterface) => (
                                    <SwiperSlide
                                        key={item.id}
                                        style={{
                                            borderRadius: "16px",
                                            minHeight: "400px",
                                            background: "#FFFFFF",
                                            boxShadow:
                                                "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                        }}
                                    >
                                        <BenefitsSlide
                                            title={item.title}
                                            text={item.text}
                                        />
                                    </SwiperSlide>
                                ))}
                        </HorizontalSwiperElem>
                        <Input
                            type="range"
                            max={4}
                            min={0}
                            step={0.1}
                            value={value}
                            onChange={(e) => {
                                setValue(Math.ceil(+e.target.value).toString());
                                handleSlideTo(Math.ceil(+e.target.value));
                            }}
                        />
                    </FlexColumn>
                </FlexColumn>

                <FlexColumn w="100%" h="100%" position="relative" p="150px 0 0">
                    <WhiteSection>
                        <Text
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.medium}
                            size="32px"
                        >
                            Book an initial 30-min call
                        </Text>
                        <Text size={TEXT_SIZES.xxxs} color={COLORS.textMinor}>
                            Let`s discuss your needs. And we will tell you how
                            we can help. Without obligations.
                        </Text>
                        <BookingForm />
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
                <BgImage src={BgImage4.src} top={-300} right={-600} />
                <BgImage src={BgImage5.src} top={400} left={-250} />

                <Text
                    color={COLORS.textThird}
                    weight={TEXT_WEIGHTS.medium}
                    size="32px"
                >
                    What We Can Implement
                </Text>

                <FlexColumn
                    w="130vw"
                    justifyContent="center"
                    alignItems="center"
                >
                    <HorizontalSwiperElem
                        minHeight="500px"
                        width="100%"
                        maxWidth="100wv"
                        slidesPerView={3}
                        spaceBetween={60}
                        freeMode={true}
                        swiperRef={implementSwiperRef}
                    >
                        {DATA.map((item: any) => (
                            <SwiperSlide
                                key={item.id}
                                style={{
                                    borderRadius: "16px",
                                    minHeight: "300px",
                                    background: "#FFFFFF",
                                    boxShadow:
                                        "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                }}
                            >
                                <FlexColumn
                                    h="100%"
                                    gap="35px"
                                    p="40px 45px 50px"
                                    alignItems="start"
                                >
                                    <FlexRow
                                        h="100%"
                                        w="100%"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        gap="15px"
                                    >
                                        <FlexColumn
                                            h="100%"
                                            w="100%"
                                            alignItems="start"
                                            position="relative"
                                        >
                                            <Text
                                                size={TEXT_SIZES.l}
                                                color={COLORS.textThird}
                                                weight={TEXT_WEIGHTS.main}
                                                w="70%"
                                            >
                                                {item.title}
                                            </Text>
                                            <Divider />
                                        </FlexColumn>

                                        <GradientTitle
                                            size="200px"
                                            weight={TEXT_WEIGHTS.main}
                                            lineHeight="160px"
                                            color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                                        >
                                            {item.step}
                                        </GradientTitle>
                                    </FlexRow>

                                    <Text
                                        w="70%"
                                        size={TEXT_SIZES.xxs}
                                        color={COLORS.textMinor}
                                    >
                                        {item.text}
                                    </Text>
                                </FlexColumn>
                            </SwiperSlide>
                        ))}
                    </HorizontalSwiperElem>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
    );
};
export default Outsourcing;

const Divider = styled.div`
    position: absolute;
    bottom: -33px;
    width: 100%;
    height: 1px;
    background: #5a5a5a;
`;
