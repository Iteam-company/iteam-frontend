import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TeamInterface } from "./api/team";
import { useCallback, useEffect, useState } from "react";
import client from "@/axios";
import { CardElem } from "@/anatomic/molecules/TeamItemCard/TeamItemCard";
import { SwiperElem } from "@/anatomic/molecules/Swiper";
import { SwiperSlide } from "swiper/react";
import {
    TEXT_SIZES,
    LETTER_SPACING,
    TEXT_WEIGHTS,
    Text,
} from "@/anatomic/atoms/Text";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { COLORS } from "@/lib/theme/color";
import { Container, Title } from "@/lib/pageStyles/teamStyles";

const Team = () => {
    const [team, setTeam] = useState<TeamInterface[]>([]);

    const getTeam = useCallback(async () => {
        try {
            const { data } = await client.get("/api/team");
            setTeam(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getTeam();
    }, []);

    return (
        <FlexColumn
            mw="100%"
            justifyContent="center"
            alignItems="center"
            p="50px 0"
            style={{
                overflow: "hidden",
            }}
        >
            <Adaptive
                h="500px"
                justifyContent="start"
                alignItems="center"
                p="20px 50px"
            >
                <FlexColumn justifyContent="center" alignItems="start">
                    <Text
                        size={TEXT_SIZES.xxxs}
                        letterSpacing={LETTER_SPACING.s}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        OUR TEAM
                    </Text>
                    <Title
                        size={TEXT_SIZES.xxl}
                        color={COLORS.black}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        We are a group of brilliant minds and exceptional
                        talents who promote the values of effective
                        communication and process transparency.
                    </Title>
                </FlexColumn>
            </Adaptive>
            <SwiperElem>
                {team.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        style={{
                            width: "100vw",
                        }}
                    >
                        <Container>
                            <CardElem
                                key={item.id}
                                avatar={item.avatar.src}
                                name={item.name}
                                position={item.position}
                                technology={item.technology}
                                comments={item.comments}
                                experience={item.experience}
                                rate={item.rate}
                            />
                        </Container>
                    </SwiperSlide>
                ))}
            </SwiperElem>
        </FlexColumn>
    );
};

export default Team;
