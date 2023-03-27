import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Device } from "@/anatomic/atoms/Device";
import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { ProjectsInterface, Technologies } from "@/pages/api/projects";
import React, {
    FC,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
} from "react";
import { FitToViewport } from "react-fit-to-viewport";
import { FiDollarSign } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { icons } from "./utils";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { SliderContext } from "@/anatomic/organisms/SmoothSlider/SmoothSlider";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";

export const ProjectSlide: FC<ProjectsInterface> = ({
    id,
    title,
    description,
    location,
    budget,
    tech,
    img,
    color,
}) => {
    const containerRef = useRef(null);

    const { currentSlideIndex, setCurrentSlideIndex } =
        useContext(SliderContext)!;

    useIsomorphicLayoutEffect(() => {
        console.log(
            gsap.utils.toArray(".image-wrapper", containerRef.current),
            "!!!!",
        );
        gsap.fromTo(
            document.querySelectorAll(".image-wrapper")[currentSlideIndex],
            { opacity: 0, x: 150 },
            { opacity: 1, x: 0 },
        );
    }, [currentSlideIndex]);

    return (
        <>
            <FlexRow
                justifyContent="center"
                alignItems="center"
                gap="50px"
                w="90%"
                ref={containerRef}
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

                <FitToViewport
                    style={{
                        maxWidth: "600px",
                        height: "auto",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    className="image-wrapper"
                    width={0}
                    height={0}
                    minZoom={0}
                    maxZoom={1}
                >
                    <Device image={img} />
                </FitToViewport>
            </FlexRow>

            <FlexRow justifyContent="center" alignItems="center" w="100%">
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
            </FlexRow>
        </>
    );
};
