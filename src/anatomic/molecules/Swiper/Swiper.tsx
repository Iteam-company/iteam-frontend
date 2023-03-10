import React, { FC, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Swiper as SwiperComponent } from "swiper/react";
import { A11y, Mousewheel, Navigation, Pagination } from "swiper";
import styled from "styled-components";

interface Props {
    children: ReactNode;
    swipeHandler?: any;
    allowSlideNext?: boolean;
}

export const SwiperElem: FC<Props> = ({
    children,
    swipeHandler,
    allowSlideNext = true,
}) => {
    const onTouchStart = (e: any) => {
        if (swipeHandler) {
            swipeHandler(e);
        }
    };
    const onScroll = (e: any) => {
        if (swipeHandler) {
            swipeHandler(e);
        }
    };

    return (
        <StyledSwiper
            onTouchStart={(e) => onTouchStart(e)}
            onScroll={(e) => onScroll(e)}
            style={{
                height: "calc(86vh)",
                width: "100vw",
                padding: "5px 0",
            }}
            effect="cards"
            spaceBetween={50}
            allowSlideNext={allowSlideNext}
            direction="vertical"
            modules={[Mousewheel, Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
            }}
        >
            {children}
        </StyledSwiper>
    );
};
const StyledSwiper = styled(SwiperComponent)`
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
