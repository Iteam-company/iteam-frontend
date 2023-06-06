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

export const ProjectSlideMobile: FC<ProjectsInterface> = ({
    id,
    title,
    description,
    technology,
    img,
    color,
}) => {
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
                    flexWrap="wrap"
                    style={{ boxSizing: "border-box" }}
                >
                    <Text
                        color={COLORS.dark}
                        size={TEXT_SIZES.medium.s}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        {title}
                    </Text>
                    <Text
                        color={COLORS.dark}
                        size={TEXT_SIZES.small.m}
                        weight={TEXT_WEIGHTS.normal}
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
                                            {index % 2 === 0 && index < 3 && (
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
                                                        size={
                                                            TEXT_SIZES.small.l
                                                        }
                                                        weight={
                                                            TEXT_WEIGHTS.main
                                                        }
                                                        color={COLORS.warmGray}
                                                    >
                                                        {el.name}
                                                    </Text>
                                                </FlexRow>
                                            )}

                                            {index % 2 !== 0 && index < 3 && (
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
                                                        size={
                                                            TEXT_SIZES.small.l
                                                        }
                                                        weight={
                                                            TEXT_WEIGHTS.main
                                                        }
                                                        color={COLORS.warmGray}
                                                    >
                                                        {el.name}
                                                    </Text>
                                                </FlexRow>
                                            )}
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

            <FlexRow justifyContent="center" alignItems="center" w="100%">
                <Button
                    href={`/project/${id}`}
                    gradient={color}
                    variant={BUTTON_VARIANTS.gradient_link}
                    p="5px"
                    w="80%"
                    label={
                        <Text
                            color={COLORS.dark}
                            weight={TEXT_WEIGHTS.main}
                            size={TEXT_SIZES.small.l}
                        >
                            View Case
                        </Text>
                    }
                />
            </FlexRow>
        </>
    );
};
