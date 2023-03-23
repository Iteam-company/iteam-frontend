import { FlexRow, FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, {
    FC,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import checkIcon from "@/assets/icon/check.svg";
import { ApproachInterface } from "@/pages/api/outstaffing";
import {
    StepTitle,
    CircularProgressbarContainer,
    Container,
    RepeatButton,
} from "./styled";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

interface Props {
    approaches: ApproachInterface[];
}

export const ApproachSlide: FC<Props> = ({ approaches = [] }) => {
    const [currentApproachIndex, setCurrentApproachIndex] = useState<number>(0);
    const [percents, setPercents] = useState(approaches[0]?.progress || 0);

    const currentApproach = useMemo(
        () => approaches[currentApproachIndex] || approaches[0],
        [approaches, currentApproachIndex],
    );

    const circleViewRef = useRef(null);
    const gsapRef = useRef(null);

    const isCircleInView = useInView(circleViewRef);

    const animationOfPercents = useCallback(() => {
        const interval = setInterval(() => {
            if (isCircleInView) {
                setPercents(percents >= 100 ? 100 : percents + 1);

                const currentPossibleApproachIndex = approaches.findIndex(
                    (approach) => approach.progress === percents,
                );

                if (currentPossibleApproachIndex !== -1) {
                    setCurrentApproachIndex(currentPossibleApproachIndex);
                    gsap.fromTo(
                        ".text-wrapper",
                        { opacity: 0 },
                        { opacity: 1, duration: 1 },
                    ).play();
                }
            }

            if (percents >= 100) clearInterval(interval);
        }, 150);

        return interval;
    }, [approaches, isCircleInView, percents]);

    useEffect(() => {
        const interval = animationOfPercents();

        return () => clearInterval(interval);
    }, [animationOfPercents, approaches, isCircleInView, percents]);

    const onRepeatAnimation = useCallback(() => {
        setPercents(0);
        setCurrentApproachIndex(0);
    }, []);

    if (!approaches) return null;

    return (
        <FlexColumn
            alignItems="center"
            gap="30px"
            p="40px 50px 75px"
            position="relative"
            boxShadow="0px 4px 20px rgba(37, 7, 67, 0.37)"
            bg={COLORS.white}
            borderRadius="16px"
        >
            <Text
                color={COLORS.textThird}
                weight={TEXT_WEIGHTS.medium}
                size={TEXT_SIZES.xl}
            >
                Our approach
            </Text>
            <FlexRow gap="90px" justifyContent="center" alignItems="center">
                <FlexColumn mw="340px" ref={gsapRef} className="text-wrapper">
                    <FlexColumn w="100%" position="relative">
                        <GradientTitle
                            size="200px"
                            weight={TEXT_WEIGHTS.main}
                            lineHeight="200px"
                            color="180deg, #B9B6DB 0%, rgba(186, 184, 217, 0.12) 100%"
                        >
                            {currentApproach?.step}
                        </GradientTitle>
                        <StepTitle
                            color={COLORS.textThird}
                            weight={TEXT_WEIGHTS.medium}
                            size={TEXT_SIZES.xl}
                        >
                            {currentApproach?.title}
                        </StepTitle>
                    </FlexColumn>
                    <Text
                        size={TEXT_SIZES.s}
                        color={COLORS.textMinor}
                        lineHeight="38px"
                    >
                        {currentApproach?.text}
                    </Text>
                </FlexColumn>
                <FlexColumn w="100%" ref={circleViewRef}>
                    {percents !== 100 ? (
                        <CircularProgressbarContainer>
                            <CircularProgressbar
                                text={`${percents}%`}
                                maxValue={100}
                                value={percents}
                                styles={buildStyles({
                                    pathColor: currentApproach?.color,
                                    textColor: currentApproach?.color,
                                    trailColor: COLORS.progressTrail,
                                })}
                            />
                        </CircularProgressbarContainer>
                    ) : (
                        <Container
                            color={currentApproach?.color}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Image
                                width={200}
                                height={200}
                                src={checkIcon.src}
                                alt="check"
                            />
                        </Container>
                    )}
                </FlexColumn>
            </FlexRow>
            {percents >= 99 && (
                <RepeatButton
                    as={motion.button}
                    animate={{
                        opacity: [0, 1],
                    }}
                    onClick={onRepeatAnimation}
                />
            )}
        </FlexColumn>
    );
};
