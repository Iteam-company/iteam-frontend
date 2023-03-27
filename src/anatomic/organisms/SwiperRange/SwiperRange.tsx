import { FlexColumn } from "@/anatomic/atoms/Flex";
import { InputRange } from "@/anatomic/atoms/InputRange";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import React, { FC, ReactNode, useRef, useState } from "react";

export const SwiperRange: FC<{ children: ReactNode; maxValue: number }> = ({
    children,
    maxValue,
}) => {
    const [value, setValue] = useState("0");
    const swiperRef = useRef<any>(null);

    const handleSlideTo = (index: number) => {
        swiperRef.current != null &&
            swiperRef.current.swiper.slideTo(index.toString());
    };

    return (
        <FlexColumn w="100%" justifyContent="center" alignItems="center">
            <HorizontalSwiperElem
                swiperRef={swiperRef}
                minHeight="500px"
                width="100%"
                maxWidth="975px"
                navigation={false}
                onChangeSlide={() => {
                    if (swiperRef.current != null) {
                        setValue(
                            swiperRef.current.swiper.activeIndex.toString(),
                        );
                    }
                }}
            >
                {children}
            </HorizontalSwiperElem>
            <InputRange
                max={maxValue}
                min={0}
                step={0.1}
                value={value}
                translateY="-130px"
                onChange={(e: any) => {
                    setValue(Math.ceil(+e.target.value).toString());
                    handleSlideTo(Math.ceil(+e.target.value));
                }}
            />
        </FlexColumn>
    );
};
