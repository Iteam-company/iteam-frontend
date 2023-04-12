import React, { FC, ReactNode, useState } from "react";
import ArrowLeft from "@/assets/icon/leftArrow.svg";
import { motion } from "framer-motion";
import { Card } from "./styled";

const slideIn = {
    initial: { right: "-90%" },
    animate: { right: ["-90%", "0%"] },
    transition: { duration: 0.8 },
};
const slideOut = {
    initial: { right: "0%" },
    animate: { right: ["0%", "-86%"] },
    transition: { duration: 0.8 },
};

interface Props {
    children: ReactNode;
}

export const SideChevron: FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {open ? (
                <Card
                    as={motion.div}
                    {...slideIn}
                    p="5px 13px"
                    onClick={() => setOpen(!open)}
                >
                    {children}
                </Card>
            ) : (
                <Card
                    as={motion.div}
                    {...slideOut}
                    p="5px"
                    onClick={() => setOpen(!open)}
                >
                    <img src={ArrowLeft.src} />
                </Card>
            )}
        </>
    );
};
