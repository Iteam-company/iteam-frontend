import React, { useState } from "react";
import { FlexColumn } from "../Flex";
import LogoImg from "@/assets/icon/logoiteam.svg";
import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoAnimation = () => {
    const [display, setDisplay] = useState<"block" | "none">("block");
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [0, 1000],
                display: display,
            }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setDisplay("none")}
            style={{
                height: "100vh",
                width: "100%",
                zIndex: 20,
                position: "absolute",
                top: 0,
            }}
        >
            <FlexColumn
                bg={COLORS.black}
                h="100vh"
                w="100%"
                justifyContent="center"
                alignItems="center"
                style={{
                    overflow: "hidden",
                }}
            >
                <Mask position="relative">
                    <Triangle />
                    <Circle />
                </Mask>
            </FlexColumn>
        </motion.div>
    );
};
const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 600px solid white;

    animation: spin 4s linear infinite;
    transform-origin: top center;
    position: absolute;
    left: -28.8%;
    top: 25.3%;

    @keyframes spin {
        0% {
            transform: rotate(280deg);
        }
        5% {
            transform: rotate(275deg);
        }
        15% {
            transform: rotate(280deg);
        }
        25% {
            transform: rotate(265deg);
        }
        26% {
            transform: rotate(20deg);
        }
        45% {
            transform: rotate(-90deg);
        }
        60% {
            transform: rotate(-70deg);
        }
        75% {
            transform: rotate(-80deg);
        }
        81% {
            transform: rotate(-60deg);
        }
        92% {
            transform: rotate(20deg);
        }
        93% {
            transform: rotate(265deg);
        }
        100% {
            transform: rotate(280deg);
        }
    }
`;
const Circle = styled.div`
    width: 20px;
    height: 15px;
    position: absolute;
    left: 0;
    top: 20%;
    background: white;
`;

const Mask = styled(FlexColumn)`
    max-height: 125px;
    max-width: 305px;
    height: 125px;
    width: 305px;
    mask-image: url(${LogoImg.src});
    mask-repeat: no-repeat;
    mask-position: center center;
    background-color: rgba(256, 256, 256, 0.7);
`;
