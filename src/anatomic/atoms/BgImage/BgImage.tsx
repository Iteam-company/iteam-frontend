import useScrollUp from "@/hooks/useScrollUp";
import { useInView } from "framer-motion";
import React, { FC, useRef, useState } from "react";
import styled from "styled-components";

interface BgImageI {
    src: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    height?: number;
    rotateZ?: number;
    scrollable?: boolean;
}

export const BgImage: FC<BgImageI> = ({
    src,
    top,
    bottom,
    left,
    right,
    height,
    scrollable = true,
}) => {
    const [rotateZ, setRotateZ] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    const rotatableFunction = () => {
        if (ref.current && scrollable) {
            setRotateZ(window.scrollY * 0.005);
        }
    };

    useScrollUp({ onScroll: rotatableFunction });

    return (
        <div ref={ref}>
            <BGImageStyled
                src={src}
                top={top}
                bottom={bottom}
                left={left}
                right={right}
                height={height}
                scrollable={scrollable}
                rotateZ={rotateZ}
            />
        </div>
    );
};
const BGImageStyled = styled.img<BgImageI>`
    position: absolute;
    z-index: 0 !important;
    height: ${({ height }) => height}px;
    top: ${({ top }) => top}px;
    bottom: ${({ bottom }) => bottom}px;
    right: ${({ right }) => right}px;
    left: ${({ left }) => left}px;
    transform: ${({ rotateZ }) => rotateZ && `rotateZ(${rotateZ}deg)`};
    transition: 0.3s all;
`;
