import React, { FC, memo } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { ItalicText, StyledSwiper } from "./styled";
import { COLORS } from "@/lib/theme/color";
import { Desktop, Mobile } from "../ProjectSlide/styled";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { useWindowSize } from "@/hooks/useWindowSize";

interface Props {
    comments?: CommentsI[];
    width?: string;
}
export interface CommentsI {
    text: string;
}

export const CommentSlider: FC<Props> = memo(({ comments, width = "62vw" }) => {
    const size = useWindowSize();
    const windowWidth =
        size.width! > 1650 ? "100%" : size.width! < 700 ? "100%" : width;
    return (
        <StyledSwiper
            style={{
                height: "100%",
                width: windowWidth,
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
                                {/* <ItalicText
                                    weight="300"
                                    size={
                                        size.width! < 1000
                                            ? TEXT_SIZES.small.l
                                            : TEXT_SIZES.small.xl
                                    }
                                    color={COLORS.textSecondary}
                                >
                                    &quot;{elem?.text}&quot;
                                </ItalicText> */}
                                <Text
                                    weight={TEXT_WEIGHTS.normal}
                                    size={
                                        size.width! < 1000
                                            ? TEXT_SIZES.small.m
                                            : TEXT_SIZES.small.l
                                    }
                                    color={COLORS.textSecondary}
                                >
                                    &quot;{elem?.text}&quot;
                                </Text>
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
                                <Text
                                    weight={TEXT_WEIGHTS.normal}
                                    size={
                                        size.width! < 1000
                                            ? TEXT_SIZES.small.m
                                            : TEXT_SIZES.small.l
                                    }
                                    color={COLORS.textSecondary}
                                >
                                    &quot;{elem?.text}&quot;
                                </Text>
                            </FlexColumn>
                        </Mobile>
                    </SwiperSlide>
                ))}
        </StyledSwiper>
    );
});
CommentSlider.displayName = "CommentSlider";
