import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useEffect, MouseEvent } from "react";
import useScrollUp from "@/hooks/useScrollUp";
import { motion } from "framer-motion";
import { COLORS } from "@/lib/theme/color";

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

const Button = styled.button`
    box-shadow: 0 3px 5px 0 rgb(173 197 255 / 30%);
    height: 36px;
    width: 36px;
    background-color: ${COLORS.buttonDark};
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
`;

const ButtonWrapper = styled(FlexColumn)<{ visible: boolean }>`
    justify-content: center;
    align-items: center;
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    position: fixed;
    z-index: 5;
    bottom: 30px;
    right: 30px;
    transition: all 0.5s;
    svg {
        position: absolute;
        z-index: 10;
        color: white;
        cursor: pointer;
    }
    :hover {
        button {
            transform: rotate(45deg);
        }
    }
`;
