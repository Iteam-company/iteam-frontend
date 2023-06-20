import React, { FC, ReactNode, memo } from "react";
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
    slidesPerView?: number | "auto";
    slidesPerGroup?: number;
    spaceBetween?: number;
    freeMode?: boolean;
    loop?: boolean;
    loopedSlides?: number;
    pagination?: boolean;
    className?: string;
    breakpoints?: any;
    grid?: any;
    speed?: any;
    onSlideNext?: any;
    onSlidePrev?: any;
    centeredSlides?: any;
    maxH?: string;
    m?: string;
    ref?: any;
}

export const HorizontalSwiperElem: FC<Props> = memo(
    ({
        children,
        minHeight = "60vh",
        width = "40vw",
        maxWidth,
        onSwiper,
        onChangeSlide,
        maxH,
        swiperRef,
        navigation = true,
        slidesPerView = 1,
        spaceBetween = 50,
        freeMode = false,
        loop,
        loopedSlides = 1,
        pagination,
        className,
        slidesPerGroup = 1,
        breakpoints,
        grid,
        speed,
        onSlideNext,
        onSlidePrev,
        centeredSlides,

        m,
    }) => {
        const onSwiperHandler = (e: any) => {
            onSwiper && onSwiper(e);
        };
        const onChangeSlideHandler = (e: any) => {
            onChangeSlide && onChangeSlide(e);
        };

        const onSlideNextTransitionEnd = (e: any) => {
            onSlideNext && onSlideNext(e);
        };
        const onSlidePrevTransitionEnd = (e: any) => {
            onSlidePrev && onSlidePrev(e);
        };

        return (
            <StyledSwiper
                className={className}
                ref={swiperRef}
                centeredSlides={centeredSlides}
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
                speed={speed}
                initialSlide={0}
                onSlideNextTransitionEnd={onSlideNextTransitionEnd}
                onSlidePrevTransitionEnd={onSlidePrevTransitionEnd}
                m={m}
            >
                {children}
            </StyledSwiper>
        );
    },
);
HorizontalSwiperElem.displayName = "HorizontalSwiperElem";
