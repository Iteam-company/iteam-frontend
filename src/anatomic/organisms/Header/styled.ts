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

export const Button = styled.button`
    background-color: ${COLORS.dark};
    border: 1px solid ${COLORS.dark};
    border-radius: 8px;
    height: 40px;

    &:hover {
        background-color: ${COLORS.white};
        border: 1px solid ${COLORS.dark};
        & > * > * {
            color: ${COLORS.dark};
        }
    }
    & > * > * {
        color: ${COLORS.white};
        font-weight: ${TEXT_WEIGHTS.medium};
        padding: 0 30px;
    }
`;
