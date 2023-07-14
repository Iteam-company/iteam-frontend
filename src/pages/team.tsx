import { FlexBoxForDifferentWidth, FlexColumn } from "@/anatomic/atoms/Flex";
import { memo, useEffect, useState } from "react";
import {
    TEXT_SIZES,
    LETTER_SPACING,
    TEXT_WEIGHTS,
    Text,
    TEXT_TYPES,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { Title } from "@/lib/pageStyles/teamStyles";
import { SmoothSlider } from "@/anatomic/organisms/SmoothSlider";
import { TeamItem } from "@/anatomic/molecules/TeamItemCard";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Button } from "@/anatomic/atoms/Button";
import { BgImage } from "@/anatomic/atoms/BgImage";
import BgImage1 from "@/assets/bgImage/team/bgImage1.webp";
import Head from "next/head";
import { Pages } from "@/hooks/useStrapiData";
import { CommentsI } from "@/anatomic/molecules/TeamItemCard/CommentSlider";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ContactUsModal } from "@/anatomic/organisms/Modal";
import { FormElem } from "@/anatomic/organisms/Form/Form";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { fetchDataPage } from "@/utils/fetchDataPage";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";

export interface TeamInterface {
    id?: number;
    name: string;
    avatar?: any;
    position: string;
    comments?: CommentsI[];
    technology?: Technology[];
    experience: { position: string; year: number };
    rate: number;
    upworkLink?: string;
    rateImage: string;
}

export interface Technology {
    text: string;
    short: string;
    id: number;
    techIcon: any;
}

const Team = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [team, setTeam] = useState<any>([]);
    const [openDeskModal, setOpenDeskModal] = useState(false);
    const [openMobModal, setOpenMobModal] = useState(false);

    const size = useWindowSize();

    const closeDeskModal = () => {
        setOpenDeskModal(false);
    };

    const closeMobModal = () => {
        setOpenMobModal(false);
    };

    const openDeskModalFunc = () => {
        setOpenDeskModal(true);
    };

    const openMobModalFunc = () => {
        setOpenMobModal(true);
    };
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
                        src={BgImage1}
                        maxWidth={710}
                        right={-30}
                        top={34}
                        mobileTop={70}
                        mobileRight={0}
                        priority={true}
                    />
                    <AdaptContainer mw="1450px">
                        <FlexColumn justifyContent="center" alignItems="start">
                            <Text
                                size={TEXT_SIZES.small.s}
                                letterSpacing={LETTER_SPACING.s}
                                weight={TEXT_WEIGHTS.medium}
                                type={TEXT_TYPES.title}
                                color={COLORS.warmGray}
                            >
                                {data?.main.title}
                            </Text>
                            <Title
                                size={TEXT_SIZES.large.m}
                                color={COLORS.dark}
                                weight={TEXT_WEIGHTS.medium}
                                mobileSize={TEXT_SIZES.medium.xs}
                            >
                                {data?.main.description}
                            </Title>
                        </FlexColumn>
                    </AdaptContainer>
                </FlexBoxForDifferentWidth>
                {team?.length ? (
                    <>
                        <Desktop>
                            <SmoothSlider
                                slides={team}
                                isTwoColumn={false}
                                editionContent={
                                    <FlexColumn
                                        position="absolute"
                                        style={
                                            size.width! > 1800
                                                ? {
                                                      bottom: "15vh",
                                                      left: "7vw",
                                                  }
                                                : {
                                                      bottom: "2vh",
                                                      left: "10vw",
                                                  }
                                        }
                                        zIndex="100"
                                    >
                                        <Button
                                            clickFunc={openDeskModalFunc}
                                            gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                            variant={
                                                BUTTON_VARIANTS.gradient_link
                                            }
                                            label={
                                                <Text
                                                    color={COLORS.dark}
                                                    weight={TEXT_WEIGHTS.main}
                                                    size={TEXT_SIZES.small.m}
                                                >
                                                    Contact us
                                                </Text>
                                            }
                                        />
                                    </FlexColumn>
                                }
                            />
                            <ContactUsModal
                                openModal={openDeskModal}
                                closeFunc={closeDeskModal}
                            >
                                <FormElem closeModal={closeDeskModal} />
                            </ContactUsModal>
                        </Desktop>
                        <Mobile>
                            <SmoothSlider
                                slides={team}
                                isTwoColumn={false}
                                navigation={false}
                                height={size.height! > 600 ? "85vh" : "90vh"}
                                editionContent={
                                    <FlexColumn
                                        position="absolute"
                                        style={
                                            size.height! > 650
                                                ? {
                                                      bottom: "4.5vh",
                                                      left: "10vw",
                                                  }
                                                : {
                                                      bottom: "1vh",
                                                      left: "10vw",
                                                  }
                                        }
                                        zIndex="100"
                                    >
                                        <Button
                                            clickFunc={openMobModalFunc}
                                            gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                            variant={
                                                BUTTON_VARIANTS.gradient_link
                                            }
                                            h={
                                                size.height! > 650
                                                    ? "46px"
                                                    : "40px"
                                            }
                                            w={
                                                size.height! > 650
                                                    ? "167px"
                                                    : "140px"
                                            }
                                            label={
                                                <Text
                                                    color={COLORS.dark}
                                                    weight={TEXT_WEIGHTS.main}
                                                    size={TEXT_SIZES.small.m}
                                                >
                                                    Contact us
                                                </Text>
                                            }
                                        />
                                        <ContactUsModal
                                            openModal={openMobModal}
                                            closeFunc={closeMobModal}
                                        >
                                            <FormElem
                                                closeModal={closeMobModal}
                                            />
                                        </ContactUsModal>
                                    </FlexColumn>
                                }
                            />
                        </Mobile>
                    </>
                ) : null}
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
