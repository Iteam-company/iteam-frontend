import React, { FC } from "react";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import UpworkIcon from "@/assets/icon/upwork.svg";
import StarsIcon from "@/assets/icon/stars.svg";
import TopIcon from "@/assets/icon/top.svg";
import { Avatar } from "./styled";
import { Desktop, Mobile } from "../ProjectSlide/styled";
import { getStrapiImage } from "@/hooks/useStrapiContentData";

export const TeamItemInfo: FC<{
    avatar: any;
    name: string;
    position: string;
}> = ({ avatar, name, position }) => {
    const { url } = avatar.data.attributes;

    return (
        <>
            <Desktop w="100%">
                <FlexColumn gap="10px">
                    <Avatar image={getStrapiImage(url)} />
                    <Text
                        weight={TEXT_WEIGHTS.medium}
                        color={COLORS.dark}
                        size={TEXT_SIZES.small.xl}
                        textTransform="uppercase"
                    >
                        {name}
                    </Text>
                    <Text
                        size={TEXT_SIZES.small.l}
                        color={COLORS.textSecondary}
                    >
                        {position}
                    </Text>
                    <FlexRow gap="10px" alignItems="center">
                        <img src={UpworkIcon.src} />
                        <Text
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.small.m}
                            color={COLORS.dark}
                        >
                            5.0
                        </Text>
                    </FlexRow>
                    <img src={StarsIcon.src} />

                    <FlexRow gap="10px" alignItems="center">
                        <img src={TopIcon.src} />
                        <Text
                            weight={TEXT_WEIGHTS.main}
                            color={COLORS.textMinor}
                            size={TEXT_SIZES.small.s}
                        >
                            TOP RATED PLUS
                        </Text>
                    </FlexRow>
                </FlexColumn>
            </Desktop>

            <Mobile w="100%" alignItems="space-between">
                <FlexRow gap="20px" w="90%" justifyContent="space-between">
                    <FlexColumn>
                        <Avatar image={getStrapiImage(url)} />
                    </FlexColumn>

                    <FlexRow w="100%" gap="15px" justifyContent="space-between">
                        <FlexColumn w="100%" gap="8px">
                            <Text
                                weight={TEXT_WEIGHTS.medium}
                                color={COLORS.dark}
                                size={TEXT_SIZES.small.m}
                                textTransform="uppercase"
                            >
                                {name}
                            </Text>
                            <Text
                                size={TEXT_SIZES.small.s}
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
                                    size={TEXT_SIZES.small.m}
                                    color={COLORS.dark}
                                >
                                    5.0
                                </Text>
                            </FlexRow>
                            <img src={StarsIcon.src} />

                            <FlexRow gap="10px" alignItems="center">
                                <img src={TopIcon.src} />
                                <Text
                                    weight={TEXT_WEIGHTS.main}
                                    color={COLORS.textMinor}
                                    size={TEXT_SIZES.small.s}
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
