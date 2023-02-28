import React, {
    createContext,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
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
import { Text, TEXT_SIZES } from "@/anatomic/atoms/Text";
import useScrollUp from "@/hooks/useScrollUp";
import { motion, useInView } from "framer-motion";

interface DataInterface {
    currentSlide: number;
    isInView: boolean;
}

interface ContextDataInterface {
    data: DataInterface;
    setData: React.Dispatch<DataInterface> | null;
}

const initialData = {
    currentSlide: 0,
    isInView: false,
};

export const SliderDataContext = createContext<ContextDataInterface>({
    data: initialData,
    setData: null,
});

const Projects = () => {
    const [project, setProject] = useState<ProjectsInterface[]>([]);
    const [contextData, setContextData] = useState(initialData);
    const [swiper, setSwiper] = useState<Swiper | null>(null);
    const [scrollFromTop, setScrollFromTop] = useState(false);

    const { onScrollTop, scroll } = useScrollUp({ useCase: "button" });

    const getProject = useCallback(async () => {
        try {
            const { data } = await client.get("/api/projects");
            setProject(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        // const scrollEvent = () => {
        //     const { currentSlide, isInView } = contextData;
        //     if (currentSlide === 0 && !isInView && scroll.y === 0) {
        //         onScrollTop("auto", window.innerHeight - 330);
        //         console.log("SCROLL", currentSlide === 0 && !isInView);
        //     }
        getProject();
        // };
        // document.addEventListener("scroll", scrollEvent);
        // return () => {
        //     document.removeEventListener("scroll", scrollEvent);
        // };
    }, []);

    useEffect(() => {
        if (swiper) {
            setContextData((prev) => ({
                ...prev,
                currentSlide: swiper.activeIndex,
            }));
        }
    }, [swiper]);

    return (
        <FlexColumn
            mw="100%"
            justifyContent="center"
            alignItems="center"
            style={{ overflow: "hidden" }}
        >
            <Text size={TEXT_SIZES.xxxl}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                iusto aperiam impedit necessitatibus, sunt qui labore
                consectetur, facere explicabo cumque officia laudantium
                distinctio in repellat fuga nihil non accusamus ducimus!
            </Text>
            <SliderDataContext.Provider
                value={{ data: contextData, setData: setContextData }}
            >
                <StyledSwiper
                    // onSwiper={setSwiper as any}
                    style={{
                        height: "calc(100vh - 100px)",
                        width: "100vw",
                    }}
                    edgeSwipeDetection={true}
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
            </SliderDataContext.Provider>
        </FlexColumn>
    );
};

export default Projects;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: red;
`;

const StyledSwiper = styled(SwiperComponent)`
    .swiper-pagination-vertical {
        left: 7%;
        right: auto;

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
