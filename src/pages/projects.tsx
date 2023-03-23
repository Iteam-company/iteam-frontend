import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Slide } from "@/anatomic/molecules/ProjectSlide";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import { ProjectsInterface } from "./api/projects";
import client from "@/axios";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { useInView } from "framer-motion";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { VerticalSwiperElem } from "@/anatomic/molecules/VerticalSwiper";
import { Divider, Title } from "@/lib/pageStyles/projectStyles";
import { SmoothSlider } from "@/anatomic/organisms/SmoothSlider";

const Projects = () => {
    const [project, setProject] = useState<ProjectsInterface[]>([]);

    const getProject = useCallback(async () => {
        try {
            const { data } = await client.get("/api/projects");
            setProject(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getProject();
    }, []);

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const isFirstInView: boolean = useInView(firstRef);
    const isSecondInView = useInView(secondRef);

    const swipeHandler = (e: Swiper) => {
        if (isFirstInView && isSecondInView) {
            e.allowSlideNext = true;
        } else {
            window.scrollTo({
                top: 550,
                left: 0,
                behavior: "smooth",
            });
        }
    };

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
            {/* <Divider ref={firstRef} />
            <VerticalSwiperElem
                swipeHandler={swipeHandler}
                allowSlideNext={false}
            >
                {project.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        style={{
                            width: "100vw",
                        }}
                    >
                        <Slide
                            title={item.title}
                            description={item.description}
                            location={item.location}
                            budget={item.budget}
                            tech={item.tech}
                            img={item.img}
                            color={item.color}
                            id={item.id}
                        />
                    </SwiperSlide>
                ))}
            </VerticalSwiperElem>
            <Divider ref={secondRef} /> */}

            <div style={{ height: "calc(500vh)" }}>
                <SmoothSlider />
            </div>
            {/* <div style={{ height: "200px" }}>hdhfjhdksfgv</div> */}
        </FlexColumn>
    );
};

export default Projects;
