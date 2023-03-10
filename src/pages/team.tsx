import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TeamInterface } from "./api/team";
import { useCallback, useEffect, useState } from "react";
import client from "@/axios";
import { CardElem } from "@/anatomic/molecules/TeamItemCard/TeamItemCard";
import { SwiperElem } from "@/anatomic/molecules/Swiper";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

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
            style={{
                paddingBottom: "100px",
                overflow: "hidden",
            }}
        >
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
                            />
                        </Container>
                    </SwiperSlide>
                ))}
            </SwiperElem>
        </FlexColumn>
    );
};

export default Team;

const Container = styled.div`
    margin: 0 50px;
    height: 70vh;
    padding: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 24px;
    @media all and (max-width: 899px) {
        margin: 0 10px;
    }
`;
