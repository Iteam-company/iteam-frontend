import React, { FC } from "react";
import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { FitToViewport } from "react-fit-to-viewport";
import { iconsMobile } from "./utils";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Device } from "@/anatomic/atoms/Device";
import { ProjectsInterface, Technologies } from "@/pages/projects";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

export const ProjectSlideMobile: FC<ProjectsInterface> = ({
    id,
    title,
    description,
    technology,
    img,
    color,
    index,
}) => {
    const size = useWindowSize();
    return (
        <>
            <FlexColumn
                justifyContent="center"
                alignItems="center"
                gap="15px"
                w="fit-content"
            >
                <FlexColumn
                    gap="20px"
                    w="90%"
                    justifyContent="flex-start"
                    flexWrap="wrap"
                    style={
                        size.width! < 381
                            ? {
                                  boxSizing: "border-box",
                                  whiteSpace: "pre-line",
                                  wordBreak: "break-all",
                              }
                            : {
                                  boxSizing: "border-box",
                              }
                    }
                >
                    <Text
                        w="100%"
                        whiteSpace="pre-line"
                        color={COLORS.dark}
                        size={TEXT_SIZES.medium.s}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        {title}
                    </Text>
                    <Text
                        w="100%"
                        color={COLORS.dark}
                        size={
                            size.width! < 381
                                ? TEXT_SIZES.small.s
                                : TEXT_SIZES.small.l
                        }
                        weight={TEXT_WEIGHTS.normal}
                        whiteSpace="pre-line"
                    >
                        {description}
                    </Text>

                    <FlexColumn
                        gap="15px"
                        flexWrap="wrap"
                        justifyContent="center"
                        alignItems="start"
                    >
                        {technology &&
                            technology.map(
                                (el: Technologies, index: number) => {
                                    return (
                                        <FlexColumn
                                            justifyContent="center"
                                            alignItems="center"
                                            flexWrap="wrap"
                                            gap="10px"
                                            key={index}
                                        >
                                            <FlexRow
                                                justifyContent="space-between"
                                                alignItems="center"
                                                gap="5px"
                                            >
                                                <Image
                                                    src={
                                                        el.techIcon.data
                                                            .attributes.url
                                                    }
                                                    alt="techIcon"
                                                    width="20"
                                                    height="20"
                                                />
                                                <Text
                                                    size={TEXT_SIZES.small.l}
                                                    weight={TEXT_WEIGHTS.main}
                                                    color={COLORS.warmGray}
                                                >
                                                    {el.name}
                                                </Text>
                                            </FlexRow>
                                        </FlexColumn>
                                    );
                                },
                            )}
                    </FlexColumn>
                </FlexColumn>

                <FitToViewport
                    style={{
                        maxWidth: "350px",
                        height: "auto",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                    }}
                    width={0}
                    height={0}
                    minZoom={0}
                    maxZoom={1}
                >
                    <Device image={img} />
                </FitToViewport>
            </FlexColumn>

            <FlexRow
                justifyContent={size.width! < 401 ? "flex-start" : "center"}
                alignItems="center"
                w="100%"
                p="0 0 0 5px"
            >
                <Button
                    href={id! > 4 ? `/project/${id! + 2}` : `/project/${id}`}
                    gradient={color}
                    variant={BUTTON_VARIANTS.gradient_link}
                    p="5px 5px 0 10px"
                    w={size.width! < 401 ? "140px" : "160px"}
                    label={
                        <Text
                            color={COLORS.dark}
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.small.s}
                        >
                            View Case
                        </Text>
                    }
                />
            </FlexRow>
        </>
    );
};
