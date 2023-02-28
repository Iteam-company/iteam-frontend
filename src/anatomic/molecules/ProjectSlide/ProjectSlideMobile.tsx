import React, { FC } from "react";
import { Device } from "@/anatomic/atoms/Device";
import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { ProjectsInterface, Technologies } from "@/pages/api/projects";
import { COLORS } from "@/lib/theme/color";
import { FitToViewport } from "react-fit-to-viewport";
import styled from "styled-components";
import { iconsMobile } from "./utils";
import waveBg from "@/assets/projects/wave-bg.svg";

export const ProjectSlideMobile: FC<ProjectsInterface> = ({
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
                h="auto"
                gap="20px"
                w="85vw"
            >
                <FlexColumn gap="20px" w="100%" bg={waveBg}>
                    <Text
                        color={COLORS.black}
                        size={TEXT_SIZES.m}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        {title}
                    </Text>
                    <Text
                        color={COLORS.black}
                        size={TEXT_SIZES.xxs}
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
                                    size={TEXT_SIZES.xxxs}
                                    weight={TEXT_WEIGHTS.main}
                                    color="#818181"
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
                    <Device image={img.src} />
                </FitToViewport>
            </FlexColumn>

            <FlexRow justifyContent="center" alignItems="center" w="100%">
                <Button href="/" color={color}>
                    <ButtonContent justifyContent="center" alignItems="center">
                        <Text color={COLORS.black} weight={TEXT_WEIGHTS.main}>
                            View Case
                        </Text>
                    </ButtonContent>
                </Button>
            </FlexRow>
        </>
    );
};
const Button = styled.a<{ color: string }>`
    text-decoration: none;
    height: 36px;
    width: 137px;
    border-radius: 50px;
    padding: 5px;
    background-image: linear-gradient(${({ color }) => color});
    cursor: pointer;
    @media screen and (max-width: 900px) {
        gap: 20px;
    }
`;

const ButtonContent = styled(FlexRow)`
    background: white;
    border-radius: 50px;
    width: 100%;
    height: 100%;
`;
