import React, { FC, memo } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { StyledSwiper } from "./styled";
import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";
import { Desktop, Mobile } from "../ProjectSlide/styled";

export const CommentSlider: FC<{ comments?: string[]; width?: string }> = memo(
    ({ comments, width = "62vw" }) => {
        return (
            <StyledSwiper
                style={{
                    height: "100%",
                    width: width,
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
                                background: COLORS.white,
                                height: "20vh",
                            }}
                        >
                            <Desktop
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
                                    <ItalicText
                                        weight="300"
                                        size={TEXT_SIZES.small.xl}
                                        color={COLORS.textSecondary}
                                    >
                                        &quot;{elem}&quot;
                                    </ItalicText>
                                </FlexColumn>
                            </Desktop>
                            <Mobile
                                w="100%"
                                h="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <FlexColumn
                                    w="80%"
                                    h="100%"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <ItalicText
                                        weight="300"
                                        size={TEXT_SIZES.small.xl}
                                        mobileSize={TEXT_SIZES.small.s}
                                        color={COLORS.textSecondary}
                                    >
                                        &quot;{elem}&quot;
                                    </ItalicText>
                                </FlexColumn>
                            </Mobile>
                        </SwiperSlide>
                    ))}
            </StyledSwiper>
        );
    },
);
const ItalicText = styled(Text)`
    font-style: italic;
`;
