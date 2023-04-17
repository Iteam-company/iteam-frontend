import React, { useState } from "react";
import { FlexColumn } from "../Flex";
import { COLORS } from "@/lib/theme/color";
import { motion } from "framer-motion";
import { Mask, Triangle, Circle } from "./styled";

export const LogoAnimation = () => {
    const [display, setDisplay] = useState<"block" | "none">("block");
    display == "none" && document.body.classList.remove("no-scroll");

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [0, 0, 0, 1000],
                display: display,
            }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => setDisplay("none")}
            style={{
                height: "100vh",
                width: "100%",
                zIndex: 200,
                position: "absolute",
                top: 0,
            }}
        >
            <FlexColumn
                bg={COLORS.dark}
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
