import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { COLORS } from "@/lib/theme/color";
import { FitToViewport } from "react-fit-to-viewport";
import { CardElem } from "@/anatomic/molecules/TeamItemCard/TeamItemCard";
import { TeamInterface } from "./api/team";
import { useCallback, useEffect, useState } from "react";
import client from "@/axios";

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
            gap="100px"
            w="100%"
            h="100vh"
            alignItems="center"
            p="50px 0"
            bg="#f4f6f8"
            style={{ overflow: "hidden" }}
        >
            {team &&
                team.map((item, index) => (
                    <CardElem index={index} key={index}>
                        <Row gap="20px">
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
                        </Row>
                        <FlexColumn w="100%" justifyContent="center">
                            <StyledSwiper
                                direction="vertical"
                                navigation={true}
                                scrollbar={{ draggable: true }}
                                modules={[
                                    Navigation,
                                    Pagination,
                                    Mousewheel,
                                    Keyboard,
                                ]}
                                className="mySwiper"
                            >
                                {item.comments.map((elem, index) => (
                                    <SwiperSlide className="slide" key={index}>
                                        <FitToViewport
                                            style={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            width={750}
                                            height={0}
                                            minZoom={0}
                                            maxZoom={1}
                                        >
                                            <SlideImg src={elem.src} />
                                        </FitToViewport>
                                    </SwiperSlide>
                                ))}
                            </StyledSwiper>
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

const Row = styled(FlexRow)``;

const ImgContainer = styled.div`
    padding: 5px;
    display: flex;
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
`;

const Img = styled.img`
    height: 25px;
`;

const SlideImg = styled.img`
    z-index: 100;
`;

const Avatar = styled.div<{ image: string }>`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${({ image }) => image});
`;

const StyledSwiper = styled(Swiper)`
    max-height: 200px;
    margin: 0;

    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 750px;
        @media screen and (max-width: 600px) {
            max-width: calc(100vw - 80px);
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        left: 50%;
        transform: rotate(90deg);
        transform-origin: left center;
    }
    .swiper-button-next {
        ::after {
            font-size: 18px;
        }
        color: ${COLORS.black};
        top: 175px;
    }
    .swiper-button-prev {
        ::after {
            font-size: 18px;
        }
        color: ${COLORS.black};
        top: 0;
    }
`;
