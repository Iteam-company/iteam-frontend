import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import client from "@/axios";
import { useRouter } from "next/router";
import { ProjectItemInterface, SolutionInterface } from "../api/project-item";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Title, StyledSwiper, Divider } from "@/lib/pageStyles/projectItem";

const Project = () => {
    const router = useRouter();
    const { id } = router.query;
    const [project, setProject] = useState<ProjectItemInterface>();

    const getProject = useCallback(
        async (id: string) => {
            try {
                const { data } = await client.get(`/api/project-item?id=${id}`);
                setProject(data);
            } catch (err) {
                console.log(err);
            }
        },
        [id],
    );

    useEffect(() => {
        if (id != undefined) {
            getProject(id as string);
        }
    }, [id]);
    console.log(project, "project");

    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            gap="40px"
            p="50px 0 50px 0"
        >
            {project && (
                <>
                    <FlexRow w="80vw" mh="80vh" alignItems="center" gap="40px">
                        <FlexColumn w="80%" gap="20px">
                            <Title
                                size={TEXT_SIZES.xxl}
                                weight={TEXT_WEIGHTS.main}
                                color={project.color}
                            >
                                {project.title}
                            </Title>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.black}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Developed responsive app, created new
                                    features.
                                </Text>
                                <Text size={TEXT_SIZES.xs}>
                                    Design and development of a Angular app for
                                    the users to deploy media content on
                                    different platforms such as Apple Music,
                                    Spotify, etc.
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.black}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Client’s request
                                </Text>
                                <Text size={TEXT_SIZES.xs}>
                                    Design and development of a Angular app for
                                    the users to deploy media content on
                                    different platforms such as Apple Music,
                                    Spotify, etc.
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="10px">
                                <Text
                                    color={COLORS.black}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Our approach
                                </Text>
                                <Text size={TEXT_SIZES.xs}>
                                    Design and development of a Angular app for
                                    the users to deploy media content on
                                    different platforms such as Apple Music,
                                    Spotify, etc.
                                </Text>
                            </FlexColumn>
                        </FlexColumn>

                        <FlexColumn w="100%">
                            <StyledSwiper
                                style={{
                                    minHeight: "60vh",
                                    width: "40vw",
                                    padding: "20px",
                                }}
                                spaceBetween={50}
                                modules={[Navigation, Pagination, A11y]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                mousewheel={true}
                            >
                                <SwiperSlide
                                    style={{
                                        background:
                                            "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "16px",
                                        minHeight: "50vh",
                                    }}
                                >
                                    1
                                </SwiperSlide>
                                <SwiperSlide
                                    style={{
                                        background:
                                            "linear-gradient(113.64deg, #F1F1F1 3.19%, rgba(197, 194, 194, 0.4) 95.85%)",
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "16px",
                                        minHeight: "50vh",
                                    }}
                                >
                                    2
                                </SwiperSlide>
                            </StyledSwiper>
                        </FlexColumn>
                    </FlexRow>
                    <FlexColumn
                        w="100%"
                        justifyContent="start"
                        alignItems="start"
                    >
                        <Text
                            size={TEXT_SIZES.l}
                            weight={TEXT_WEIGHTS.main}
                            color={COLORS.black}
                        >
                            Solution
                        </Text>
                    </FlexColumn>
                    <FlexRow justifyContent="space-between" w="100%">
                        {project.solution.map(
                            (item: SolutionInterface, index) => (
                                <FlexColumn
                                    bg={item.BgColor}
                                    style={{ borderRadius: "16px" }}
                                    w="25%"
                                    p="24px"
                                    gap="15px"
                                    key={index}
                                >
                                    <FlexRow justifyContent="center" w="100%">
                                        <Text
                                            textDecoration="underline"
                                            size={TEXT_SIZES.m}
                                            color={item.textColor}
                                        >
                                            {item.title}
                                        </Text>
                                    </FlexRow>
                                    <FlexColumn gap="8px">
                                        {item.text.map((elem, index) => (
                                            <Text
                                                key={index}
                                                color={item.textColor}
                                            >
                                                • {elem}
                                            </Text>
                                        ))}
                                    </FlexColumn>
                                </FlexColumn>
                            ),
                        )}
                    </FlexRow>
                    <FlexRow w="100%" gap="40px" p="30px 0">
                        <FlexColumn
                            w="100%"
                            justifyContent="start"
                            alignItems="start"
                            gap="20px"
                        >
                            <Text
                                size={TEXT_SIZES.l}
                                weight={TEXT_WEIGHTS.main}
                                color={COLORS.black}
                            >
                                Result
                            </Text>
                            <FlexColumn gap="20px">
                                <Text
                                    textDecoration="underline"
                                    size={TEXT_SIZES.m}
                                >
                                    {project.result.title}
                                </Text>
                                <FlexColumn gap="10px">
                                    {project.result.text.map((elem, index) => (
                                        <Text size={TEXT_SIZES.xxs} key={index}>
                                            • {elem}
                                        </Text>
                                    ))}
                                </FlexColumn>
                            </FlexColumn>
                        </FlexColumn>
                        <FlexColumn
                            w="100%"
                            justifyContent="center"
                            alignItems="end"
                        >
                            <div
                                style={{
                                    width: "90%",
                                    minHeight: "300px",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "16px",
                                }}
                            ></div>
                        </FlexColumn>
                    </FlexRow>
                    <FlexColumn
                        gap="50px"
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                        p="30px 0"
                    >
                        <Divider />
                        <Text size={TEXT_SIZES.xl}>
                            Can we help you with a similar project?
                        </Text>
                        <Button
                            href="/contact_us"
                            gradient={project.color}
                            variant={BUTTON_VARIANTS.gradient}
                            label={
                                <Text
                                    color={COLORS.black}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    Contacu Us
                                </Text>
                            }
                        />
                    </FlexColumn>
                </>
            )}
        </FlexColumn>
    );
};
export default Project;
