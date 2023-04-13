import { FlexColumn } from "@/anatomic/atoms/Flex";
import { InputRange } from "@/anatomic/atoms/InputRange";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import React, { FC, ReactNode, memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";

export const SwiperRange: FC<{ children: ReactNode; maxValue: number }> = memo(
    ({ children, maxValue }) => {
        const swiperRef = useRef<any>(null);
        const inputRef = useRef<any>(null);
        const handleSlideTo = (index: number) => {
            swiperRef.current &&
                swiperRef.current.swiper.slideTo(index.toString());
        };

        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.value = "0";
            }
        }, [inputRef.current]);

        return (
            <FlexColumn w="100%" justifyContent="center" alignItems="center">
                <Swiper
                    swiperRef={swiperRef}
                    minHeight="350px"
                    width="100%"
                    speed={1500}
                    maxWidth="975px"
                    navigation={false}
                    onChangeSlide={() => {
                        if (inputRef.current) {
                            gsap.fromTo(
                                "#range-input",
                                { value: inputRef.current.value },
                                {
                                    value: swiperRef.current.swiper.activeIndex,
                                    duration: 1,
                                },
                            );
                        }
                    }}
                >
                    {children}
                </Swiper>
                <InputRange
                    id="range-input"
                    inputRef={inputRef}
                    max={maxValue}
                    min={0}
                    step={0.0001}
                    translateY="-60px"
                    onChange={(e: any) => {
                        handleSlideTo(Math.round(+e.target.value));
                    }}
                />
            </FlexColumn>
        );
    },
);

const Swiper = styled(HorizontalSwiperElem)`
    background: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
    padding: 0;
`;
SwiperRange.displayName = "SwiperRange";
