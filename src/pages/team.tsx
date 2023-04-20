import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TeamInterface } from "./api/team";
import { memo, useCallback, useEffect, useState } from "react";
import client from "@/axios";
import {
    TEXT_SIZES,
    LETTER_SPACING,
    TEXT_WEIGHTS,
    Text,
    TEXT_TYPES,
} from "@/anatomic/atoms/Text";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { COLORS } from "@/lib/theme/color";
import { Title } from "@/lib/pageStyles/teamStyles";
import { SmoothSlider } from "@/anatomic/organisms/SmoothSlider";
import { SlideInterface } from "@/anatomic/organisms/SmoothSlider/SmoothSlider";
import { TeamItem } from "@/anatomic/molecules/TeamItemCard";
import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Button } from "@/anatomic/atoms/Button";
import { BgImage } from "@/anatomic/atoms/BgImage";
import BgImage1 from "@/assets/bgImage/team/bgImage1.svg";

const Team = () => {
    const [team, setTeam] = useState<SlideInterface[]>([]);

    const getTeam = useCallback(async () => {
        try {
            const { data } = await client.get("/api/team");

            setTeam(
                data.map((item: TeamInterface) => ({
                    content: (
                        <TeamItem
                            key={item.id}
                            avatar={item.avatar.src}
                            name={item.name}
                            position={item.position}
                            technology={item.technology}
                            comments={item.comments}
                            experience={item.experience}
                            rate={item.rate}
                        />
                    ),
                })),
            );
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getTeam();
    }, []);

    return (
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
            <Adaptive
                h="calc(100vh - 100px)"
                justifyContent="center"
                alignItems="center"
                position="relative"
            >
                <BgImage
                    src={BgImage1}
                    maxWidth={710}
                    right={-60}
                    top={34}
                    mobileTop={56}
                    mobileRight={-60}
                    priority
                />
                <FlexColumn justifyContent="center" alignItems="start">
                    <Text
                        size={TEXT_SIZES.small.s}
                        letterSpacing={LETTER_SPACING.s}
                        weight={TEXT_WEIGHTS.medium}
                        type={TEXT_TYPES.title}
                        color={COLORS.warmGray}
                    >
                        OUR TEAM
                    </Text>
                    <Title
                        size={TEXT_SIZES.large.m}
                        color={COLORS.dark}
                        weight={TEXT_WEIGHTS.medium}
                        mobileSize={TEXT_SIZES.medium.xs}
                    >
                        We are a group of brilliant minds and exceptional
                        talents who promote the values of effective
                        communication and process transparency.
                    </Title>
                </FlexColumn>
            </Adaptive>
            {team.length && (
                <>
                    <Desktop>
                        <SmoothSlider
                            slides={team}
                            isTwoColumn={false}
                            editionContent={
                                <FlexColumn
                                    position="absolute"
                                    style={{
                                        bottom: "10px",
                                        left: "10vw",
                                    }}
                                    zIndex="100"
                                >
                                    <Button
                                        href="/contact_us"
                                        gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                        variant={BUTTON_VARIANTS.gradient_link}
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
                    </Desktop>
                    <Mobile>
                        <SmoothSlider
                            slides={team}
                            isTwoColumn={false}
                            navigation={false}
                            height="80vh"
                            editionContent={
                                <FlexColumn
                                    position="absolute"
                                    style={{
                                        bottom: "60px",
                                        left: "10vw",
                                    }}
                                    zIndex="100"
                                >
                                    <Button
                                        href="/contact_us"
                                        gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                        variant={BUTTON_VARIANTS.gradient_link}
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
                    </Mobile>
                </>
            )}
        </FlexColumn>
    );
};

export default memo(Team);
