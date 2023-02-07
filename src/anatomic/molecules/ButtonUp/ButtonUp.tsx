import { AiOutlineArrowUp } from "react-icons/ai";
import useScrollUp from "@/hooks/useScrollUp";
import { motion } from "framer-motion";
import { ButtonWrapper, Button } from "./styled";
import React, { useEffect, MouseEvent } from "react";

export const ButtonUp = () => {
    const { onScrollTop, scroll } = useScrollUp({ useCase: "button" });
    useEffect(() => {
        onScrollTop("auto");
    }, []);

    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        onScrollTop();
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 0, 1] }}>
            <ButtonWrapper visible={scroll.y > 1}>
                <Button onClick={() => onScrollTop()} />
                <AiOutlineArrowUp
                    color="white"
                    size={16}
                    onClick={(e: MouseEvent) => handleClick(e)}
                />
            </ButtonWrapper>
        </motion.div>
    );
};
