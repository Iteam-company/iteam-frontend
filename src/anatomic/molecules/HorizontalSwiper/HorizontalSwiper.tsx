import React, { FC, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/grid";

import { A11y, Navigation, Pagination, Grid } from "swiper";
import { StyledSwiper } from "./styled";
import "swiper/swiper-bundle.css";

interface Props {
    children: ReactNode;
    minHeight?: string;
    maxWidth?: string;
    width?: string;
    onSwiper?: any;
    onChangeSlide?: any;
    swiperRef?: any;
    navigation?: boolean;
    slidesPerView?: number;
    slidesPerGroup?: number;
    spaceBetween?: number;
    freeMode?: boolean;
    loop?: boolean;
    loopedSlides?: number;
    pagination?: boolean;
    className?: string;
    breakpoints?: any;
    grid?: any;
}

export const HorizontalSwiperElem: FC<Props> = ({
    children,
    minHeight = "60vh",
    width = "40vw",
    maxWidth,
    onSwiper,
    onChangeSlide,
    swiperRef,
    navigation = true,
    slidesPerView = 1,
    spaceBetween = 50,
    freeMode = false,
    loop,
    loopedSlides,
    pagination,
    className,
    slidesPerGroup = 1,
    breakpoints,
    grid,
}) => {
    const onSwiperHandler = (e: any) => {
        onSwiper && onSwiper(e);
    };
    const onChangeSlideHandler = (e: any) => {
        onChangeSlide && onChangeSlide(e);
    };
    return (
        <StyledSwiper
            className={className}
            ref={swiperRef}
            w={width}
            mh={minHeight}
            mw={maxWidth}
            modules={[A11y, Grid, Navigation, Pagination]}
            navigation={navigation}
            pagination={pagination}
            mousewheel={true}
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerGroup}
            loop={loop}
            loopedSlides={loopedSlides}
            spaceBetween={spaceBetween}
            freeMode={freeMode}
            onSwiper={(e: any) => onSwiperHandler(e)}
            onSlideChange={onChangeSlideHandler}
            breakpoints={breakpoints}
            grid={grid}
        >
            {children}
        </StyledSwiper>
    );
};
