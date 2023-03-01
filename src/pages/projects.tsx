import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Slide } from "@/anatomic/molecules/ProjectSlide";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import Swiper, { A11y, Mousewheel, Navigation, Pagination } from "swiper";
import { ProjectsInterface } from "./api/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import styled from "styled-components";
import client from "@/axios";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { useInView } from "framer-motion";

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
        <Container
            mw="100%"
            justifyContent="center"
            alignItems="center"
            style={{
                paddingBottom: "100px",
            }}
        >
            <FlexColumn
                h="500px"
                justifyContent="center"
                alignItems="start"
                p="0 50px"
                style={{
                    maxWidth: "1000px",
                }}
            >
                <Text
                    size={TEXT_SIZES.xxxs}
                    letterSpacing={LETTER_SPACING.s}
                    weight={TEXT_WEIGHTS.medium}
                >
                    OUR WORK
                </Text>
                <Text
                    size={TEXT_SIZES.xxxl}
                    color={COLORS.black}
                    weight={TEXT_WEIGHTS.medium}
                >
                    Creating digital products your clients fall in love with.
                </Text>
            </FlexColumn>

            <Divider ref={firstRef} />
            <StyledSwiper
                onTouchStart={(e) => swipeHandler(e)}
                onScroll={(e) => swipeHandler(e)}
                onTap={(e) => swipeHandler(e)}
                onTouchMove={(e) => swipeHandler(e)}
                style={{
                    height: "calc(81vh)",
                    width: "100vw",
                    padding: "5px 0",
                }}
                effect="cards"
                spaceBetween={50}
                allowSlideNext={false}
                direction="vertical"
                modules={[Mousewheel, Navigation, Pagination, A11y]}
                pagination={{ clickable: true }}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
            >
                {project &&
                    project.map((item, index) => (
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
                            />
                        </SwiperSlide>
                    ))}
            </StyledSwiper>
            <Divider ref={secondRef} />
        </Container>
    );
};

export default Projects;

const StyledSwiper = styled(SwiperComponent)`
    .swiper-pagination-vertical {
        left: 6%;
        right: auto;
        @media all and (max-width: 1100px) {
            left: 8%;
        }
        @media all and (max-width: 899px) {
            left: 5vw;
        }

        .swiper-pagination-bullet {
            border: 2px solid black;
            background-color: transparent;
            opacity: 1;
            margin: 15px 0;
        }

        .swiper-pagination-bullet-active {
            background-color: black;
        }
    }
`;
const Container = styled(FlexColumn)`
    overflow: hidden;
`;
const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: transparent;
`;
