import React, { FC } from "react";
import Image from "next/image";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import UpworkIcon from "@/assets/icon/upwork.svg";
import StarsIcon from "@/assets/icon/stars.svg";
import TopIcon from "@/assets/icon/top.svg";
import { Avatar } from "./styled";
import { Desktop, Mobile } from "../ProjectSlide/styled";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { useWindowSize } from "@/hooks/useWindowSize";
import Risingtalent from "../../../assets/rates/risingTalent.png";
import TopRated from "../../../assets/rates/topratedsvg.svg";
import TopRatedPlus from "../../../assets/rates/topratedplus.svg";

export const TeamItemInfo: FC<{
    avatar: any;
    name: string;
    position: string;
    rateImage: string;
}> = ({ avatar, name, position, rateImage }) => {
    const { url } = avatar.data.attributes;
    const size = useWindowSize();
    const displayForm = size.width! < 370 ? "none" : "block";

    const rated = {
        TopRatedPlus: (
            <FlexRow gap="10px" alignItems="center">
                <Image
                    src={TopRatedPlus}
                    width={size.width! > 1000 ? 13 : 10}
                    height={size.width! > 1000 ? 13 : 10}
                    alt="rated-image"
                />
                <Text
                    weight={TEXT_WEIGHTS.main}
                    color={COLORS.textMinor}
                    size={
                        size.width! > 1000
                            ? TEXT_SIZES.small.s
                            : TEXT_SIZES.small.xs
                    }
                >
                    TOP RATED PLUS
                </Text>
            </FlexRow>
        ),
        TopRated: (
            <FlexRow gap="10px" alignItems="center">
                <Image
                    src={TopRated}
                    width={size.width! > 1000 ? 13 : 10}
                    height={size.width! > 1000 ? 13 : 10}
                    alt="rated-image"
                />
                <Text
                    weight={TEXT_WEIGHTS.main}
                    color={COLORS.textMinor}
                    size={
                        size.width! > 1000
                            ? TEXT_SIZES.small.s
                            : TEXT_SIZES.small.xs
                    }
                >
                    TOP RATED
                </Text>
            </FlexRow>
        ),
        RisingTalent: (
            <Image
                src={Risingtalent}
                width={size.width! > 1000 ? 88 : 80}
                height={size.width! > 1000 ? 14 : 10}
                alt="rated-image"
            />
        ),
    };

    const convertText = (param: string): keyof typeof rated => {
        let words = param.split(" ");
        let capitalizedWords = words.map(function (word: string) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        let convertedString = capitalizedWords.join("");

        return convertedString as keyof typeof rated;
    };

    const rateLogo = convertText(rateImage);

    return (
        <>
            <Desktop w="100%">
                <FlexColumn gap="10px">
                    <Avatar image={getStrapiImage(url)} />
                    <Text
                        weight={TEXT_WEIGHTS.bold}
                        color={COLORS.greyTitle}
                        size={TEXT_SIZES.small.l}
                        textTransform="uppercase"
                    >
                        {name}
                    </Text>
                    <Text
                        size={TEXT_SIZES.small.m}
                        color={COLORS.textSecondary}
                    >
                        {position}
                    </Text>
                    <FlexRow gap="10px" alignItems="center">
                        <Image
                            src={UpworkIcon.src}
                            width={28}
                            height={28}
                            alt="upwork logo"
                        />
                        <Text
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.small.m}
                            color={COLORS.dark}
                        >
                            5.0
                        </Text>
                    </FlexRow>
                    <Image
                        src={StarsIcon.src}
                        width={76}
                        height={12}
                        alt="upwork stars"
                    />

                    {rated[rateLogo]}
                </FlexColumn>
            </Desktop>

            <Mobile w="100%" alignItems="space-between">
                <FlexRow
                    gap="20px"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <FlexColumn style={{ flex: "1 1 60%" }} alignItems="center">
                        <Avatar image={getStrapiImage(url)} />
                    </FlexColumn>

                    <FlexRow
                        w="100%"
                        gap="15px"
                        justifyContent="space-between"
                        style={size.width! < 370 ? { flex: "1 1 40%" } : {}}
                    >
                        <FlexColumn
                            w="100%"
                            gap={size.height! > 600 ? "8px" : "5px"}
                        >
                            <Text
                                weight={TEXT_WEIGHTS.medium}
                                color={COLORS.dark}
                                size={
                                    size.height! > 600
                                        ? TEXT_SIZES.small.m
                                        : TEXT_SIZES.small.s
                                }
                                textTransform="uppercase"
                            >
                                {name}
                            </Text>
                            <Text
                                size={
                                    size.height! > 600
                                        ? TEXT_SIZES.small.s
                                        : TEXT_SIZES.small.xs
                                }
                                color={COLORS.textSecondary}
                            >
                                {position}
                            </Text>
                        </FlexColumn>

                        <FlexColumn w="100%" gap="8px">
                            <div style={{ display: `${displayForm}` }}>
                                <FlexRow gap="10px" alignItems="center">
                                    <Image
                                        src={UpworkIcon.src}
                                        width={28}
                                        height={28}
                                        alt="upwork logo"
                                    />
                                    <Text
                                        weight={TEXT_WEIGHTS.main}
                                        size={TEXT_SIZES.small.m}
                                        color={COLORS.dark}
                                    >
                                        5.0
                                    </Text>
                                </FlexRow>
                                <Image
                                    src={StarsIcon.src}
                                    width={76}
                                    height={12}
                                    alt="upwork stars"
                                />

                                <FlexRow gap="10px" alignItems="center">
                                    {rated[rateLogo]}
                                </FlexRow>
                            </div>
                        </FlexColumn>
                    </FlexRow>
                </FlexRow>
            </Mobile>
        </>
    );
};
