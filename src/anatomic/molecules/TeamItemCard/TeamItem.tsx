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
import Link from "next/link";
import Image from "next/image";

export const TeamItem: FC<TeamInterface> = memo(
    ({
        name,
        avatar,
        position,
        technology,
        comments,
        experience,
        rate,
        upworkLink,
        rateImage,
    }) => {
        const size = useWindowSize();
        const width = size.width! > 1800 ? "100vw" : "80vw";
        const padding = size.width! > 1800 ? "0 20px 0 0" : "";

        return (
            <>
                <Desktop w="100%" alignItems="center">
                    <FlexRow
                        gap="30px"
                        w={width}
                        mw="1300px"
                        p="0 20px"
                        justifyContent="center"
                    >
                        <TeamItemInfo
                            name={name}
                            avatar={avatar}
                            position={position}
                            rateImage={rateImage!}
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
                                <FlexColumn
                                    w="100%"
                                    justifyContent="end"
                                    alignItems="end"
                                >
                                    <Link
                                        href={upworkLink!}
                                        style={{
                                            color: `${COLORS.textSecondary}`,
                                            fontSize: `${TEXT_SIZES.small.s}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        Follow the link to see more
                                        <div>
                                            <Image
                                                src={UpWorkLink.src}
                                                alt="upwork-logo"
                                                width="90"
                                                height="30"
                                            />
                                        </div>
                                    </Link>
                                </FlexColumn>
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
                        style={{ textAlign: "center" }}
                    >
                        <TeamItemInfo
                            name={name}
                            avatar={avatar}
                            position={position}
                            rateImage={rateImage}
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
                                justifyContent={
                                    size.width! < 500 ? "center" : "end"
                                }
                                alignItems={
                                    size.width! < 500 ? "center" : "end"
                                }
                            >
                                <Link
                                    href={upworkLink || ""}
                                    style={{
                                        color: `${COLORS.textSecondary}`,
                                        fontSize: `${TEXT_SIZES.small.s}`,
                                        textDecoration: "none",
                                    }}
                                >
                                    Follow the link to see more
                                </Link>
                                <Image
                                    src={UpWorkLink.src}
                                    alt="upwork logo"
                                    width="90"
                                    height="30"
                                />
                            </FlexColumn>
                        </FlexColumn>
                    </FlexColumn>
                </Mobile>
            </>
        );
    },
);
TeamItem.displayName = "TeamItem";
