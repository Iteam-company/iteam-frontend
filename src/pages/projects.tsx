import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { ProjectsInterface } from "./api/projects";
import client from "@/axios";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { Title } from "@/lib/pageStyles/projectStyles";
import { SmoothSlider } from "@/anatomic/organisms/SmoothSlider";
import { Slide } from "@/anatomic/molecules/ProjectSlide";

const Projects = () => {
    const [slides, setSlides] = useState<ReactNode[]>([]);

    const getProject = useCallback(async () => {
        try {
            const { data } = await client.get("/api/projects");
            setSlides(
                data.map((item: ProjectsInterface) => (
                    <Slide
                        title={item.title}
                        description={item.description}
                        location={item.location}
                        budget={item.budget}
                        tech={item.tech}
                        color={item.color}
                        img={item.img}
                    />
                )),
            );
        } catch (err) {
            console.log(err);
        }
    }, []);

    console.log(slides);

    useEffect(() => {
        getProject();
    }, []);

    return (
        <FlexColumn
            mw="100%"
            justifyContent="center"
            alignItems="center"
            style={{
                paddingBottom: "100px",
                overflow: "hidden",
            }}
        >
            <Adaptive
                h="500px"
                justifyContent="start"
                alignItems="center"
                p="20px 50px"
            >
                <FlexColumn justifyContent="center" alignItems="start">
                    <Text
                        size={TEXT_SIZES.xxxs}
                        letterSpacing={LETTER_SPACING.s}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        OUR WORK
                    </Text>
                    <Title
                        size={TEXT_SIZES.xxxl}
                        color={COLORS.black}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        Creating digital products your clients fall in love
                        with.
                    </Title>
                </FlexColumn>
            </Adaptive>

            {slides.length && <SmoothSlider slides={slides} />}
        </FlexColumn>
    );
};

export default Projects;
