import { Link } from "@/anatomic/atoms/Link";
import { COLORS } from "@/lib/theme/color";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import styled from "styled-components";

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
        background-color: ${COLORS.black};
        height: 2px;
        transition: width 0.5s ease;
        right: 0;
    }
`;

export const Button = styled.button`
    background-color: ${COLORS.black};
    border: 1px solid ${COLORS.black};
    border-radius: 8px;

    &:hover {
        background-color: ${COLORS.white};
        border: 1px solid ${COLORS.black};
        & > * > * {
            color: ${COLORS.black};
        }
    }
    & > * > * {
        color: ${COLORS.white};
        padding: 10px 38px;
    }
`;
