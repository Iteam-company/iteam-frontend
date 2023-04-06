import { Swiper as SwiperComponent } from "swiper/react";
import styled from "styled-components";
import ArrowLeft from "@/assets/icon/arrowLeft.svg";
import ArrowRight from "@/assets/icon/arrowRight.svg";
import { COLORS } from "@/lib/theme/color";

export const StyledSwiper = styled(SwiperComponent)<{
    mh?: string;
    w?: string;
    mw?: string;
}>`
    box-sizing: border-box;
    padding: 20px;
    min-height: ${({ mh }) => mh && mh};
    width: ${({ w }) => w && w};
    max-width: ${({ mw }) => mw && mw};
    z-index: 2;

    .swiper-button-next,
    .swiper-button-prev {
        top: calc(${({ mh }) => mh && mh} - 25px);
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
        z-index: 2;
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
            background-color: ${COLORS.lightPurple};
            border-radius: 50%;
            height: 34px;
            width: 34px;
            box-sizing: border-box;
            padding-left: 3px;
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
            background-color: ${COLORS.lightPurple};
            border-radius: 50%;
            height: 34px;
            width: 34px;
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
