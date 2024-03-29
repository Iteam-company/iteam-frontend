import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { FiDollarSign } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { Stick } from "./styled";
import Image from "next/image";
import {
    ProjectsInterface,
    Technologies,
} from "@/interfaces/pages/team/projects";

export const ProjectSlide: FC<ProjectsInterface> = ({
    id,
    title,
    description,
    location,
    budget,
    technology,
    color,
    index,
}) => {
    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            gap="50px"
            w="100%"
        >
            <FlexColumn gap="50px" w="100%">
                <Text
                    color={COLORS.dark}
                    size={TEXT_SIZES.large.s}
                    weight={TEXT_WEIGHTS.medium}
                >
                    {title}
                </Text>
                <Text
                    color={COLORS.dark}
                    size="18px"
                    weight={TEXT_WEIGHTS.main}
                >
                    {description}
                </Text>
                <FlexRow alignItems="center" gap="20px">
                    <FlexRow alignItems="center" gap="5px">
                        <SlLocationPin />
                        <Text
                            color={COLORS.dark}
                            size={TEXT_SIZES.small.xl}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {location}
                        </Text>
                    </FlexRow>
                    <Stick />
                    <FlexRow
                        alignItems="center"
                        gap="5px"
                        style={{
                            borderLeft: "1px solid dark",
                        }}
                        p="0 0 0 0px"
                    >
                        <FiDollarSign />
                        <Text
                            color={COLORS.dark}
                            size={TEXT_SIZES.small.xl}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {budget}
                        </Text>
                    </FlexRow>
                </FlexRow>

                <FlexRow gap="20px" flexWrap="wrap">
                    {technology.map((el: Technologies, index: number) => (
                        <FlexRow
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                            key={index}
                        >
                            <Image
                                src={el.techIcon.data.attributes.url}
                                alt="techIcon"
                                width="30"
                                height="30"
                            />
                            <Text
                                size={TEXT_SIZES.small.m}
                                weight={TEXT_WEIGHTS.main}
                                color={COLORS.warmGray}
                            >
                                {el.name}
                            </Text>
                        </FlexRow>
                    ))}
                </FlexRow>
            </FlexColumn>
            <FlexColumn w="100%" alignItems="center">
                <Button
                    href={id! > 4 ? `/project/${id! + 2}` : `/project/${id}`}
                    gradient={color}
                    variant={BUTTON_VARIANTS.gradient_link}
                    label={
                        <Text color={COLORS.dark} weight={TEXT_WEIGHTS.main}>
                            View Case
                        </Text>
                    }
                />
            </FlexColumn>
        </FlexColumn>
    );
};
