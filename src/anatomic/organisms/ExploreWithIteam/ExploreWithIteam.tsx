import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import {
    Box,
    BoxForPinkSpot,
    BoxForPreview,
    BoxForSpot,
    BoxForText,
    BoxHover,
    ExploreBox,
} from "./styled";
import { FC, Fragment } from "react";
import Link from "next/link";
import { HoverBox } from "@/anatomic/atoms/HoverBox/HoverBox";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Button } from "@/anatomic/atoms/Button";
import { useWindowSize } from "@/hooks/useWindowSize";

type Props = {
    data: any;
};

export const ExploreWithIteam: FC<Props> = ({ data }) => {
    const size = useWindowSize();
    return (
        <AdaptContainer>
            <FlexColumn
                w="100%"
                justifyContent="center"
                alignItems="center"
                p="2px 0 2px 0"
            >
                <FlexColumn w="80%">
                    <FlexColumn p="0 0 45px 0">
                        <Text
                            size={TEXT_SIZES.medium.largeM}
                            weight={TEXT_WEIGHTS.medium}
                            color={COLORS.light}
                            lineHeight="39px"
                        >
                            Explore with iTeam:
                        </Text>
                    </FlexColumn>
                    <div
                        style={
                            size.width! < 920 ? { position: "relative" } : {}
                        }
                    >
                        <BoxForPinkSpot />
                    </div>
                    <FlexRow
                        w="100%"
                        flexWrap="wrap"
                        gridGap="10px"
                        gap="10px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {data.map((block: any) => {
                            return (
                                <>
                                    <ExploreBox
                                        key={`${block.backgroundImage.data.attributes.url}_${block.id}`}
                                        backgroundImage={`url(${block.backgroundImage.data.attributes.url})`}
                                    >
                                        <HoverBox>
                                            <FlexColumn
                                                justifyContent="space-between"
                                                h="100%"
                                            >
                                                <BoxForSpot t="10%" l="5%" />
                                                {/* <BoxForText></BoxForText> */}
                                                <BoxForPreview>
                                                    <FlexColumn
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Button
                                                            href={
                                                                block.linkToPreview
                                                            }
                                                            gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                                            variant={
                                                                BUTTON_VARIANTS.gradient_link
                                                            }
                                                            h={
                                                                size.width! <
                                                                600
                                                                    ? "30px"
                                                                    : null
                                                            }
                                                            w={
                                                                size.width! <
                                                                600
                                                                    ? "180px"
                                                                    : null
                                                            }
                                                            m={
                                                                size.width! <
                                                                600
                                                                    ? "auto"
                                                                    : null
                                                            }
                                                            label={
                                                                <Text
                                                                    color={
                                                                        COLORS.dark
                                                                    }
                                                                    weight={
                                                                        TEXT_WEIGHTS.main
                                                                    }
                                                                    size={
                                                                        size.width! <
                                                                        600
                                                                            ? TEXT_SIZES
                                                                                  .small
                                                                                  .m
                                                                            : TEXT_SIZES
                                                                                  .small
                                                                                  .l
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            block.linkToPreview ||
                                                                            "#"
                                                                        }
                                                                        style={{
                                                                            color: "inherit",
                                                                            textDecoration:
                                                                                "none",
                                                                        }}
                                                                    >
                                                                        {
                                                                            block.subtitleForPreview
                                                                        }
                                                                    </Link>
                                                                </Text>
                                                            }
                                                        />
                                                    </FlexColumn>
                                                </BoxForPreview>
                                            </FlexColumn>
                                        </HoverBox>
                                    </ExploreBox>
                                </>
                            );
                        })}
                    </FlexRow>
                </FlexColumn>
            </FlexColumn>
        </AdaptContainer>
    );
};
