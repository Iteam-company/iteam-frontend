import React, { FC, memo } from "react";
import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { TeamItemInfo } from "./TeamItemInfo";
import { CommentSlider } from "./CommentSlider";
import UpWorkLink from "@/assets/icon/upWorkLink.svg";
import { TeamItemCard } from "./TeamItemCard";
import { Desktop, Mobile } from "../ProjectSlide/styled";
import { TeamInterface } from "@/pages/team";
import { useWindowSize } from "@/hooks/useWindowSize";

export const TeamItem: FC<TeamInterface> = memo(
    ({ name, avatar, position, technology, comments, experience, rate }) => {
        const size = useWindowSize();
        const width = size.width! > 1800 ? '100%' : '80vw'
        const padding = size.width! > 1800 ? '0 20px 0 0' : '';
        return (
            <>
                <Desktop w="100%" alignItems="center">
                    <FlexRow
                        gap="30px"
                        w={width}
                        p="0 20px"
                        justifyContent="center"
                    >
                        <TeamItemInfo
                            name={name}
                            avatar={avatar}
                            position={position}
                        />
                        <FlexColumn w="80%" gap="40px" p={padding}>
                            <TeamItemCard
                                technology={technology}
                                experience={experience}
                                rate={rate}
                            />
                            <CommentSlider comments={comments} />
                            <FlexColumn
                                w="100%"
                                justifyContent="end"
                                alignItems="end"
                            >
                                <Text
                                    color={COLORS.textSecondary}
                                    size={TEXT_SIZES.small.s}
                                >
                                    Follow the link to see more
                                </Text>
                                <img src={UpWorkLink.src} />
                            </FlexColumn>
                        </FlexColumn>
                    </FlexRow>
                </Desktop>

                <Mobile>
                    <FlexColumn
                        gap="30px"
                        w="90vw"
                        p="0 20px"
                        justifyContent="center"
                    >
                        <TeamItemInfo
                            name={name}
                            avatar={avatar}
                            position={position}
                        />
                        <FlexColumn w="100%" gap="40px">
                            <TeamItemCard
                                technology={technology}
                                experience={experience}
                                rate={rate}
                            />
                            <CommentSlider comments={comments} width="90vw" />

                            <FlexColumn
                                w="100%"
                                justifyContent="end"
                                alignItems="end"
                            >
                                <Text
                                    color={COLORS.textSecondary}
                                    size={TEXT_SIZES.small.s}
                                >
                                    Follow the link to see more
                                </Text>
                                <img src={UpWorkLink.src} />
                            </FlexColumn>
                        </FlexColumn>
                    </FlexColumn>
                </Mobile>
            </>
        );
    },
);
TeamItem.displayName = "TeamItem";
