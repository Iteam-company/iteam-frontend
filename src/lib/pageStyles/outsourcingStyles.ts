import inputThumbIcon from "@/assets/bgImage/outsourcing/input-thumb.svg";
import styled from "styled-components";
import { COLORS } from "../theme/color";

export const Input = styled.input`
    z-index: 3;
    transform: translateY(-130px);
    -webkit-appearance: none;
    background: transparent;
    width: 84%;

    &::-webkit-slider-thumb {
        z-index: 4 !important;
        transform: translateY(-20px);
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: transparent no-repeat center;
        background-size: contain;
        background-image: url(${inputThumbIcon.src});
        cursor: pointer;
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
        background: ${COLORS.textThird};
    }
`;
