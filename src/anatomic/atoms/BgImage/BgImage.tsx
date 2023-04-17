import useScrollUp from "@/hooks/useScrollUp";
import Image from "next/image";
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
                alt="Background image"
            />
        </div>
    );
};
const BGImageStyled = styled(Image)<BgImageI>`
    position: absolute;
    z-index: 0 !important;
    height: ${({ height }) => height}px;
    top: ${({ top }) => top}%;
    bottom: ${({ bottom }) => bottom}%;
    right: ${({ right }) => right}%;
    left: ${({ left }) => left}%;
    transform: ${({ rotateZ }) => rotateZ && `rotateZ(${rotateZ}deg)`};
    transition: 0.3s all;

    object-fit: contain;
    width: 100% !important;
    /* position: relative !important; */
    /* height: unset !important; */
`;
