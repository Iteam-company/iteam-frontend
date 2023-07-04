import styled from "styled-components";
import { TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import { COLORS } from "@/lib/theme/color";

export const AddaptTextMain = styled.div`
    @media (max-width: 992px) {
        max-width: 80%;
    }
`;

export const AddaptFoIbg = styled.div`
    display: block;
    position: absolute;
    bottom: 5%;
    right: -58%;
    height: 100%;
    width: 100%;

    @media (min-width: 320px) {
        bottom: 54%;
        width: 50%;
        height: 50%;
        right: 0%;
    }

    @media (min-width: 400px) {
        bottom: 54%;
        width: 50%;
        height: 50%;
        right: -5%;
    }

    @media (min-width: 420px) {
        bottom: 53%;
        right: -9%;
    }

    @media (min-width: 500px) {
        right: -18%;
    }

    @media (min-width: 620px) {
        right: -22%;
    }

    @media (min-width: 700px) {
        right: -26%;
    }

    @media (min-width: 820px) {
        right: -27%;
    }

    @media (min-width: 920px) {
        right: -30%;
    }

    @media (min-width: 992px) {
        display: none;
    }
`;
export const AddaptForText = styled.div`
    display: block;
    @media (max-width: 670px) {
        display: none;
    }
`;

export const StyledTypingEffectAdapt = styled.div`
    font-size: ${TEXT_SIZES.medium.m};
    color: ${COLORS.dark};
    font-weight: ${TEXT_WEIGHTS.medium};

    @media (min-width: 670px) {
        font-size: ${TEXT_SIZES.large.m};
        color: ${COLORS.dark};
        font-weight: ${TEXT_WEIGHTS.medium};
    }
`;
