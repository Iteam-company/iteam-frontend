import React from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { TEXT_CONTENT } from "@/lib/lang";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";
import BannerBg from "@/assets/icon/bannerBG.svg";

export const Banner = () => {
    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            h="100%"
            w="100%"
            bg={`url(${BannerBg.src})`}
            position="relative"
            bgSize="cover"
        >
            <FlexColumn>
                <Text
                    size={TEXT_SIZES.xxxl}
                    letterSpacing={LETTER_SPACING.xl}
                    color={COLORS.black}
                    weight={TEXT_WEIGHTS.bold}
                >
                    {TEXT_CONTENT.banner.text}
                </Text>
                <TextTyping
                    textStyles={{
                        size: TEXT_SIZES.xxxl,
                        letterSpacing: LETTER_SPACING.xl,
                        color: COLORS.black,
                        weight: TEXT_WEIGHTS.bold,
                    }}
                    text={[
                        TEXT_CONTENT.banner.options[0],
                        TEXT_CONTENT.banner.options[1],
                        TEXT_CONTENT.banner.options[2],
                        TEXT_CONTENT.banner.options[3],
                        TEXT_CONTENT.banner.options[4],
                    ]}
                />
            </FlexColumn>
        </FlexColumn>
    );
};
