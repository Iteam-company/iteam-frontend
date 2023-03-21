import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text } from "@/anatomic/atoms/Text";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { StyledSwiper } from "./styled";

export const CommentSlider: FC<{ comments?: string[] }> = ({ comments }) => {
    return (
        <StyledSwiper
            style={{
                height: "100%",
                width: "62vw",
            }}
            spaceBetween={50}
            modules={[Navigation, Pagination, A11y]}
            navigation={true}
        >
            {comments &&
                comments.map((elem, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            background: "#FFFFFF",
                            height: "20vh",
                        }}
                    >
                        <FlexColumn
                            w="100%"
                            h="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <FlexColumn
                                w="90%"
                                h="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text>&quot;{elem}&quot;</Text>
                            </FlexColumn>
                        </FlexColumn>
                    </SwiperSlide>
                ))}
        </StyledSwiper>
    );
};
