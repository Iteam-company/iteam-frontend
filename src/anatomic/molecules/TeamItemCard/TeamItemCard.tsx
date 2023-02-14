import { FlexColumn } from "@/anatomic/atoms/Flex";
import { useInView, motion } from "framer-motion";
import React, { FC, ReactNode, useRef } from "react";
import styled from "styled-components";

export const CardElem: FC<{ index: number; children: ReactNode }> = ({
    index,
    children,
}) => {
    const container = useRef(null);
    const isInView = useInView(container, { once: true });
    return (
        <Card
            as={isInView ? motion.div : ""}
            animate={{ x: index % 2 == 0 ? [-500, 0] : [500, 0] }}
            transition={{ duration: 0.7 }}
            ref={container}
        >
            {children}
        </Card>
    );
};
const Card = styled(FlexColumn)`
    padding: 20px 40px;
    border-radius: 5px;
    gap: 20px;
    background-color: white;
`;
