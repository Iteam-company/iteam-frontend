import React, { FC } from "react";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import UpworkIcon from "@/assets/icon/upwork.svg";
import StarsIcon from "@/assets/icon/stars.svg";
import TopIcon from "@/assets/icon/top.svg";
import { Avatar } from "./styled";
import { Desktop, Mobile } from "../ProjectSlide/styled";

export const TeamItemInfo: FC<{
    avatar: string;
    name: string;
    position: string;
}> = ({ avatar, name, position }) => {
    return (
        <>
            <Desktop w="100%">
                <FlexColumn gap="10px">
                    <Avatar image={avatar} />
                    <Text
                        weight={TEXT_WEIGHTS.medium}
                        color={COLORS.black}
                        size={TEXT_SIZES.s}
                        textTransform="uppercase"
                    >
                        {name}
                    </Text>
                    <Text size={TEXT_SIZES.xs} color={COLORS.textSecondary}>
                        {position}
                    </Text>
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
                        <Text
                            weight={TEXT_WEIGHTS.main}
                            color="#BFBFBF"
                            size={TEXT_SIZES.xxxs}
                        >
                            TOP RATED PLUS
                        </Text>
                    </FlexRow>
                </FlexColumn>
            </Desktop>

            <Mobile w="100%" alignItems="space-between">
                <FlexRow gap="20px" w="90%" justifyContent="space-between">
                    <FlexColumn>
                        <Avatar image={avatar} />
                    </FlexColumn>

                    <FlexRow w="100%" gap="15px" justifyContent="space-between">
                        <FlexColumn w="100%" gap="8px">
                            <Text
                                weight={TEXT_WEIGHTS.medium}
                                color={COLORS.black}
                                size={TEXT_SIZES.xxs}
                                textTransform="uppercase"
                            >
                                {name}
                            </Text>
                            <Text
                                size={TEXT_SIZES.xxxs}
                                color={COLORS.textSecondary}
                            >
                                {position}
                            </Text>
                        </FlexColumn>

                        <FlexColumn w="100%" gap="8px">
                            <FlexRow gap="10px" alignItems="center">
                                <img
                                    src={UpworkIcon.src}
                                    style={{ height: "20px" }}
                                />
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
                                <Text
                                    weight={TEXT_WEIGHTS.main}
                                    color="#BFBFBF"
                                    size={TEXT_SIZES.xxxs}
                                >
                                    TOP RATED PLUS
                                </Text>
                            </FlexRow>
                        </FlexColumn>
                    </FlexRow>
                </FlexRow>
            </Mobile>
        </>
    );
};
