import styled from "styled-components";
import { Text } from "@/anatomic/atoms/Text";
import { Swiper as SwiperComponent } from "swiper/react";
import ArrowLeft from "@/assets/icon/left.svg";
import ArrowRight from "@/assets/icon/right.svg";

export const Title = styled(Text)<{ color: string }>`
    background-image: linear-gradient(${({ color }) => color});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const StyledSwiper = styled(SwiperComponent)`
    .swiper-button-next,
    .swiper-button-prev {
        top: calc(60vh + 14px);
    }

    .swiper-button-next {
        right: 10%;
    }
    .swiper-button-prev {
        left: 10%;
    }

    .swiper-button-prev {
        ::after {
            content: url(${ArrowLeft.src});
        }
    }
    .swiper-button-next {
        ::after {
            content: url(${ArrowRight.src});
        }
    }

    .swiper-pagination {
        bottom: 8px;
        z-index: 0;
        .swiper-pagination-bullet {
            border: 2px solid black;
            background-color: transparent;
            opacity: 1;
            margin: 0px 5px;
        }
        .swiper-pagination-bullet-active {
            background-color: black;
        }
    }
`;
export const Divider = styled.div`
    height: 0px;
    border: 1px solid #989898;
    width: 100%;
`;
