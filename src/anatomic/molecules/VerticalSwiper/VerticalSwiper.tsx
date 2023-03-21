import React, { FC, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { A11y, Mousewheel, Navigation, Pagination } from "swiper";
import { StyledSwiper } from "./styled";

interface Props {
    children: ReactNode;
    swipeHandler?: any;
    allowSlideNext?: boolean;
}

export const VerticalSwiperElem: FC<Props> = ({
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
