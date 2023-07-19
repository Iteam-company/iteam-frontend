import React, { useEffect, useState } from "react";
import { FlexBoxForDifferentWidth, FlexColumn } from "@/anatomic/atoms/Flex";
import Head from "next/head";
import { Slide } from "@/anatomic/molecules/ProjectSlide";
import { SlideInterface } from "@/anatomic/organisms/SmoothSlider/SmoothSlider";
import { BgImage } from "@/anatomic/atoms/BgImage";
import BgImage1 from "@/assets/bgImage/projects/portfolioBg.webp";
import { Pages } from "@/hooks/useStrapiData";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { useWindowSize } from "@/hooks/useWindowSize";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { fetchDataPage } from "@/utils/fetchDataPage";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { ProjectsSlider } from "@/anatomic/organisms/ProjectsSlider";
import { ProjectTitle } from "@/anatomic/organisms/ProjectsTitle";

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
    projectUrl?: string;
}

export interface Technologies {
    icon: "react" | "ts" | "js" | "angular";
    name: string;
    techIcon: any;
}

const Projects = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [slides, setSlides] = useState<SlideInterface[]>([]);
    const size = useWindowSize();

    console.log("data", data);

    useEffect(() => {
        data &&
            setSlides(
                data.projects.map((item: ProjectsInterface, index: number) => ({
                    content: (
                        <Slide
                            id={item.id}
                            title={item.title}
                            projectUrl={item.projectUrl}
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
    }, [data, data.projects]);

    if (!data) {
        return null;
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
                <FlexBoxForDifferentWidth
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                    p="20px 40px"
                    position="relative"
                    style={{ boxSizing: "border-box" }}
                >
                    <ProjectTitle />

                    <BgImage
                        ds="block"
                        src={data.main.bgMain.data[0].attributes.url}
                        width={700}
                        height={400}
                        maxWidth={710}
                        top={-15}
                        left={size.width! < 1700 ? -20 : -15}
                        priority={true}
                        mobileTop={75}
                        mobileLeft={-40}
                        imageUrl={BgImage1.src}
                    />
                </FlexBoxForDifferentWidth>
                <ProjectsSlider slides={slides} />
            </FlexColumn>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: any;
}> = async () => {
    const data = await fetchDataPage<any>(Pages.portfolio);
    console.log(data);
    return { props: { data } };
};
export default Projects;
