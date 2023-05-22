import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC, memo, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Dot, SwiperElem } from "./styled";
import { TechnologiesProps } from "./DevelopmentSwiper";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { Icon } from "@/lib/pageStyles/developmentStyles";
import { InfoInterface } from "@/pages/development";

export const DevelopmentMobile: FC<TechnologiesProps> = memo(
    ({ technologies = [] }) => {
        const [value, setValue] = useState(0);
        const swiperRef = useRef<any>(null);

        return (
            <FlexColumn w="90vw" justifyContent="center" alignItems="center">
                <SwiperElem
                    swiperRef={swiperRef}
                    minHeight="auto"
                    width="100%"
                    slidesPerView={3}
                    navigation={false}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    isCentered={technologies.length < 6}
                    onChangeSlide={() => {
                        if (swiperRef.current != null) {
                            setValue(swiperRef.current.swiper.activeIndex);
                        }
                    }}
                >
                    {technologies.map((elem: InfoInterface, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                display: "flex",
                                padding: "5px 0",
                                alignItems: "center",
                                zIndex: 4,
                                width: "100px",
                            }}
                        >
                            <FlexColumn
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                                gap="16px"
                                as={motion.a}
                                href={elem.href}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ textDecoration: "none" }}
                            >
                                <Icon
                                    src={getStrapiImage(
                                        elem.icon.data.attributes.url,
                                    )}
                                />
                                <FlexColumn
                                    w="100%"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Text
                                        size={TEXT_SIZES.small.xl}
                                        weight={TEXT_WEIGHTS.main}
                                        color={COLORS.textPrimary}
                                        mobileSize={TEXT_SIZES.small.m}
                                    >
                                        {elem.title}
                                    </Text>
                                </FlexColumn>
                            </FlexColumn>
                        </SwiperSlide>
                    ))}
                </SwiperElem>

                {technologies.length > 5 && (
                    <FlexRow gap="14px" p="50px 0 0">
                        {technologies.map((elem, index) => {
                            let counter = 0;
                            if ((index + 1) % 5 === 0) {
                                counter += 1;
                                return <Dot key={index} isActive={value < 1} />;
                            } else if (
                                index + 1 == technologies.length &&
                                technologies.length / 5 > counter
                            ) {
                                return (
                                    <Dot key={index} isActive={value >= 1} />
                                );
                            } else {
                                return null;
                            }
                        })}
                    </FlexRow>
                )}
            </FlexColumn>
        );
    },
);
DevelopmentMobile.displayName = "DevelopmentMobile";
