import useScrollUp from "@/hooks/useScrollUp";
import Image from "next/image";
import React, { FC, useRef, useState } from "react";
import styled from "styled-components";

interface BgImageI {
    src: any;
    rotateZ?: number;
    scrollable?: boolean;
    priority?: boolean;
    loading?: "lazy";
}

interface ImagePosition {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    mobileTop?: number;
    mobileBottom?: number;
    mobileLeft?: number;
    mobileRight?: number;
}
interface ImageSize {
    maxWidth?: number;
}

export const BgImage: FC<BgImageI & ImagePosition & ImageSize> = ({
    src,
    top,
    bottom,
    left,
    right,
    scrollable = true,
    priority = false,
    loading,
    maxWidth,
    mobileTop,
    mobileBottom,
    mobileLeft,
    mobileRight,
}) => {
    const [rotateZ, setRotateZ] = useState<number>(0);
    const ref = useRef(null);

    const rotatableFunction = () => {
        if (ref.current && scrollable) {
            setRotateZ(window.scrollY * 0.005);
        }
    };

    useScrollUp({ onScroll: rotatableFunction });

    return (
        <BGImageStyled
            ref={ref}
            src={src}
            scrollable={scrollable}
            rotateZ={rotateZ}
            maxWidth={maxWidth}
            blurDataURL={src.src}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            mobileTop={mobileTop}
            mobileBottom={mobileBottom}
            mobileLeft={mobileLeft}
            mobileRight={mobileRight}
            alt="Background image"
            placeholder="blur"
            priority={priority}
            loading={loading}
        />
    );
};
const BGImageStyled = styled(Image).attrs<BgImageI & ImagePosition>(
    ({ rotateZ }) => ({
        style: {
            transform: `rotateZ(${rotateZ}deg)`,
        },
    }),
)<BgImageI & ImageSize & ImagePosition>`
    height: auto;
    width: 100%;
    object-fit: contain;
    position: absolute;
    transition: 0.3s all;
    z-index: 0 !important;

    max-width: ${({ maxWidth }) => maxWidth}px;

    ${({ top }) => top && `top: ${top}%`};
    ${({ bottom }) => bottom && `bottom: ${bottom}%`};
    ${({ right }) => right && `right: ${right}%`};
    ${({ left }) => left && `left: ${left}%`};

    @media all and (max-width: 850px) {
        ${({ mobileTop }) => mobileTop && `top: ${mobileTop}%`};
        ${({ mobileBottom }) => mobileBottom && `bottom: ${mobileBottom}%`};
        ${({ mobileRight }) => mobileRight && `right: ${mobileRight}%`};
        ${({ mobileLeft }) => mobileLeft && `left: ${mobileLeft}%`};
    }
`;
