import inputThumbIcon from "@/assets/bgImage/outsourcing/input-thumb.svg";
import styled from "styled-components";
import { COLORS } from "../../../lib/theme/color";

export const Input = styled.input<{ translateY: string }>`
    z-index: 6;
    transform: translateY(${({ translateY }) => translateY && translateY});
    -webkit-appearance: none;
    background: transparent;
    width: 84%;
    @media all and (max-width: 602px) {
        width: 80%;
    }

    &::-webkit-slider-thumb {
        z-index: 7 !important;
        transform: translateY(-20px);
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: transparent no-repeat center;
        background-size: contain;
        background-image: url(${inputThumbIcon.src});
        cursor: pointer;
        @media all and (max-width: 602px) {
            transform: translateY(-12px);
            width: 24px;
            height: 24px;
        }
    }

    &::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        background: ${COLORS.textPrimary};
        @media all and (max-width: 602px) {
            height: 1px;
        }
    }
`;
