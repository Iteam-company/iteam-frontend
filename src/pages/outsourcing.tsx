import { FlexColumn } from "@/anatomic/atoms/Flex";
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
import { Card, FlexContainer, Img } from "@/lib/pageStyles/outstaffing";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import monitorIcon from "@/assets/bgImage/outsourcing/monitor.svg";
import { BgImage } from "@/anatomic/atoms/BgImage/";
import { BenefitsInterface } from "./api/outstaffing";
import { BenefitsSlide } from "@/anatomic/molecules/BenefitsSlide";
import { SwiperSlide } from "swiper/react";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import {
    AppsInterface,
    NumbersInterface,
    ProcessInterface,
} from "./api/outsourcing";
import client from "@/axios";
import { useInView } from "framer-motion";
import { FitToViewport } from "react-fit-to-viewport";
import { SwiperRange } from "@/anatomic/organisms/SwiperRange";
import { AppsImplement } from "@/anatomic/organisms/AppsImplement";
import { CountUpNumbers } from "@/anatomic/molecules/CountUpNumbers";

const Outsourcing = () => {
    const [numbers, setNumbers] = useState<NumbersInterface[]>([]);
    const [process, setProcess] = useState<ProcessInterface[]>([]);
    const [services, setServices] = useState<string[]>([]);
    const [apps, setApps] = useState<AppsInterface[]>([]);

    const numbersViewRef = useRef(null);
    const isNumbersInView = useInView(numbersViewRef);

    const getData = useCallback(async () => {
        try {
            const { data } = await client.get("/api/outsourcing");
            setNumbers(data.numbers);
            setProcess(data.process);
            setServices(data.services);
            setApps(data.apps);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

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
                >
                    Outsourcing with iTeam.
                </Text>
                <Text
                    size={TEXT_SIZES.small.xl}
                    color={COLORS.textThird}
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
                <Card>
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
                                Software Development Services We Provide
                            </Text>
                            <FlexColumn gap="20px">
                                {services &&
                                    services.map((item, index) => (
                                        <Text key={index}> • {item}</Text>
                                    ))}
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
                        color={COLORS.textPrimary}
                        size={TEXT_SIZES.medium.l}
                        textAlign="center"
                    >
                        Why Businesses Trust Us
                    </Text>
                    <FlexContainer
                        w="60%"
                        justifyContent="space-between"
                        alignItems="center"
                        p="10px 0 0"
                        gap="30px"
                        ref={numbersViewRef}
                    >
                        {numbers &&
                            numbers.map((item) => (
                                <CountUpNumbers
                                    key={item.id}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    text={item.text}
                                    isNumbersInView={isNumbersInView}
                                />
                            ))}
                    </FlexContainer>
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
                    <SwiperRange maxValue={process.length - 1}>
                        {process &&
                            process.map((item: BenefitsInterface) => (
                                <SwiperSlide
                                    key={item.id}
                                    style={{
                                        borderRadius: "16px",
                                        minHeight: "400px",
                                        background: COLORS.white,
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
                    </SwiperRange>
                </FlexColumn>

                <FlexColumn w="100%" h="100%" position="relative" p="150px 0 0">
                    <WhiteSection>
                        <Text
                            color={COLORS.textPrimary}
                            weight={TEXT_WEIGHTS.medium}
                            size={TEXT_SIZES.medium.xl}
                        >
                            Book an initial 30-min call
                        </Text>
                        <Text
                            size={TEXT_SIZES.small.s}
                            color={COLORS.textThird}
                        >
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
                    color={COLORS.textPrimary}
                    weight={TEXT_WEIGHTS.medium}
                    size={TEXT_SIZES.medium.xl}
                >
                    What We Can Implement
                </Text>

                <AppsImplement apps={apps} />
            </FlexColumn>
        </FlexColumn>
    );
};
export default Outsourcing;
