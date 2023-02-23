import React, { FC } from "react";
import styled from "styled-components";
import { TeamInterface } from "@/pages/api/team";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import UpworkIcon from "@/assets/icon/upwork.svg";
import StarsIcon from "@/assets/icon/stars.svg";
import TopIcon from "@/assets/icon/top.svg";

export const CardElem: FC<TeamInterface> = ({ name, avatar, position }) => {
    return (
        <Card className="galleryBoxIn">
            <FlexColumn bg="white" zIndex="100">
                <FlexRow gap="30px" alignItems="start">
                    <FlexColumn gap="20px" w="30%">
                        <Avatar image={avatar} />
                        <FlexColumn gap="10px">
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

                            <FlexRow gap="10px" alignItems="center">
                                <img src={TopIcon.src} />
                                <Text size={TEXT_SIZES.xxxs}>
                                    TOP RATED PLUS
                                </Text>
                            </FlexRow>
                        </FlexColumn>
                    </FlexColumn>

                    <FlexColumn gap="10px">
                        <FlexColumn>
                            <Text
                                weight={TEXT_WEIGHTS.main}
                                color={COLORS.black}
                                size={TEXT_SIZES.s}
                            >
                                {name}
                            </Text>
                            <Text size={TEXT_SIZES.xs}>{position}</Text>
                        </FlexColumn>

                        <Text
                            color="#039B03"
                            weight={TEXT_WEIGHTS.main}
                            letterSpacing="0.5px"
                        >
                            Fullstack React Node MERN Developer, Long-term, only
                            individual contributors
                        </Text>
                        <FlexRow w="100%" alignItems="center" gap="20px">
                            <img src={StarsIcon.src} />

                            <Text
                                weight={TEXT_WEIGHTS.main}
                                size={TEXT_SIZES.xxs}
                                color={COLORS.black}
                            >
                                5.0
                            </Text>
                            <Text size={TEXT_SIZES.xxxs}>
                                May 2, 2022 - Oct 17, 2022
                            </Text>
                        </FlexRow>

                        <FlexRow justifyContent="space-between" w="100%">
                            <Text
                                weight={TEXT_WEIGHTS.main}
                                size={TEXT_SIZES.xxs}
                                color={COLORS.black}
                            >
                                $18,660.00
                            </Text>
                            <Text
                                weight={TEXT_WEIGHTS.main}
                                size={TEXT_SIZES.xxs}
                                color={COLORS.black}
                            >
                                $20.00 /hr
                            </Text>
                            <Text
                                weight={TEXT_WEIGHTS.main}
                                size={TEXT_SIZES.xxs}
                                color={COLORS.black}
                            >
                                993 hours
                            </Text>
                        </FlexRow>
                    </FlexColumn>
                </FlexRow>
            </FlexColumn>
        </Card>
    );
};
const Card = styled(FlexColumn)`
    padding: 20px;
    border-radius: 10px;
    position: absolute;
    background-color: white;
    z-index: 0;
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
`;
const Avatar = styled.div<{ image: any }>`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${({ image }) => image});
`;
