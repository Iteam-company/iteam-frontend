import React, { useCallback, useEffect, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { ProjectsInterface } from "./api/projects";
import client from "@/axios";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { SmoothSlider } from "@/anatomic/organisms/SmoothSlider";
import { Slide } from "@/anatomic/molecules/ProjectSlide";
import { SlideInterface } from "@/anatomic/organisms/SmoothSlider/SmoothSlider";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { BgImage } from "@/anatomic/atoms/BgImage";
import BgImage1 from "@/assets/bgImage/projects/bgImage1.svg";

const Projects = () => {
    const [slides, setSlides] = useState<SlideInterface[]>([]);

    const getProject = useCallback(async () => {
        try {
            const { data } = await client.get("/api/projects");
            setSlides(
                data.map((item: ProjectsInterface) => ({
                    content: (
                        <Slide
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            location={item.location}
                            budget={item.budget}
                            tech={item.tech}
                            color={item.color}
                            img={item.img}
                        />
                    ),
                    image: item.img,
                })),
            );
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getProject();
    }, []);

    return (
        <FlexColumn
            w="100%"
            justifyContent="center"
            alignItems="center"
            position="relative"
            style={{
                paddingBottom: "100px",
                overflow: "hidden",
            }}
        >
            <FlexColumn
                h="calc(100vh - 100px)"
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
                                Creating digital products your clients fall in
                                love with.
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
                            Creating digital products your clients fall in love
                            with.
                        </Text>
                    </FlexColumn>
                </Mobile>

                <BgImage
                    src={BgImage1}
                    maxWidth={710}
                    top={-15}
                    right={70}
                    priority
                    mobileTop={70}
                    mobileLeft={-20}
                />
            </FlexColumn>

            {slides.length && (
                <>
                    <Desktop>
                        <SmoothSlider slides={slides} />
                    </Desktop>
                    <Mobile>
                        <SmoothSlider
                            slides={slides}
                            isTwoColumn={false}
                            navigation={false}
                        />
                    </Mobile>
                </>
            )}
        </FlexColumn>
    );
};

export default Projects;
