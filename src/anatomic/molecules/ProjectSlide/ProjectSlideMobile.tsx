import React, { FC } from "react";
import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { ProjectsInterface, Technologies } from "@/pages/api/projects";
import { COLORS } from "@/lib/theme/color";
import { FitToViewport } from "react-fit-to-viewport";
import { iconsMobile } from "./utils";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Device } from "@/anatomic/atoms/Device";

export const ProjectSlideMobile: FC<ProjectsInterface> = ({
    id,
    title,
    description,
    tech,
    img,
    color,
}) => {
    return (
        <>
            <FlexColumn
                justifyContent="center"
                alignItems="end"
                gap="20px"
                w="fit-content"
            >
                <FlexColumn
                    gap="20px"
                    w="100%"
                    p="0 20px"
                    style={{ boxSizing: "border-box" }}
                >
                    <Text
                        color={COLORS.dark}
                        size={TEXT_SIZES.medium.xs}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        {title}
                    </Text>
                    <Text
                        color={COLORS.dark}
                        size={TEXT_SIZES.small.m}
                        weight={TEXT_WEIGHTS.main}
                    >
                        {description}
                    </Text>

                    <FlexRow gap="15px" flexWrap="wrap">
                        {tech.map((el: Technologies, index) => (
                            <FlexRow
                                justifyContent="center"
                                alignItems="center"
                                gap="5px"
                                key={index}
                            >
                                <>{iconsMobile[el.icon]}</>
                                <Text
                                    size={TEXT_SIZES.small.s}
                                    weight={TEXT_WEIGHTS.main}
                                    color={COLORS.warmGray}
                                >
                                    {el.name}
                                </Text>
                            </FlexRow>
                        ))}
                    </FlexRow>
                </FlexColumn>

                <FitToViewport
                    style={{
                        maxWidth: "300px",
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
                    label={
                        <Text color={COLORS.dark} weight={TEXT_WEIGHTS.main}>
                            View Case
                        </Text>
                    }
                />
            </FlexRow>
        </>
    );
};
