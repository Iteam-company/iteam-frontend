import React, { useEffect, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import Head from "next/head";
import { COLORS } from "@/lib/theme/color";
import { SmoothSlider } from "@/anatomic/organisms/SmoothSlider";
import { Slide } from "@/anatomic/molecules/ProjectSlide";
import { SlideInterface } from "@/anatomic/organisms/SmoothSlider/SmoothSlider";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { BgImage } from "@/anatomic/atoms/BgImage";
import BgImage1 from "@/assets/bgImage/projects/bg.svg";
import { Pages, useStrapiData } from "@/hooks/useStrapiData";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
import useLogoAnimation from "@/hooks/useLogoAnimation";

export interface ProjectsInterface {
    id?: number;
    title: string;
    description: string;
    location: string;
    budget: string;
    technology: Technologies[];
    color: string;
    projectImg: any;
    img?: any;
    index: number;
}

export interface Technologies {
    icon: "react" | "ts" | "js" | "angular";
    name: string;
    techIcon: any;
}

const Projects = () => {
    const [slides, setSlides] = useState<SlideInterface[]>([]);
    const [data, isLoading] = useStrapiData(Pages.portfolio);
    const size = useWindowSize();
    console.log(data);

    useEffect(() => {
        data &&
            setSlides(
                data.projects.map((item: ProjectsInterface, index: number) => ({
                    content: (
                        <Slide
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            location={item.location}
                            budget={item.budget}
                            technology={item.technology}
                            color={item.color}
                            projectImg={item.projectImg}
                            index={index}
                        />
                    ),
                    image: getStrapiImage(item.projectImg.data.attributes.url),
                })),
            );
    }, [data?.projects]);
    const showLogo = useLogoAnimation(data);

    if (!data) {
        if (showLogo) {
            return <LogoAnimation />;
        }
    }

    return (
        <>
            <Head>
                <title>iTeam</title>
            </Head>

            <FlexColumn
                w="100%"
                justifyContent="center"
                alignItems="center"
                style={{
                    paddingBottom: size.width! < 800 ? "0" : "100px",
                    overflow: "hidden",
                }}
            >
                <FlexColumn
                    h={size.width! > 992 ? "calc(100vh - 100px)" : "300px"}
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                    p="20px 40px"
                    position="relative"
                    style={{ boxSizing: "border-box" }}
                >
                    <Desktop w="100%">
                        <FlexColumn
                            w="100%"
                            justifyContent="center"
                            position="relative"
                        >
                            <FlexColumn
                                mw="700px"
                                justifyContent="center"
                                alignItems="start"
                                position="absolute"
                                style={{ left: "28%" }}
                            >
                                <Text
                                    size={TEXT_SIZES.small.s}
                                    letterSpacing={LETTER_SPACING.s}
                                    weight={TEXT_WEIGHTS.medium}
                                    type={TEXT_TYPES.title}
                                    color={COLORS.warmGray}
                                >
                                    OUR WORK
                                </Text>
                                <Text
                                    size={TEXT_SIZES.large.l}
                                    color={COLORS.dark}
                                    weight={TEXT_WEIGHTS.medium}
                                >
                                    Creating digital products your clients fall
                                    in love with.
                                </Text>
                            </FlexColumn>
                        </FlexColumn>
                    </Desktop>
                    <Mobile w="100%">
                        <FlexColumn
                            mw="700px"
                            justifyContent="center"
                            alignItems="start"
                        >
                            <Text
                                size={TEXT_SIZES.small.s}
                                letterSpacing={LETTER_SPACING.s}
                                weight={TEXT_WEIGHTS.medium}
                                type={TEXT_TYPES.title}
                                color={COLORS.warmGray}
                            >
                                OUR WORK
                            </Text>
                            <Text
                                size={TEXT_SIZES.medium.xl}
                                color={COLORS.dark}
                                weight={TEXT_WEIGHTS.medium}
                                mobileSize={TEXT_SIZES.medium.s}
                            >
                                Creating digital products your clients fall in
                                love with.
                            </Text>
                        </FlexColumn>
                    </Mobile>

                    <BgImage
                        ds="block"
                        src={BgImage1}
                        maxWidth={710}
                        top={-15}
                        left={size.width! < 1700 ? -20 : -15}
                        priority
                        mobileTop={75}
                        mobileLeft={-40}
                    />
                </FlexColumn>

                {slides.length && (
                    <>
                        <Desktop>
                            <SmoothSlider
                                slides={slides}
                                slidePosition="space-between"
                            />
                        </Desktop>
                        <Mobile>
                            <AdaptContainer>
                                <SmoothSlider
                                    height={
                                        size.height! < 701 ? "80vh" : "65vh"
                                    }
                                    slidePosition="space-between"
                                    slides={slides}
                                    navigation={false}
                                />
                            </AdaptContainer>
                        </Mobile>
                    </>
                )}
            </FlexColumn>
        </>
    );
};

export default Projects;
