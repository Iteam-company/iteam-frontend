import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { ProjectsInterface, Technologies } from "@/pages/api/projects";
import React, { FC } from "react";
import { FiDollarSign } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { icons } from "./utils";

export const ProjectSlide: FC<ProjectsInterface> = ({
    id,
    title,
    description,
    location,
    budget,
    tech,
    color,
}) => {
    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            gap="50px"
            w="90%"
        >
            <FlexColumn gap="50px" w="100%">
                <Text
                    color={COLORS.black}
                    size="36px"
                    weight={TEXT_WEIGHTS.medium}
                >
                    {title}
                </Text>
                <Text
                    color={COLORS.black}
                    size="18px"
                    weight={TEXT_WEIGHTS.main}
                >
                    {description}
                </Text>
                <FlexRow alignItems="center" gap="20px">
                    <FlexRow alignItems="center" gap="5px">
                        <SlLocationPin />
                        <Text
                            color={COLORS.black}
                            size={TEXT_SIZES.s}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {location}
                        </Text>
                    </FlexRow>

                    <FlexRow
                        alignItems="center"
                        gap="5px"
                        style={{
                            borderLeft: "1px solid black",
                        }}
                        p="0 0 0 20px"
                    >
                        <FiDollarSign />
                        <Text
                            color={COLORS.black}
                            size={TEXT_SIZES.s}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {budget}
                        </Text>
                    </FlexRow>
                </FlexRow>

                <FlexRow gap="20px">
                    {tech.map((el: Technologies, index) => (
                        <FlexRow
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                            key={index}
                        >
                            <>{icons[el.icon]}</>
                            <Text
                                size={TEXT_SIZES.xxs}
                                weight={TEXT_WEIGHTS.main}
                                color="#818181"
                            >
                                {el.name}
                            </Text>
                        </FlexRow>
                    ))}
                </FlexRow>
            </FlexColumn>
            <FlexColumn w="100%" alignItems="end">
                <Button
                    href={`/project/${id}`}
                    gradient={color}
                    variant={BUTTON_VARIANTS.gradient_link}
                    label={
                        <Text color={COLORS.black} weight={TEXT_WEIGHTS.main}>
                            View Case
                        </Text>
                    }
                />
            </FlexColumn>
        </FlexColumn>
    );
};
