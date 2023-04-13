import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC, memo, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Icon } from "@/lib/pageStyles/developmentStyles";
import { InfoInterface } from "@/pages/api/technologies";
import { motion } from "framer-motion";
import { Dot, SwiperElem } from "./styled";
import { TechnologiesProps } from "./DevelopmentSwiper";

export const DevelopmentDesktop: FC<TechnologiesProps> = memo(
    ({ technologies = [] }) => {
        const [value, setValue] = useState(0);
        const swiperRef = useRef<any>(null);

        return (
            <FlexColumn w="90vw" justifyContent="center" alignItems="center">
                <SwiperElem
                    swiperRef={swiperRef}
                    minHeight="auto"
                    width="100%"
                    maxWidth="1300px"
                    slidesPerView={5}
                    slidesPerGroup={5}
                    spaceBetween={60}
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
                                <Icon src={elem.icon.src} />
                                <FlexColumn
                                    w="100%"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Text
                                        size={TEXT_SIZES.small.xl}
                                        weight={TEXT_WEIGHTS.main}
                                        color={COLORS.textPrimary}
                                    >
                                        {elem.title}
                                    </Text>
                                    <Text
                                        size={TEXT_SIZES.small.m}
                                        weight={TEXT_WEIGHTS.thin}
                                        textAlign="center"
                                    >
                                        {elem.description}
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
