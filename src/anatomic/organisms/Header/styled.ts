import { Link } from "@/anatomic/atoms/Link";
import { COLORS } from "@/lib/theme/color";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import styled from "styled-components";
import { TEXT_WEIGHTS } from "@/anatomic/atoms/Text";

export const AdaptiveElem = styled(Adaptive)`
    max-width: none;
`;
export const LinkElem = styled(Link)<{ active: boolean }>`
    :hover {
        ::after {
            width: 100%;
            left: 0;
        }
    }
    ::after {
        content: "";
        position: absolute;
        bottom: -8px;
        width: ${({ active }) => (active ? "100%" : "0")};
        background-color: ${COLORS.dark};
        height: 2px;
        transition: width 0.5s ease;
        right: 0;
    }
`;

export const ButtonGradientBorder = styled.div<{ $bg?: string }>`
    padding: 2px;
    background: ${({ $bg }) =>
        $bg || "linear-gradient(90deg, #9a75cb, #7ab0c7)"};
    border-radius: 22px;

    transition: 0.1s all;
    cursor: pointer;

    &:hover {
        padding: 3px;
        background: linear-gradient(90deg, #5e0ec9, #0574a2);
    }

    &:active {
        background: transparent;
    }
`;

export const Button = styled.button`
    padding: 8px 20px;
    width: 162px;
    height: 40px;
    color: black;
    position: relative;
    border: 2px solid transparent;
    background: white;
    border-radius: 22px;
    cursor: pointer;

    font-weight: 700;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s all;

    &:active {
        border: 1px solid transparent;
        background: #250743;
        & > a > p {
            color: white !important;
        }
    }

    & > a > p {
        font-weight: ${TEXT_WEIGHTS.medium};
        padding: 0 30px;
    }
`;
