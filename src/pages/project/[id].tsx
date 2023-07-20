import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import Head from "next/head";
import React, { memo } from "react";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { SwiperSlide } from "swiper/react";
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
import BgImage1 from "@/assets/bgImage/projectItem/bgImage1.webp";
import BgImage2 from "@/assets/bgImage/projectItem/bgImage2.webp";
import styled from "styled-components";
import { Pages } from "@/hooks/useStrapiData";
import { TextI } from "@/anatomic/molecules/Banner/Banner";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";
import timeImage from "../../assets/projects/time.svg";
import useLogoAnimation from "@/hooks/useLogoAnimation";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { fetchDataPage } from "@/utils/fetchDataPage";

export interface ProjectItemInterface {
    id: number;
    title: string;
    description: string;
    location: string;
    budget: string;
    solution: SolutionInterface[];
    result: ResultInterface;
    tech: Technologies[];
    color: string;
    img: any;
}

export interface Technologies {
    icon: "react" | "ts" | "js" | "angular";
    name: string;
}

export interface SolutionInterface {
    title: string;
    text: TextI[];
}

export interface ResultInterface {
    title: string;
    text: TextI[];
}

const Project = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const size = useWindowSize();

    const showLogo = useLogoAnimation(data);

    if (!data) {
        return null;
    }
    return (
        <>
            <Head>
                <title>iTeam</title>
            </Head>
            <Container
                w="100%"
                h="100%"
                alignItems="center"
                style={{ overflowX: "hidden" }}
                position="relative"
                gap="40px"
            >
                <FlexRow
                    mw="1200px"
                    w="100%"
                    justifyContent="start"
                    style={{ boxSizing: "border-box" }}
                >
                    <Link
                        href="/projects"
                        linkText="Back"
                        textStyles={{
                            color: COLORS.textThird,
                            size: TEXT_SIZES.small.l,
                            mobileSize: TEXT_SIZES.small.s,
                        }}
                        icon={
                            <Image
                                src={BackIcon.src}
                                style={{ paddingRight: "10px" }}
                                alt="back"
                                width="24"
                                height="14"
                            />
                        }
                    />
                </FlexRow>
                <BgImage
                    src={BgImage1}
                    maxWidth={600}
                    top={-2}
                    left={-18}
                    mobileLeft={-50}
                    mobileTop={1}
                    priority
                />

                {data?.projectDetail && (
                    <FlexColumn
                        w="100%"
                        alignItems="center"
                        p="0 20px"
                        gap="40px"
                        style={{ boxSizing: "border-box" }}
                    >
                        <ProjectItemInfo data={data} />

                        <FlexColumn
                            w="100%"
                            h="100%"
                            gap="40px"
                            alignItems="center"
                            position="relative"
                        >
                            <BgImage
                                src={BgImage2}
                                maxWidth={700}
                                bottom={0}
                                right={-20}
                                mobileRight={-30}
                                loading="lazy"
                            />
                            <FlexColumn
                                mw="1150px"
                                w="100%"
                                justifyContent="start"
                                alignItems="start"
                            >
                                <Text
                                    size={TEXT_SIZES.large.s}
                                    weight={TEXT_WEIGHTS.medium}
                                    color={COLORS.dark}
                                    mobileSize={TEXT_SIZES.small.xl}
                                >
                                    Solution
                                </Text>
                            </FlexColumn>
                            <Desktop w="100%" mw="1200px" zIndex="2" p="0 10px">
                                <FlexRow
                                    justifyContent="space-between"
                                    alignItems="center"
                                    w="100%"
                                    gap="40px"
                                >
                                    {[data.projectDetail.solution[0]].map(
                                        (
                                            item: SolutionInterface,
                                            index: number,
                                        ) => (
                                            <FlexColumn
                                                bg={COLORS.white}
                                                style={{
                                                    borderRadius: "16px",
                                                    boxShadow:
                                                        "0px 4px 20px 0px #00000040",
                                                    minHeight: "300px",
                                                }}
                                                w="25%"
                                                p="24px"
                                                gap="40px"
                                                key={index}
                                            >
                                                <FlexRow
                                                    justifyContent="center"
                                                    w="100%"
                                                >
                                                    <Text
                                                        textDecoration="underline"
                                                        size={
                                                            TEXT_SIZES.medium.xs
                                                        }
                                                        color={
                                                            COLORS.textPrimary
                                                        }
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </FlexRow>
                                                <FlexColumn gap="8px">
                                                    {item?.text.map(
                                                        (
                                                            elem: TextI,
                                                            index: number,
                                                        ) => (
                                                            <>
                                                                <Text
                                                                    key={index}
                                                                    color={
                                                                        COLORS.textPrimary
                                                                    }
                                                                >
                                                                    •{elem.text}
                                                                </Text>
                                                            </>
                                                        ),
                                                    )}
                                                </FlexColumn>
                                            </FlexColumn>
                                        ),
                                    )}
                                    <FlexColumn gap="8px" alignItems="center">
                                        <Text
                                            textDecoration="underline"
                                            size={TEXT_SIZES.medium.xs}
                                            color={COLORS.textPrimary}
                                        >
                                            Timeframe
                                        </Text>
                                        <Image
                                            src={timeImage}
                                            alt="timeImage"
                                            width="160"
                                            height="160"
                                        />
                                        <Text
                                            size={TEXT_SIZES.medium.xs}
                                            color={COLORS.textPrimary}
                                        >
                                            {data.timeFrame}
                                        </Text>
                                    </FlexColumn>
                                    {[data.projectDetail.solution[1]].map(
                                        (
                                            item: SolutionInterface,
                                            index: number,
                                        ) => (
                                            <FlexColumn
                                                bg={COLORS.white}
                                                style={{
                                                    borderRadius: "16px",
                                                    boxShadow:
                                                        "0px 4px 20px 0px #00000040",
                                                    minHeight: "300px",
                                                }}
                                                w="25%"
                                                p="24px"
                                                gap="8px"
                                                key={index}
                                            >
                                                <FlexRow
                                                    justifyContent="center"
                                                    w="100%"
                                                >
                                                    <Text
                                                        textDecoration="underline"
                                                        size={
                                                            TEXT_SIZES.medium.xs
                                                        }
                                                        color={
                                                            COLORS.textPrimary
                                                        }
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </FlexRow>
                                                <FlexColumn gap="8px">
                                                    <Text
                                                        key={index}
                                                        color={
                                                            COLORS.textPrimary
                                                        }
                                                    >
                                                        <FlexColumn gap="8px">
                                                            {item?.text.map(
                                                                (
                                                                    elem: TextI,
                                                                    index: number,
                                                                ) => (
                                                                    <FlexRow
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                marginRight:
                                                                                    "2px",
                                                                            }}
                                                                        >
                                                                            {" "}
                                                                            •
                                                                        </div>
                                                                        <Text
                                                                            color={
                                                                                COLORS.textPrimary
                                                                            }
                                                                        >
                                                                            {
                                                                                elem.text
                                                                            }
                                                                        </Text>
                                                                    </FlexRow>
                                                                ),
                                                            )}
                                                        </FlexColumn>
                                                    </Text>
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
                                style={{
                                    boxSizing: "border-box",
                                }}
                                p="0 20px"
                                zIndex="2"
                            >
                                <HorizontalSwiperElem
                                    minHeight="350px"
                                    width="100%"
                                    maxWidth="650px"
                                    navigation={false}
                                    pagination={true}
                                    m="0 0 20px 0"
                                >
                                    {data?.projectDetail?.solution.map(
                                        (
                                            item: SolutionInterface,
                                            index: number,
                                        ) => (
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
                                                        minHeight: "300px",
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
                                                            size={
                                                                TEXT_SIZES
                                                                    .medium.xs
                                                            }
                                                            color={
                                                                COLORS.textPrimary
                                                            }
                                                        >
                                                            {item.title}
                                                        </Text>
                                                    </FlexRow>
                                                    <FlexColumn gap="8px">
                                                        {item.text.map(
                                                            (
                                                                elem: TextI,
                                                                index: number,
                                                            ) => (
                                                                <Text
                                                                    key={index}
                                                                    color={
                                                                        COLORS.textPrimary
                                                                    }
                                                                >
                                                                    •{" "}
                                                                    {elem.text}
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
                                mw="1200px"
                                gap="40px"
                                zIndex="2"
                                style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <FlexRow>
                                    <FlexColumn
                                        w="80%"
                                        justifyContent="space-between"
                                        alignItems="start"
                                        gap="15px"
                                    >
                                        <Text
                                            size={TEXT_SIZES.large.s}
                                            weight={TEXT_WEIGHTS.medium}
                                            color={COLORS.dark}
                                            mobileSize={TEXT_SIZES.small.xl}
                                        >
                                            Result
                                        </Text>
                                        <FlexColumn gap="20px">
                                            <Text
                                                textDecoration="underline"
                                                size={TEXT_SIZES.small.xl}
                                                color={COLORS.dark}
                                                weight={TEXT_WEIGHTS.medium}
                                                mobileSize={TEXT_SIZES.small.l}
                                            >
                                                {
                                                    data?.projectDetail.result
                                                        .title
                                                }
                                            </Text>
                                            <FlexColumn gap="10px">
                                                {data.projectDetail.result.text.map(
                                                    (
                                                        elem: TextI,
                                                        index: number,
                                                    ) => (
                                                        <Text
                                                            size={
                                                                TEXT_SIZES.small
                                                                    .m
                                                            }
                                                            key={index}
                                                            color={
                                                                COLORS.textThird
                                                            }
                                                        >
                                                            • {elem.text}
                                                        </Text>
                                                    ),
                                                )}
                                            </FlexColumn>
                                        </FlexColumn>
                                    </FlexColumn>
                                </FlexRow>
                                <FlexColumn
                                    w="100%"
                                    justifyContent="space-between"
                                    alignItems="space-between"
                                    zIndex="2"
                                    style={{
                                        justifyItems: "flex-end",
                                        maxWidth: "450px",
                                    }}
                                >
                                    <div
                                        style={{
                                            maxWidth: "450px",
                                            background: COLORS.white,
                                            boxShadow:
                                                "0px 0px 0px  rgba(0, 0, 0, 0.25)",
                                            filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
                                            borderRadius: "16px",
                                            overflow: "hidden",
                                            aspectRatio: "1.8/1",
                                            display: "flex",
                                        }}
                                    >
                                        <div
                                            style={
                                                size.width! < 850
                                                    ? {
                                                          backgroundImage: `url(${data.projectDetail.result.resultImage.data.attributes.url})`,
                                                          backgroundRepeat:
                                                              "no-repeat",
                                                          backgroundSize:
                                                              "100% 100%",
                                                          backgroundPosition:
                                                              "center",
                                                          overflow: "hidden",
                                                          width: "100%",
                                                          height: "auto",
                                                          //   padding: "0 0 175px 0",
                                                          aspectRatio: "1.8/1",
                                                      }
                                                    : {
                                                          backgroundImage: `url(${data.projectDetail.result.resultImage.data.attributes.url})`,
                                                          backgroundRepeat:
                                                              "no-repeat",
                                                          backgroundSize:
                                                              "100% 100%",
                                                          backgroundPosition:
                                                              "center",
                                                          overflow: "hidden",
                                                          width: "100%",
                                                          height: "auto",
                                                          objectFit: "cover",
                                                          objectPosition:
                                                              "center",
                                                          //   padding: "0 0 200px 0",
                                                          aspectRatio: "1.8/1",
                                                          justifyItems:
                                                              "flex-end",
                                                      }
                                            }
                                        ></div>
                                        {/* <Image
                                        src={
                                            data.projectDetail.result
                                                .resultImage.data.attributes.url
                                        }
                                        alt="resutImage"
                                        width={
                                            size.width! < 850 ? "300" : "400"
                                        }
                                        height={
                                            size.width! < 850 ? "175" : "270"
                                        } */}
                                        {/* /> */}
                                    </div>
                                </FlexColumn>
                            </FlexContainer>
                        </FlexColumn>
                        <FlexColumn
                            gap="40px"
                            w="100%"
                            mw="1200px"
                            justifyContent="center"
                            alignItems="center"
                            p="40px 10px"
                        >
                            <Divider />
                            <Text
                                size={TEXT_SIZES.medium.l}
                                color={COLORS.dark}
                                weight={TEXT_WEIGHTS.medium}
                                mobileSize={TEXT_SIZES.small.xl}
                                textAlign="center"
                            >
                                Can we help you with a similar project?
                            </Text>
                            <Button
                                href="/contact_us"
                                gradient={data.projectDetail.color}
                                variant={BUTTON_VARIANTS.gradient_link}
                                label={
                                    <Text
                                        color={COLORS.dark}
                                        weight={TEXT_WEIGHTS.main}
                                    >
                                        Contact Us
                                    </Text>
                                }
                            />
                        </FlexColumn>
                    </FlexColumn>
                )}
            </Container>
        </>
    );
};

interface Props extends GetServerSideProps {
    id: number;
}
export const getServerSideProps: GetServerSideProps<{
    data: any;
}> = async (context) => {
    const { id } = context.query;
    const data = await fetchDataPage<any>(`${Pages.projectItemDetails}/${id}`);

    return { props: { data } };
};

export default memo(Project);

const Container = styled(FlexColumn)`
    @media all and (max-width: 799px) {
        gap: 10px;
    }
`;
