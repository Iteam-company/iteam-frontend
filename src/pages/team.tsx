import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import AvatarIcon from "@/assets/team/avatar.jpeg";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { COLORS } from "@/lib/theme/color";
import IgorComment1 from "@/assets/team/igor/comment_1.png";
import IgorComment2 from "@/assets/team/igor/comment_2.png";
import IgorComment3 from "@/assets/team/igor/comment_3.png";
import { FitToViewport } from "react-fit-to-viewport";

import JavascriptIcon from "@/assets/icon/javascript.png";
import TypescriptIcon from "@/assets/icon/typescript.png";
import ReduxIcon from "@/assets/icon/redux.png";
import ReactIcon from "@/assets/icon/react.png";
import NestIcon from "@/assets/icon/nest-js.svg";
import NodeIcon from "@/assets/icon/node-js.png";
import MongoIcon from "@/assets/icon/mongo.png";
import PostgressIcon from "@/assets/icon/postgress.png";
import MobXIcon from "@/assets/icon/mobx.png";
import RxJsIcon from "@/assets/icon/rxjs.png";
import ExpressjsIcon from "@/assets/icon/expressjs.png";
import FirebaseIcon from "@/assets/icon/firebase.png";
import { CardElem } from "@/anatomic/molecules/TeamItemCard/TeamItemCard";
import { useId } from "react";

const DATA = [
    {
        name: "Igor Sergienko",
        avatar: AvatarIcon,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        name: "Igor Sergienko",
        avatar: AvatarIcon,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        name: "Igor Sergienko",
        avatar: AvatarIcon,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        name: "Igor Sergienko",
        avatar: AvatarIcon,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        name: "Igor Sergienko",
        avatar: AvatarIcon,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        name: "Igor Sergienko",
        avatar: AvatarIcon,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
];
const Team = () => {
    return (
        <FlexColumn
            gap="100px"
            w="100%"
            alignItems="center"
            p="50px 0"
            bg="#f4f6f8"
        >
            {DATA.map((item, index) => (
                <CardElem index={index} key={useId()}>
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
                            <Text size={TEXT_SIZES.xs}>{item.position}</Text>
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
                            {item.comments.map((elem) => (
                                <SwiperSlide className="slide" key={useId()}>
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
                        {item.technology.map((elem) => (
                            <ImgContainer key={useId()}>
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
        max-width: calc(100vw - 80px);
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
