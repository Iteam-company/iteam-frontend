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
import Image from 'next/image';

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
                gap="20px"
                w="fit-content"
            >
                <FlexColumn
                    gap="30px"
                    w="100%"
                    p="0 20px"
                    style={{ boxSizing: "border-box" }}
                >
                    <Text
                        color={COLORS.dark}
                        size={TEXT_SIZES.medium.largeM}
                        weight={TEXT_WEIGHTS.medium}
                    >
                        {title}
                    </Text>
                    <Text
                        color={COLORS.dark}
                        size={TEXT_SIZES.small.xl}
                        weight={TEXT_WEIGHTS.normal}
                    >
                        {description}
                    </Text>

                    <FlexRow gap="15px" flexWrap="wrap" justifyContent="start"
                    alignItems="center">
                        {technology &&
                            technology.map(
                                (el: Technologies, index: number) => {
                                    console.log(el)
                                    return (
                                        <FlexColumn
                                            justifyContent="center"
                                            alignItems="center"
                                            flexWrap='wrap'
                                            gap="20px"
                                            key={index} 
                                        >
                                            <div>
                                            {
                                                (index % 2 === 0) && (
                                                    <div style={{flex: '100%'}}>
                                                    <FlexRow justifyContent="space-between"
                                                    alignItems="center"
                                                    gap='5px'
                                                 >
                                                    <Image src={el.techIcon.data.attributes.url} alt='techIcon' width='30' height='30'/>
                                                    <Text
                                                    size={TEXT_SIZES.small.l}
                                                    weight={TEXT_WEIGHTS.main}
                                                    color={COLORS.warmGray}
                                                    >
                                                    {el.name}
                                                    
                                                </Text>
                                                    </FlexRow>
                                                    </div>
                                                )
                                            }
                                          
                                            {
                                                (index % 2 !== 0) && (
                                                    <div style={{flex: '100%'}}>
                                                <FlexRow justifyContent="space-between"
                                                    alignItems="center"
                                                    gap='5px'
                                                 >
                                                    <Image src={el.techIcon.data.attributes.url} alt='techIcon' width='30' height='30'/>
                                                    <Text
                                                    size={TEXT_SIZES.small.l}
                                                    weight={TEXT_WEIGHTS.main}
                                                    color={COLORS.warmGray}
                                                    >
                                                    {el.name}
                                                    
                                                </Text>
                                                    </FlexRow>
                                                    </div>
                                           
  
                                                )
                                            }
                                            </div>
                                        </FlexColumn>
                                    )
                                },
                            )}
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

            <FlexRow justifyContent="center" alignItems="center" w="100%" p='20px 0 0 0'>
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
