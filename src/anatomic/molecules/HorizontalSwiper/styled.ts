import { Swiper as SwiperComponent } from "swiper/react";
import styled from "styled-components";
import ArrowLeft from "@/assets/icon/arrowLeft.svg";
import ArrowRight from "@/assets/icon/arrowRight.svg";

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
        right: 38%;
    }
    .swiper-button-prev {
        left: 38%;
    }

    .swiper-button-prev {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-image: linear-gradient(
            109.75deg,
            #ffffff -1.04%,
            rgba(206, 188, 255, 0.19) 26.21%,
            rgba(182, 124, 255, 0.18) 52.65%,
            rgba(141, 71, 255, 0.43) 74.36%
        );
        box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.2);

        ::after {
            background-color: #f6eefc;
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
            #ffffff -1.04%,
            rgba(206, 188, 255, 0.19) 26.21%,
            rgba(182, 124, 255, 0.18) 52.65%,
            rgba(141, 71, 255, 0.43) 74.36%
        );
        box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.2);

        ::after {
            background-color: #f6eefc;
            border-radius: 50%;
            height: 34px;
            width: 34px;
            box-sizing: border-box;
            padding-left: 5px;
            content: url(${ArrowRight.src});
        }
    }
`;
