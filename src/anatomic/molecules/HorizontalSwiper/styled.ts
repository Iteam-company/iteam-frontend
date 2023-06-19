import { Swiper as SwiperComponent } from "swiper/react";
import styled from "styled-components";
import ArrowLeft from "@/assets/icon/ArrowLeft.svg";
import ArrowRight from "@/assets/icon/ArrowRight.svg";
import { COLORS } from "@/lib/theme/color";

export const StyledSwiper = styled(SwiperComponent)<{
    mh?: string;
    w?: string;
    mw?: string;
    m?: string;
}>`
    box-sizing: border-box;
    padding: 20px;
    min-height: ${({ mh }) => mh && mh};
    width: ${({ w }) => w && w};
    max-width: ${({ mw }) => mw && mw};
    z-index: 2;
    height: "100%";

    .swiper-button-next,
    .swiper-button-prev {
        top: calc(${({ mh }) => mh && mh} - 25px);
    }
    .swiper-wrapper {
        margin: ${({ m }) => m || "0px"};
    }

    .swiper-button-next {
        right: 37%;
        @media all and (max-width: 600px) {
            right: 28%;
        }
    }

    .swiper-button-prev {
        left: 37%;
        @media all and (max-width: 600px) {
            left: 28%;
        }
    }

    .swiper-button-prev {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-image: linear-gradient(
            109.75deg,
            ${COLORS.white} -1.04%,
            rgba(206, 188, 255, 0.19) 26.21%,
            rgba(182, 124, 255, 0.18) 52.65%,
            rgba(141, 71, 255, 0.43) 74.36%
        );
        box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.2);

        ::after {
            border-radius: 50%;
            height: 34px;
            width: 34px;
            position: absolute;
            top: 17%;
            left: 31%;
            transform: translateY(-50%);
            box-sizing: border-box;
            padding-left: 5px;
            content: url(${ArrowLeft.src});
        }
    }

    .swiper-button-next {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-image: linear-gradient(
            109.75deg,
            ${COLORS.white} -1.04%,
            rgba(206, 188, 255, 0.19) 26.21%,
            rgba(182, 124, 255, 0.18) 52.65%,
            rgba(141, 71, 255, 0.43) 74.36%
        );
        box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.2);

        ::after {
            border-radius: 50%;
            height: 34px;
            width: 34px;
            position: absolute;
            top: 17%;
            left: 28%;
            transform: translateY(-50%);
            box-sizing: border-box;
            padding-left: 5px;
            content: url(${ArrowRight.src});
        }
    }

    .swiper-pagination-horizontal {
        .swiper-pagination-bullet {
            height: 4px;
            width: 4px;
            border: 1.5px solid ${COLORS.black};
            background-color: transparent;
            opacity: 1;
        }
        .swiper-pagination-bullet-active {
            background-color: ${COLORS.black};
        }
    }
`;
