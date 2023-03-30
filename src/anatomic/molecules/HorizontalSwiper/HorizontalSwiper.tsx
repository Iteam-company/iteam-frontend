import React, { FC, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { A11y, Navigation, Pagination } from "swiper";
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
    spaceBetween?: number;
    freeMode?: boolean;
    loop?: boolean;
    loopedSlides?: number;
    pagination?: boolean;
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
}) => {
    const onSwiperHandler = (e: any) => {
        onSwiper && onSwiper(e);
    };
    const onChangeSlideHandler = (e: any) => {
        onChangeSlide && onChangeSlide(e);
    };
    return (
        <StyledSwiper
            ref={swiperRef}
            w={width}
            mh={minHeight}
            mw={maxWidth}
            modules={[Navigation, Pagination, A11y]}
            navigation={navigation}
            pagination={pagination}
            mousewheel={true}
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            loop={loop}
            loopedSlides={loopedSlides}
            spaceBetween={spaceBetween}
            freeMode={freeMode}
            onSwiper={(e: any) => onSwiperHandler(e)}
            onSlideChange={onChangeSlideHandler}
        >
            {children}
        </StyledSwiper>
    );
};
