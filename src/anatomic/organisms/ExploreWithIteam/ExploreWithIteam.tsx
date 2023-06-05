import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import {
    Box,
    BoxForPinkSpot,
    BoxForPreview,
    BoxForSpot,
    BoxForText,
    BoxHover,
    GridBox,
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
                            Explore with ITeam:
                        </Text>
                    </FlexColumn>
                    <div
                        style={
                            size.width! < 920 ? { position: "relative" } : {}
                        }
                    >
                        <BoxForPinkSpot />
                    </div>
                    <GridBox
                        gridTemplateColumn="1fr 1fr"
                        gridTemplateRow="repeat(3, 325px)"
                        gridColumnGap="13px"
                        gridRowGap="15px"
                    >
                        {data.map((block: any) => {
                            return (
                                <Box
                                    key={block.id}
                                    backgroundImage={`url(${block.backgroundImage.data.attributes.url})`}
                                    bg="rgba(77, 38, 95, 0.55)"
                                >
                                    <HoverBox>
                                        <FlexColumn
                                            justifyContent="space-between"
                                            h="100%"
                                        >
                                            <BoxForSpot t="10%" l="5%" />
                                            <BoxForText></BoxForText>
                                            <BoxForPreview>
                                                <FlexColumn>
                                                    <Button
                                                        href="/projects"
                                                        gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                                        variant={
                                                            BUTTON_VARIANTS.gradient_link
                                                        }
                                                        h={
                                                            size.width! < 600
                                                                ? "30px"
                                                                : null
                                                        }
                                                        w={
                                                            size.width! < 600
                                                                ? "180px"
                                                                : null
                                                        }
                                                        m={
                                                            size.width! < 600
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
                                    <BoxForSpot />
                                </Box>
                            );
                        })}
                    </GridBox>
                </FlexColumn>
            </FlexColumn>
        </AdaptContainer>
    );
};
