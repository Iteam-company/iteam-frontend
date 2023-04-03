import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { ImplementSlide } from "@/anatomic/molecules/ImplementSlide";
import { SwiperSlide } from "swiper/react";
import { AppsInterface } from "@/pages/api/outsourcing";
import { COLORS } from "@/lib/theme/color";

interface Props {
    apps: AppsInterface[];
}

export const AppsImplement: FC<Props> = ({ apps }) => {
    return (
        <FlexColumn w="100%" h="auto" alignItems="center" zIndex="5">
            <Desktop>
                <FlexColumn
                    w="130vw"
                    justifyContent="center"
                    alignItems="center"
                >
                    <HorizontalSwiperElem
                        minHeight="500px"
                        width="100%"
                        maxWidth="100wv"
                        slidesPerView={3}
                        spaceBetween={60}
                        loop={true}
                        loopedSlides={1.1}
                    >
                        {apps &&
                            apps.map((item: any) => (
                                <SwiperSlide
                                    key={item.step}
                                    style={{
                                        borderRadius: "16px",
                                        minHeight: "300px",
                                        background: COLORS.white,
                                        boxShadow:
                                            "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                    }}
                                >
                                    <ImplementSlide
                                        title={item.title}
                                        text={item.text}
                                        step={item.step}
                                    />
                                </SwiperSlide>
                            ))}
                    </HorizontalSwiperElem>
                </FlexColumn>
            </Desktop>

            <Mobile w="100%" alignItems="center">
                <FlexColumn
                    mw="975px"
                    h="100%"
                    w="100%"
                    zIndex="3"
                    gap="20px"
                    style={{ boxSizing: "border-box" }}
                    p="0 20px"
                >
                    <HorizontalSwiperElem
                        minHeight="500px"
                        width="100%"
                        maxWidth="975px"
                        slidesPerView={1}
                        spaceBetween={60}
                    >
                        {apps &&
                            apps.map((item: any) => (
                                <SwiperSlide
                                    key={item.step}
                                    style={{
                                        borderRadius: "16px",
                                        minHeight: "300px",
                                        background: COLORS.white,
                                        boxShadow:
                                            "0px 4px 20px rgba(37, 7, 67, 0.37)",
                                    }}
                                >
                                    <ImplementSlide
                                        title={item.title}
                                        text={item.text}
                                        step={item.step}
                                    />
                                </SwiperSlide>
                            ))}
                    </HorizontalSwiperElem>
                </FlexColumn>
            </Mobile>
        </FlexColumn>
    );
};

const Mobile = styled(FlexColumn)`
    @media all and (min-width: 903px) {
        padding: 0 20px;
        display: none;
    }
`;
const Desktop = styled(FlexColumn)`
    @media all and (max-width: 902px) {
        display: none;
    }
`;
