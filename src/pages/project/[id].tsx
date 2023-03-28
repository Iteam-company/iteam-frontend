import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { SwiperSlide } from "swiper/react";
import client from "@/axios";
import { useRouter } from "next/router";
import { ProjectItemInterface, SolutionInterface } from "../api/project-item";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Divider } from "@/lib/pageStyles/projectItem";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";

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
                            <GradientTitle
                                size={TEXT_SIZES.xxl}
                                weight={TEXT_WEIGHTS.main}
                                color={project.color}
                            >
                                {project.title}
                            </GradientTitle>
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
                            <HorizontalSwiperElem>
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
                            </HorizontalSwiperElem>
                        </FlexColumn>
                    </FlexRow>
                    <FlexColumn
                        w="100%"
                        justifyContent="start"
                        alignItems="start"
                    >
                        <Text
                            size="36px"
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
                                    bg={COLORS.white}
                                    style={{
                                        borderRadius: "16px",
                                        boxShadow: "0px 4px 20px 0px #00000040",
                                    }}
                                    w="25%"
                                    p="24px"
                                    gap="15px"
                                    key={index}
                                >
                                    <FlexRow justifyContent="center" w="100%">
                                        <Text
                                            textDecoration="underline"
                                            size={TEXT_SIZES.m}
                                            color={COLORS.textThird}
                                        >
                                            {item.title}
                                        </Text>
                                    </FlexRow>
                                    <FlexColumn gap="8px">
                                        {item.text.map((elem, index) => (
                                            <Text
                                                key={index}
                                                color={COLORS.textThird}
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
                                size="36px"
                                weight={TEXT_WEIGHTS.main}
                                color={COLORS.black}
                            >
                                Result
                            </Text>
                            <FlexColumn gap="20px">
                                <Text
                                    textDecoration="underline"
                                    size={TEXT_SIZES.s}
                                    color={COLORS.black}
                                    weight={TEXT_WEIGHTS.medium}
                                >
                                    {project.result.title}
                                </Text>
                                <FlexColumn gap="10px">
                                    {project.result.text.map((elem, index) => (
                                        <Text
                                            size={TEXT_SIZES.xxs}
                                            key={index}
                                            color={COLORS.textMinor}
                                        >
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
                        <Text
                            size={TEXT_SIZES.xl}
                            color={COLORS.black}
                            weight={TEXT_WEIGHTS.medium}
                        >
                            Can we help you with a similar project?
                        </Text>
                        <Button
                            href="/contact_us"
                            gradient={project.color}
                            variant={BUTTON_VARIANTS.gradient_link}
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
