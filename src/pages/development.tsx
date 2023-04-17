import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { memo, useCallback, useEffect, useState } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import client from "@/axios";
import BgImage1 from "@/assets/bgImage/development/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/development/bgImage2.svg";
import BgImage3 from "@/assets/bgImage/development/bgImage3.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { DevelopmentInterface } from "./api/technologies";
import { DevelopmentSwiper } from "@/anatomic/organisms/DevelopmentSwiper";

const Development = () => {
    const [info, setInfo] = useState<DevelopmentInterface[]>([]);

    const getInfo = useCallback(async () => {
        try {
            const { data } = await client.get("/api/technologies");
            setInfo(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <FlexColumn
            h="100%"
            w="100%"
            p="0 0 200px"
            position="relative"
            justifyContent="center"
            alignItems="center"
            style={{ overflow: "hidden" }}
        >
            <BgImage src={BgImage1} top={-4} left={-40} />
            <FlexColumn
                justifyContent="center"
                w="60%"
                alignItems="center"
                p="100px 0 120px"
                gap="30px"
            >
                <Text
                    textAlign="center"
                    color={COLORS.textPrimary}
                    size={TEXT_SIZES.large.xs}
                    weight={TEXT_WEIGHTS.medium}
                    mobileSize={TEXT_SIZES.small.xl}
                    type={TEXT_TYPES.title}
                >
                    Technology we use
                </Text>

                <Text
                    textAlign="center"
                    color={COLORS.textThird}
                    size={TEXT_SIZES.medium.xs}
                    letterSpacing={LETTER_SPACING.s}
                    mobileSize={TEXT_SIZES.small.l}
                >
                    Our team uses a wide range of technologies to ensure and
                    accelerate your business growth
                </Text>
            </FlexColumn>
            <FlexColumn
                w="100%"
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                <BgImage src={BgImage2} right={-54} bottom={5} />
                <BgImage src={BgImage3} right={38} bottom={-60} />
                {info.map((item, index) => (
                    <FlexColumn
                        justifyContent="center"
                        alignItems="center"
                        w="100%"
                        p="40px 0 80px"
                        gap="50px"
                        key={index}
                        zIndex="2"
                        bg={index == 1 ? COLORS.white : ""}
                    >
                        <Text
                            textAlign="center"
                            color={COLORS.textPrimary}
                            size={TEXT_SIZES.large.xs}
                            mobileSize={TEXT_SIZES.small.xl}
                        >
                            {item.title}
                        </Text>
                        <DevelopmentSwiper technologies={item.info} />
                    </FlexColumn>
                ))}
            </FlexColumn>
        </FlexColumn>
    );
};

export default memo(Development);
