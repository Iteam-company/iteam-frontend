import React, { FC, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { A11y, Navigation } from "swiper";
import { StyledSwiper } from "./styled";

interface Props {
    children: ReactNode;
    minHeight?: string;
    maxWidth?: string;
    width?: string;
}

export const HorizontalSwiperElem: FC<Props> = ({
    children,
    minHeight = "60vh",
    width = "40vw",
    maxWidth,
}) => {
    return (
        <StyledSwiper
            w={width}
            mh={minHeight}
            mw={maxWidth}
            spaceBetween={50}
            modules={[Navigation, A11y]}
            navigation={true}
            mousewheel={true}
        >
            {children}
        </StyledSwiper>
    );
};
