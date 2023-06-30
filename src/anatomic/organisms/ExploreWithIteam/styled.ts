import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import styled from "styled-components";
import { StringLiteral } from "typescript";

interface GridBoxProps {
    gridTemplateColumn?: string;
    gridTemplateRow?: string;
    gridColumnGap?: string;
    gridRowGap?: string;
}

interface SpotProps {
    bg?: string;
}

export const GridBox = styled.div<GridBoxProps>`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) => props.gridTemplateColumn || "1fr"};
    grid-template-rows: ${(props) => props.gridTemplateRow || "1fr"};
    grid-column-gap: ${(props) => props.gridColumnGap || "0"};
    grid-row-gap: ${(props) => props.gridRowGap || "0"};

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 325px);
        padding-bottom: 20px;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 180px);
        padding-bottom: 20px;
    }
`;

interface BoxProps {
    bg?: string;
    backgroundImage?: string;
}

interface BoxForTextSpotProps {
    t?: string;
    l?: string;
}

export const Box = styled.div<BoxProps>`
    position: relative;
    border-radius: 8px;
    background: ${(props) => props.backgroundImage || "none"};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    overflow: hidden;

    &::before {
        background: ${(props) => props.bg || "none"};
        border-radius: 8px;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
        overflow: hidden;
    }

    &:hover::before {
        opacity: 0;
        transition: opacity 1s ease-out;
    }
`;

export const ExploreBox = styled.div<BoxProps>`
    position: relative;
    flex: 1 1 45%;
    min-width: 304px;
    height: 280px;
    border-radius: 8px;
    background: ${(props) => props.backgroundImage || "none"};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    overflow: hidden;

    &::before {
        background: ${(props) => props.bg || "none"};
        border-radius: 8px;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
        overflow: hidden;
    }

    &:hover::before {
        opacity: 0;
        transition: opacity 1s ease-out;
    }
    @media (max-width: 1000px) {
        max-width: 532px;
        flex: 1 1 100%;
        max-height: 325px;
    }

    @media (max-width: 600px) {
        max-height: 250px;
        &:last-child {
            margin-bottom: 20px;
        }
    }

    @media (max-width: 500px) {
        max-width: 314px;
        max-height: 180px;
        &:last-child {
            margin-bottom: 20px;
        }
    }
`;

export const BoxForText = styled.div`
    margin-top: 28px;
    padding-left: 24px;
    position: relative;
    z-index: 3;
`;

export const BoxForPreview = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 10px;
    right: 15px;

    @media (max-width: 600px) {
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const BoxForSpot = styled.div<BoxForTextSpotProps>`
    background: rgba(241, 241, 241, 1);
    filter: blur(100px);
    width: 50%;
    height: 50%;
    position: absolute;
    top: ${(props) => props.t || "30%"};
    left: ${(props) => props.l || "30%"};
    z-index: 2;
`;

export const BoxHover = styled(motion.div)<BoxProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.backgroundImage || "none"};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    z-index: 3;
    background-origin: context-box;
`;

export const BoxForPinkSpot = styled.div<SpotProps>`
    position: absolute;
    left: 30%;
    width: 550px;
    height: 500px;
    background: linear-gradient(90deg, #c471f5 0%, #fa71cd 100%);
    filter: blur(150px);
    overflow: hidden;
    transform: rotate(54.56deg);

    @media (max-width: 920px) {
        height: 200px;
        top: 0;
        bottom: 50%;
        left: 0;
        right: 0;
    }

    @media (max-width: 620px) {
        display: none;
    }
`;
