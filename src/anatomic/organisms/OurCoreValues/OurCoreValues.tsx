import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { SideChevron } from "@/anatomic/atoms/SideChevron";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import {
    Container,
    Desktop,
    GradientText,
    Divider,
    Dot,
    Mobile,
} from "./styled";
import Image from "next/image";
import { getStrapiImage } from "@/hooks/useStrapiContentData";

interface Props {
    coreValue: CoreValueInterface;
}
interface CoreValueInterface {
    image: any;
    title: string;
    value: ValueInterface[];
    mobileImage?: any;
}
interface ValueInterface {
    id: string;
    title: string;
    text: string;
    step: string;
    mobileImage?: any;
}

const iTeamLogo = [
    {
        letter: 'i'
    },
    {
        letter: 'T'
    },
    {
        letter: 'e'
    },
    {
        letter: 'a'
    },
    {
        letter: 'm'
    },

]

export const OurCoreValues: FC<Props> = ({ coreValue }) => {
    if (!coreValue) return null;

    const { url, width, height } = coreValue?.image.data.attributes;

    return (
        <Container
            p="110px 20px"
            w="100%"
            h="100%"
            bg="linear-gradient(180deg, rgba(48, 25, 115, 0.46) 7.84%, rgba(70, 22, 205, 0) 45.98%);"
            alignItems="center"
            gap="30px"
        >
            <Text
                size={TEXT_SIZES.medium.xl}
                weight={TEXT_WEIGHTS.medium}
                color={COLORS.textPrimary}
            >
                {coreValue.title}
            </Text>
            <Desktop w="100%" alignItems="center" gap="32px" mw="1200px">
                <Image
                    src={getStrapiImage(url)}
                    width={width}
                    height={height}
                    alt="iteam"
                    style={{
                        height: "auto",
                        width: "90%",
                        paddingTop: "40px",
                    }}
                />

                <FlexRow
                    w="100%"
                    p="0 20px"
                    style={{ boxSizing: "border-box" }}
                >
                    {coreValue.value.map((item: ValueInterface, i: number) => (
                        <FlexColumn
                            key={item.id}
                            justifyContent="center"
                            alignItems="center"
                            w="50%"
                            gap="20px"
                        >
                            <FlexColumn
                                w="100%"
                                position="relative"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Divider height="1px" />
                                <Dot />
                            </FlexColumn>

                            <FlexColumn
                                p="30px 0 0"
                                w="80%"
                                gap="10px"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text
                                    size={TEXT_SIZES.medium.s}
                                    color={COLORS.textPrimary}
                                    weight={TEXT_WEIGHTS.medium}
                                    textAlign="center"
                                >
                                    {item.title}
                                </Text>
                                <Divider height="2px" />
                                <Text
                                    size={TEXT_SIZES.small.l}
                                    color={COLORS.textPrimary}
                                >
                                    {item.text}
                                </Text>
                            </FlexColumn>
                        </FlexColumn>
                    ))}
                </FlexRow>
            </Desktop>

            <Mobile w="100%">
                <FlexColumn
                    w="100%"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    style={{ boxSizing: "border-box", overflow: "hidden" }}
                >
                    {coreValue.value.map((item: ValueInterface, i: number) => {
                        return (
                            <FlexRow
                            key={item.id}
                            justifyContent="space-evenly"
                            alignItems="center"
                            position="relative"
                            h="100%"
                            w="100%"
                        >
                            <FlexColumn
                                w="60%"
                                justifyContent="center"
                                alignItems="center"
                            >   
                            {/* <Image
                                src={getStrapiImage(url)}
                                width={width}
                                height={height}
                                alt="iteam"
                                style={{
                                    height: "auto",
                                    width: "100%",
                                    paddingLeft: '50%'
                                }}
                            /> */}
                                <GradientText
                                    weight={TEXT_WEIGHTS.medium}
                                    size="50px"
                                    lineHeight="50px"
                                    textAlign="center"
                                    color="180deg, #250743 0%, rgba(95, 59, 199, 0.46) 63.54%, rgba(95, 59, 199, 0.23) 97.92%"
                                >
                                    {iTeamLogo[i].letter}
                                </GradientText>
                            </FlexColumn>

                            <FlexColumn
                                h="100%"
                                w="50%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Divider height="150px" width="2px" />
                                <Dot />
                            </FlexColumn>

                            <FlexColumn
                                gap="10px"
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                            >

                                <Text
                                    size={TEXT_SIZES.medium.s}
                                    color={COLORS.textPrimary}
                                    weight={TEXT_WEIGHTS.medium}
                                    mobileSize={TEXT_SIZES.small.l}
                                >
                                    {item.title}
                                </Text>
                                
                                <SideChevron>
                                    <Text
                                        size={TEXT_SIZES.small.l}
                                        color={COLORS.textPrimary}
                                    >
                                        {item.text}
                                    </Text>
                                </SideChevron>
                            </FlexColumn>
                        </FlexRow>

                        )
                     
})}
                </FlexColumn>
            </Mobile>
        </Container>
    );
};
