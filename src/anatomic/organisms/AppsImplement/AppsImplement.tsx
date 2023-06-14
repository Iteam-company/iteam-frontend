import React, { FC, memo, useRef, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { ImplementSlide } from "@/anatomic/molecules/ImplementSlide";
import { SwiperSlide } from "swiper/react";
import { COLORS } from "@/lib/theme/color";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
export interface AppsInterface {
    step: number;
    title: string;
    text: string;
}
interface Props {
    apps: AppsInterface[];
}

export const AppsImplement: FC<Props> = memo(({ apps }) => {
    const swiperRef = useRef<JSX.Element>(null);
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <FlexColumn w="100%" h="auto" alignItems="center" zIndex="5">
            <Desktop>
                <FlexColumn
                    w="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <HorizontalSwiperElem
                        minHeight="500px"
                        width="100%"
                        maxWidth="1450px"
                        slidesPerView={3}
                        spaceBetween={60}
                        loop={false}
                        loopedSlides={1}
                        swiperRef={swiperRef}
                        centeredSlides={true}
                        onSlideNext={() => {
                            activeIndex < apps.length
                                ? setActiveIndex(activeIndex + 1)
                                : setActiveIndex(1);
                        }}
                        onSlidePrev={() => {
                            activeIndex == 1
                                ? setActiveIndex(apps.length)
                                : setActiveIndex(activeIndex - 1);
                        }}
                    >
                        {apps.map((item: any, index) => (
                            <SwiperSlide
                                key={item.step}
                                style={{
                                    transition: "0.3s all",
                                    borderRadius: "16px",
                                    minHeight: "300px",
                                    background: COLORS.white,
                                    transform:
                                        activeIndex == index + 1
                                            ? "scale(1)"
                                            : "scale(0.9)",
                                    height:
                                        activeIndex == index + 1
                                            ? "400px"
                                            : "200px",
                                    boxSizing: "content-box",
                                    boxShadow:
                                        activeIndex == index + 1
                                            ? "0px 4px 20px 0px rgba(37, 7, 67, 0.37)"
                                            : "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                }}
                            >
                                <ImplementSlide
                                    title={item.title}
                                    text={item.text}
                                    step={item.step}
                                    isActive={activeIndex == index + 1}
                                />
                            </SwiperSlide>
                        ))}
                    </HorizontalSwiperElem>
                </FlexColumn>
            </Desktop>
            <Mobile h="100%" w="100%" alignItems="center">
                <FlexColumn
                    mw="975px"
                    h="100%"
                    w="100%"
                    zIndex="3"
                    gap="20px"
                    style={{ boxSizing: "border-box" }}
                >
                    <HorizontalSwiperElem
                        minHeight="500px"
                        width="100%"
                        maxWidth="1450px"
                        slidesPerView={1}
                        spaceBetween={60}
                        loop={false}
                        loopedSlides={1}
                        swiperRef={swiperRef}
                        centeredSlides={true}
                        onSlideNext={() => {
                            activeIndex < apps.length
                                ? setActiveIndex(activeIndex + 1)
                                : setActiveIndex(1);
                        }}
                        onSlidePrev={() => {
                            activeIndex == 1
                                ? setActiveIndex(apps.length)
                                : setActiveIndex(activeIndex - 1);
                        }}
                    >
                        {apps.map((item: AppsInterface, index: number) => (
                            <SwiperSlide
                                key={item.step}
                                style={{
                                    transition: "0.3s all",
                                    borderRadius: "16px",
                                    minHeight: "300px",
                                    background: COLORS.white,
                                    transform:
                                        activeIndex == index + 1
                                            ? "scale(1)"
                                            : "scale(0.9)",
                                    height:
                                        activeIndex == index + 1
                                            ? "400px"
                                            : "200px",
                                    boxSizing: "content-box",
                                    boxShadow:
                                        activeIndex == index + 1
                                            ? "0px 4px 20px 0px #904FD1"
                                            : "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                }}
                            >
                                <ImplementSlide
                                    title={item.title}
                                    text={item.text}
                                    step={item.step}
                                    isActive={activeIndex == index + 1}
                                />
                            </SwiperSlide>
                        ))}
                    </HorizontalSwiperElem>
                </FlexColumn>
            </Mobile>
        </FlexColumn>
    );
});

AppsImplement.displayName = "AppsImplement";

export const Mobile = styled(FlexColumn)`
    @media all and (min-width: 903px) {
        padding: 0 20px;
        display: none;
    }
`;
export const Desktop = styled(FlexColumn)`
    @media all and (max-width: 902px) {
        display: none;
    }
`;
