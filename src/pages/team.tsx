import { FlexBoxForDifferentWidth, FlexColumn } from "@/anatomic/atoms/Flex";
import { memo, useEffect, useState } from "react";
import blurBg from "../assets/bgImage/team/teamBg.webp";
import { TeamItem } from "@/anatomic/molecules/TeamItemCard";
import { BgImage } from "@/anatomic/atoms/BgImage";
import Head from "next/head";
import { Pages } from "@/hooks/useStrapiData";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { fetchDataPage } from "@/utils/fetchDataPage";
import { TeamInterface } from "@/interfaces/pages/team";
import { TeamSlider } from "@/anatomic/organisms/TeamSlider";
import { TeamTitle } from "@/anatomic/organisms/TeamTitle";

const Team = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [team, setTeam] = useState<any>([]);

    useEffect(() => {
        data &&
            setTeam(
                data.team.map((item: TeamInterface) => {
                    return {
                        content: (
                            <TeamItem
                                key={item.id}
                                rateImage={item.rateImage}
                                avatar={item.avatar}
                                name={item.name}
                                position={item.position}
                                technology={item.technology}
                                comments={item.comments}
                                experience={item.experience}
                                rate={item.rate}
                                upworkLink={item?.upworkLink}
                            />
                        ),
                    };
                }),
            );
    }, [data, data.team]);

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
                p="0 0 50px"
                position="relative"
                style={{
                    overflow: "hidden",
                }}
            >
                <FlexBoxForDifferentWidth
                    w="90%"
                    justifyContent="center"
                    alignItems="start"
                    position="relative"
                >
                    <BgImage
                        ds="block"
                        src={data.main.bgMain.data[0].attributes.url}
                        maxWidth={710}
                        width={820}
                        height={400}
                        right={-30}
                        top={34}
                        mobileTop={70}
                        mobileRight={0}
                        imageUrl={blurBg.src}
                        priority={true}
                    />
                    <AdaptContainer mw="1450px">
                        <TeamTitle
                            title={data?.main.title}
                            description={data?.main.description}
                        />
                    </AdaptContainer>
                </FlexBoxForDifferentWidth>
                <TeamSlider team={team} />
            </FlexColumn>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: any;
}> = async () => {
    const data = await fetchDataPage<any>(Pages.company);

    return { props: { data } };
};

export default memo(Team);
