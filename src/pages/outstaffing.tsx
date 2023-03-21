import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { useCallback, useEffect, useState } from "react";
import BgImage1 from "@/assets/bgImage/outstaffing/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/outstaffing/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/outstaffing/bgImage3.svg";
import BgImage4 from "@/assets/bgImage/outstaffing/bgImage4.svg";
import ITeamIcon from "@/assets/bgImage/iTeam.svg";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { SwiperSlide } from "swiper/react";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { WhiteSection } from "@/anatomic/atoms/WhiteSection";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { ApproachSlide } from "@/anatomic/molecules/ApproachSlide";
import { BenefitsSlide } from "@/anatomic/molecules/BenefitsSlide";
import client from "@/axios";
import { ApproachInterface, BenefitsInterface } from "./api/outstaffing";
import { Card } from "@/lib/pageStyles/outstaffing";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { BgImage } from "@/anatomic/atoms/BgImage/";

const Outstaffing = () => {
    const [approach, setApproach] = useState<ApproachInterface[]>([]);
    const [benefits, setBenefits] = useState<BenefitsInterface[]>([]);

    const getData = useCallback(async () => {
        try {
            const { data } = await client.get("/api/outstaffing");
            setApproach(data.approach);
            setBenefits(data.benefits);
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
                    color={COLORS.textThird}
                    weight={TEXT_WEIGHTS.medium}
                    size="34px"
                >
                    Out-staffing with iTeam.
                </Text>
                <Text
                    size={TEXT_SIZES.s}
                    color={COLORS.textMinor}
                    lineHeight="27px"
                >
                    Mobil-unity out-staffing solutions in Ukraine provide
                    clients with access to a vast pool of talent at a cost
                    nearly 60% cheaper than Western markets. You get a team
                    built to your specification and for a fraction of the cost.
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
                <BgImage src={BgImage1.src} top={0} left={-300} />
                <FlexColumn w="100%">
                    <HorizontalSwiperElem
                        minHeight="670px"
                        width="100%"
                        maxWidth="975px"
                    >
                        {approach &&
                            approach.map((item: ApproachInterface) => (
                                <SwiperSlide
                                    key={item.step}
                                    style={{
                                        boxSizing: "border-box",
                                        borderRadius: "16px",
                                        minHeight: "570px",
                                        background: "#FFFFFF",
                                        boxShadow:
                                            "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                    }}
                                >
                                    <ApproachSlide
                                        step={item.step}
                                        title={item.title}
                                        text={item.text}
                                        progress={item.progress}
                                        color={item.color}
                                    />
                                </SwiperSlide>
                            ))}
                    </HorizontalSwiperElem>
                </FlexColumn>
            </FlexColumn>

            <FlexColumn w="100%" h="100%" position="relative" p="250px 0">
                <BgImage src={BgImage2.src} top={0} right={-300} />
                <BgImage
                    src={ITeamIcon.src}
                    bottom={0}
                    right={0}
                    scrollable={false}
                />
                <WhiteSection>
                    <Text
                        color={COLORS.textThird}
                        weight={TEXT_WEIGHTS.medium}
                        size="32px"
                    >
                        Book an initial 30-min call
                    </Text>
                    <Text size={TEXT_SIZES.xxxs} color={COLORS.textMinor}>
                        Let's discuss your needs. And we will tell you how we
                        can help. Without obligations.
                    </Text>
                    <BookingForm />
                </WhiteSection>
            </FlexColumn>

            <FlexColumn
                w="100%"
                h="100%"
                position="relative"
                alignItems="center"
            >
                <BgImage src={BgImage3.src} top={50} left={-700} />

                <FlexColumn
                    mw="975px"
                    h="100%"
                    w="100%"
                    zIndex="3"
                    gap="100px"
                    style={{ boxSizing: "border-box" }}
                    p="0 20px"
                >
                    <GradientTitle
                        w="550px"
                        size="34px"
                        weight={TEXT_WEIGHTS.main}
                        color="272.07deg, #17092D 35.9%, #7232E0 100%"
                    >
                        Benefits Of Having Dedicated Development Team
                    </GradientTitle>

                    <FlexColumn w="100%">
                        <HorizontalSwiperElem
                            minHeight="500px"
                            width="100%"
                            maxWidth="975px"
                        >
                            {benefits.map((item: BenefitsInterface) => (
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
                    </FlexColumn>
                </FlexColumn>

                <FlexColumn w="100%" h="100%" position="relative" p="50px 0 0">
                    <WhiteSection>
                        <Text
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.medium}
                            size="32px"
                        >
                            How We Helped Our Clients
                        </Text>
                        <Button
                            href="/projects"
                            gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                            variant={BUTTON_VARIANTS.gradient_link}
                            label={
                                <Text
                                    color={COLORS.black}
                                    weight={TEXT_WEIGHTS.main}
                                    size={TEXT_SIZES.xs}
                                >
                                    Visit Portfolio
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
                <BgImage src={BgImage4.src} top={-300} right={-500} />
                <Text
                    color={COLORS.textThird}
                    weight={TEXT_WEIGHTS.medium}
                    size="32px"
                >
                    Check out our dedicated teams
                </Text>

                <FlexColumn
                    w="100%"
                    h="100%"
                    position="relative"
                    alignItems="center"
                >
                    <Card gap="15px" w="100%">
                        <Text
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.l}
                        >
                            - Angular Front End Developers
                        </Text>
                        <Text
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.l}
                        >
                            - React Front End Developers
                        </Text>
                        <Text
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.l}
                        >
                            - MERN Developers
                        </Text>

                        <FlexColumn alignItems="center" w="100%">
                            <Button
                                href="/projects"
                                gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                variant={BUTTON_VARIANTS.gradient_link}
                                label={
                                    <Text
                                        color={COLORS.black}
                                        weight={TEXT_WEIGHTS.main}
                                        size={TEXT_SIZES.xs}
                                    >
                                        Visit Team
                                    </Text>
                                }
                            />
                        </FlexColumn>
                    </Card>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
    );
};
export default Outstaffing;
