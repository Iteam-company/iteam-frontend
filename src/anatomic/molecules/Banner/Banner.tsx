import React from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_SIZES, Text } from "@/anatomic/atoms/Text";
import { TEXT_CONTENT } from "@/lib/lang";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";

export const Banner = () => {
    return (
        <FlexColumn mw="778px" mh="200px" justifyContent="space-between">
            <TextTyping
                text={[
                    TEXT_CONTENT.banner.options[0],
                    TEXT_CONTENT.banner.options[1],
                    TEXT_CONTENT.banner.options[2],
                    TEXT_CONTENT.banner.options[3],
                    TEXT_CONTENT.banner.options[4],
                ]}
            />
            <Text size={TEXT_SIZES.medium.xs} color={COLORS.textThird}>
                We offer a range of expert services to help you outsource your
                IT needs, from single developer projects to complex multi-team
                solutions.
            </Text>
        </FlexColumn>
    );
};
