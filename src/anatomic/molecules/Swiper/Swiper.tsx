import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { FitToViewport } from "react-fit-to-viewport";
import styled from "styled-components";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const SwiperElem: FC<{ sliders: any }> = ({ sliders }) => {
    return (
        <StyledSwiper
            direction="vertical"
            navigation={true}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {sliders.map((elem: any, index: number) => (
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
    );
};
const StyledSwiper = styled(Swiper)`
    max-height: 200px;
    margin: 0;

    .slide {
        transition: 0.3s all;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 750px;
        @media screen and (max-width: 850px) {
            max-width: calc(100vw - 80px);
        }
    }
    .swiper-wrapper {
        height: 200px !important;
        @media screen and (max-width: 750px) {
            height: 150px !important;
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
        /* top: 175px; */
        top: 88%;
    }
    .swiper-button-prev {
        ::after {
            font-size: 18px;
        }
        color: ${COLORS.black};
        top: 0;
    }
`;
const SlideImg = styled.img`
    z-index: 100;
`;
