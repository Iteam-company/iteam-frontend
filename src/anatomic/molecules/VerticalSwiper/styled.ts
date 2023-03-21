import { Swiper as SwiperComponent } from "swiper/react";
import styled from "styled-components";

export const StyledSwiper = styled(SwiperComponent)`
    .swiper-pagination-vertical {
        left: 6%;
        right: auto;

        @media all and (max-width: 1100px) {
            left: 8%;
        }
        @media all and (max-width: 899px) {
            left: 5vw;
        }

        .swiper-pagination-bullet {
            border: 2px solid black;
            background-color: transparent;
            opacity: 1;
            margin: 15px 0;
        }

        .swiper-pagination-bullet-active {
            background-color: black;
        }
    }
`;
