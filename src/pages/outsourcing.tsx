import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import BgImage1 from "@/assets/bgImage/outsourcing/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/outsourcing/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/outsourcing/bgImage3.svg";
import BgImage4 from "@/assets/bgImage/outsourcing/bgImage4.svg";
import ITeamIcon from "@/assets/bgImage/iTeam.svg";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { WhiteSection } from "@/anatomic/atoms/WhiteSection";
import { Card } from "@/lib/pageStyles/outstaffing";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import monitorIcon from "@/assets/bgImage/outsourcing/monitor.svg";
import { BgImage } from "@/anatomic/atoms/BgImage/";

const SERVICES = [
    "Custom software development",
    "Mobile app development",
    "Web development",
    "Quality assurance and testing",
    "Maintenance and support",
];

const NUMBERS = [
    { title: "6", text: "Years of experience in IT" },
    { title: "30%", text: "Shorter time-to-market delivery" },
    { title: "50+", text: "Successfully completed projects" },
];

const Outstaffing = () => {
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
                                {SERVICES.map((item) => (
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
                <BgImage src={ITeamIcon.src} bottom={0} right={0} />
                <WhiteSection>
                    <FlexRow w="60%" justifyContent="space-between">
                        {NUMBERS.map((item) => (
                            <FlexColumn justifyContent="center">
                                <Text
                                    weight={TEXT_WEIGHTS.medium}
                                    size={TEXT_SIZES.xxl}
                                    color={COLORS.textThird}
                                >
                                    {item.title}
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
                <BgImage src={BgImage3.src} top={50} left={0} />

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
                style={{ boxSizing: "border-box" }}
                gap="50px"
            >
                <BgImage src={BgImage4.src} top={-360} right={0} />
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
                    <Card gap="15px" w="100%" p="40px 50px 75px">
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
