import styled from "styled-components";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { COLORS } from "@/lib/theme/color";
import { CardElem } from "@/anatomic/molecules/TeamItemCard/TeamItemCard";
import { TeamInterface } from "./api/team";
import { useCallback, useEffect, useState } from "react";
import client from "@/axios";
import { SwiperElem } from "@/anatomic/molecules/Swiper/Swiper";
import { ParticlesElem } from "@/anatomic/molecules/Particles";

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
            gap="50px"
            bg="#f4f6f8"
            w="100%"
            mh="100vh"
            h="auto"
            alignItems="center"
            p="20px 0"
            style={{ overflow: "hidden" }}
        >
            <ParticlesElem />
            {team &&
                team.map((item, index) => (
                    <CardElem index={index} key={index}>
                        <FlexRow gap="20px">
                            <Avatar image={item.avatar.src} />
                            <FlexColumn gap="10px">
                                <Text
                                    weight={TEXT_WEIGHTS.medium}
                                    color={COLORS.black}
                                    size={TEXT_SIZES.m}
                                >
                                    {item.name}
                                </Text>
                                <Text size={TEXT_SIZES.xs}>
                                    {item.position}
                                </Text>
                            </FlexColumn>
                        </FlexRow>
                        <FlexColumn w="100%" justifyContent="center">
                            <SwiperElem sliders={item.comments} />
                        </FlexColumn>
                        <FlexRow gap="20px" alignItems="center" flexWrap="wrap">
                            {item.technology.map((elem, index) => (
                                <ImgContainer key={index}>
                                    <Img src={elem.src} />
                                </ImgContainer>
                            ))}
                        </FlexRow>
                    </CardElem>
                ))}
        </FlexColumn>
    );
};

export default Team;

const ImgContainer = styled.div`
    padding: 5px;
    display: flex;
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
`;

const Img = styled.img`
    height: 25px;
`;

const Avatar = styled.div<{ image: string }>`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${({ image }) => image});
`;
