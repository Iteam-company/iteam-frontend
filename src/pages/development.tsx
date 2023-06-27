import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import Head from "next/head";
import { COLORS } from "@/lib/theme/color";
import React, { memo } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import BgImage1 from "@/assets/bgImage/development/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/development/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/development/bgImage3.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { DevelopmentSwiper } from "@/anatomic/organisms/DevelopmentSwiper";
import { useStrapiData, Pages } from "@/hooks/useStrapiData";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
export interface DevelopmentInterface {
    title: string;
    info: InfoInterface[];
}
export interface InfoInterface {
    title: string;
    description: string;
    icon: any;
    href: string;
}
const Development = () => {
    const [data, isLoading] = useStrapiData(Pages.development);

    if (!data) return null;
    return (
        <>
            <Head>
                <title>iTeam</title>
            </Head>
            <FlexColumn
                h="100%"
                w="100%"
                p="0 0 200px"
                position="relative"
                justifyContent="center"
                alignItems="center"
                style={{ overflow: "hidden" }}
            >
                <BgImage
                    ds="block"
                    src={BgImage1}
                    maxWidth={500}
                    top={1}
                    left={-16}
                    mobileLeft={-55}
                    mobileTop={6}
                    priority
                />
                <FlexColumn
                    justifyContent="center"
                    w="60%"
                    alignItems="center"
                    p="100px 0 120px"
                    gap="30px"
                >
                    <Text
                        textAlign="center"
                        color={COLORS.textPrimary}
                        size={TEXT_SIZES.large.xs}
                        weight={TEXT_WEIGHTS.medium}
                        mobileSize={TEXT_SIZES.small.xl}
                        type={TEXT_TYPES.title}
                    >
                        {data.main.title}
                    </Text>

                    <Text
                        textAlign="center"
                        color={COLORS.textThird}
                        size={TEXT_SIZES.medium.xs}
                        letterSpacing={LETTER_SPACING.s}
                        mobileSize={TEXT_SIZES.small.l}
                    >
                        {data.main.description}
                    </Text>
                </FlexColumn>
                <FlexColumn
                    w="100%"
                    position="relative"
                    justifyContent="center"
                    alignItems="center"
                >
                    <BgImage
                        ds="block"
                        src={BgImage2}
                        maxWidth={550}
                        right={-20}
                        bottom={20}
                        mobileRight={-50}
                        mobileBottom={20}
                        loading="lazy"
                    />
                    <BgImage
                        ds="block"
                        src={BgImage3}
                        maxWidth={1450}
                        left={-30}
                        top={88}
                        mobileTop={100}
                        mobileLeft={-25}
                        loading="lazy"
                    />
                    {data?.development.map(
                        (item: DevelopmentInterface, index: number) => (
                            <FlexColumn
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                                p="40px 0 80px"
                                gap="50px"
                                key={index}
                                zIndex="2"
                                bg={index == 1 ? COLORS.white : ""}
                            >
                                <Text
                                    textAlign="center"
                                    color={COLORS.textPrimary}
                                    size={TEXT_SIZES.large.xs}
                                    mobileSize={TEXT_SIZES.small.xl}
                                >
                                    {item.title}
                                </Text>
                                <DevelopmentSwiper technologies={item.info} />
                            </FlexColumn>
                        ),
                    )}
                </FlexColumn>
            </FlexColumn>
        </>
    );
};

export default memo(Development);
