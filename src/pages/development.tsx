import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import Head from "next/head";
import { COLORS } from "@/lib/theme/color";
import Bg from "../assets/bgImage/development/development.webp";
import React, { memo, useEffect } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import BgImage1 from "@/assets/bgImage/development/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/development/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/development/bgImage3.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { DevelopmentSwiper } from "@/anatomic/organisms/DevelopmentSwiper";
import { Pages } from "@/hooks/useStrapiData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { fetchDataPage } from "@/utils/fetchDataPage";
import { DevelopmentTitle } from "@/anatomic/organisms/DevelopmentTitle";
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
const Development = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    if (!data) {
        return null;
    }
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
                    priority={true}
                    imageUrl={Bg.src}
                />
                <FlexColumn
                    justifyContent="center"
                    w="60%"
                    alignItems="center"
                    p="100px 0 120px"
                    gap="30px"
                >
                    <DevelopmentTitle
                        title={data?.main.title}
                        description={data?.main.description}
                    />
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
                        mobileRight={-70}
                        mobileBottom={25}
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

export const getServerSideProps: GetServerSideProps<{
    data: any;
}> = async () => {
    const data = await fetchDataPage<any>(Pages.development);

    return { props: { data } };
};
export default memo(Development);
