import React, { FC } from "react";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import UpworkIcon from "@/assets/icon/upwork.svg";
import StarsIcon from "@/assets/icon/stars.svg";
import TopIcon from "@/assets/icon/top.svg";
import { Avatar } from "./styled";

export const TeamItemInfo: FC<{
    avatar: string;
    name: string;
    position: string;
}> = ({ avatar, name, position }) => {
    return (
        <FlexColumn gap="10px" w="30%">
            <Avatar image={avatar} />
            <Text
                weight={TEXT_WEIGHTS.main}
                color={COLORS.black}
                size={TEXT_SIZES.s}
                textTransform="uppercase"
            >
                {name}
            </Text>
            <Text size={TEXT_SIZES.xs}>{position}</Text>
            <FlexRow gap="10px" alignItems="center">
                <img src={UpworkIcon.src} />
                <Text
                    weight={TEXT_WEIGHTS.main}
                    size={TEXT_SIZES.xxs}
                    color={COLORS.black}
                >
                    5.0
                </Text>
            </FlexRow>
            <img src={StarsIcon.src} />

            <FlexRow gap="10px" alignItems="center">
                <img src={TopIcon.src} />
                <Text size={TEXT_SIZES.xxxs}>TOP RATED PLUS</Text>
            </FlexRow>
        </FlexColumn>
    );
};
