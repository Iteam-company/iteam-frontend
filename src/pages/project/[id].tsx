import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { SwiperSlide } from "swiper/react";
import client from "@/axios";
import { useRouter } from "next/router";
import { ProjectItemInterface, SolutionInterface } from "../api/project-item";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Divider } from "@/lib/pageStyles/projectItem";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { Link } from "@/anatomic/atoms/Link";
import BackIcon from "@/assets/icon/arrow-back.svg";
import { FlexContainer } from "@/lib/pageStyles/outstaffing";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { ProjectItemInfo } from "@/anatomic/organisms/ProjectItemInfo";
import { BgImage } from "@/anatomic/atoms/BgImage";
import BgImage1 from "@/assets/bgImage/projectItem/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/projectItem/bgImage2.svg";

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
            w="100%"
            h="100%"
            alignItems="center"
            style={{ overflowX: "hidden" }}
            gap="40px"
        >
            <BgImage src={BgImage1.src} top={0} left={-350} />
            <FlexRow
                mw="1068px"
                w="100%"
                justifyContent="start"
                p="20px 20px 0"
                style={{ boxSizing: "border-box" }}
            >
                <Link
                    href="/projects"
                    linkText="Back"
                    textStyles={{
                        color: "#6E6E6E",
                        size: TEXT_SIZES.xs,
                        mobileSize: TEXT_SIZES.xxxs,
                    }}
                    icon={
                        <img
                            src={BackIcon.src}
                            style={{ paddingRight: "10px" }}
                        />
                    }
                />
            </FlexRow>
            {project && (
                <FlexColumn
                    w="100%"
                    alignItems="center"
                    p="0 20px"
                    gap="40px"
                    style={{ boxSizing: "border-box" }}
                >
                    <ProjectItemInfo {...project} />

                    <FlexColumn
                        w="100%"
                        h="100%"
                        gap="20px"
                        alignItems="center"
                        position="relative"
                    >
                        <BgImage src={BgImage2.src} bottom={-50} right={-400} />
                        <FlexColumn
                            mw="1068px"
                            w="100%"
                            justifyContent="start"
                            alignItems="start"
                        >
                            <Text
                                size="36px"
                                weight={TEXT_WEIGHTS.medium}
                                color={COLORS.black}
                                mobileSize={TEXT_SIZES.s}
                            >
                                Solution
                            </Text>
                        </FlexColumn>
                        <Desktop w="100%" mw="1068px" zIndex="2">
                            <FlexRow justifyContent="space-between" w="100%">
                                {project.solution.map(
                                    (item: SolutionInterface, index) => (
                                        <FlexColumn
                                            bg={COLORS.white}
                                            style={{
                                                borderRadius: "16px",
                                                boxShadow:
                                                    "0px 4px 20px 0px #00000040",
                                            }}
                                            w="25%"
                                            p="24px"
                                            gap="15px"
                                            key={index}
                                        >
                                            <FlexRow
                                                justifyContent="center"
                                                w="100%"
                                            >
                                                <Text
                                                    textDecoration="underline"
                                                    size={TEXT_SIZES.m}
                                                    color={COLORS.textThird}
                                                >
                                                    {item.title}
                                                </Text>
                                            </FlexRow>
                                            <FlexColumn gap="8px">
                                                {item.text.map(
                                                    (elem, index) => (
                                                        <Text
                                                            key={index}
                                                            color={
                                                                COLORS.textThird
                                                            }
                                                        >
                                                            • {elem}
                                                        </Text>
                                                    ),
                                                )}
                                            </FlexColumn>
                                        </FlexColumn>
                                    ),
                                )}
                            </FlexRow>
                        </Desktop>
                        <Mobile
                            h="100%"
                            w="100%"
                            gap="20px"
                            style={{ boxSizing: "border-box" }}
                            p="0 20px"
                            zIndex="2"
                        >
                            <HorizontalSwiperElem
                                minHeight="330px"
                                width="100%"
                                maxWidth="650px"
                                navigation={false}
                                pagination={true}
                            >
                                {project.solution.map(
                                    (item: SolutionInterface, index) => (
                                        <SwiperSlide
                                            key={index}
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <FlexColumn
                                                bg={COLORS.white}
                                                style={{
                                                    borderRadius: "16px",
                                                    boxShadow:
                                                        "0px 4px 20px 0px #00000040",
                                                }}
                                                w="100%"
                                                p="24px"
                                                gap="15px"
                                            >
                                                <FlexRow
                                                    justifyContent="center"
                                                    w="100%"
                                                >
                                                    <Text
                                                        textDecoration="underline"
                                                        size={TEXT_SIZES.m}
                                                        color={COLORS.textThird}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </FlexRow>
                                                <FlexColumn gap="8px">
                                                    {item.text.map(
                                                        (elem, index) => (
                                                            <Text
                                                                key={index}
                                                                color={
                                                                    COLORS.textThird
                                                                }
                                                            >
                                                                • {elem}
                                                            </Text>
                                                        ),
                                                    )}
                                                </FlexColumn>
                                            </FlexColumn>
                                        </SwiperSlide>
                                    ),
                                )}
                            </HorizontalSwiperElem>
                        </Mobile>
                        <FlexContainer
                            w="100%"
                            mw="1068px"
                            gap="40px"
                            p="30px 0"
                            zIndex="2"
                        >
                            <FlexColumn
                                w="100%"
                                justifyContent="start"
                                alignItems="start"
                                gap="15px"
                            >
                                <Text
                                    size="36px"
                                    weight={TEXT_WEIGHTS.medium}
                                    color={COLORS.black}
                                    mobileSize={TEXT_SIZES.s}
                                >
                                    Result
                                </Text>
                                <FlexColumn gap="20px">
                                    <Text
                                        textDecoration="underline"
                                        size={TEXT_SIZES.s}
                                        color={COLORS.black}
                                        weight={TEXT_WEIGHTS.medium}
                                        mobileSize={TEXT_SIZES.xs}
                                    >
                                        {project.result.title}
                                    </Text>
                                    <FlexColumn gap="10px">
                                        {project.result.text.map(
                                            (elem, index) => (
                                                <Text
                                                    size={TEXT_SIZES.xxs}
                                                    key={index}
                                                    color={COLORS.textMinor}
                                                >
                                                    • {elem}
                                                </Text>
                                            ),
                                        )}
                                    </FlexColumn>
                                </FlexColumn>
                            </FlexColumn>
                            <FlexColumn
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                                zIndex="2"
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        minHeight: "300px",
                                        background: COLORS.white,
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "16px",
                                    }}
                                ></div>
                            </FlexColumn>
                        </FlexContainer>
                    </FlexColumn>
                    <FlexColumn
                        gap="40px"
                        w="100%"
                        mw="1068px"
                        justifyContent="center"
                        alignItems="center"
                        p="30px 0"
                    >
                        <Divider />
                        <Text
                            size={TEXT_SIZES.xl}
                            color={COLORS.black}
                            weight={TEXT_WEIGHTS.medium}
                            mobileSize={TEXT_SIZES.s}
                            textAlign="center"
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
                </FlexColumn>
            )}
        </FlexColumn>
    );
};
export default Project;
