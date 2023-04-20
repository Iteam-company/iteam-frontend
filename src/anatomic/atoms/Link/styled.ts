import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { LINK_POSITION, StyledProps } from "./util";
import Link from "next/link";

export const StyledLink = styled(Link)<StyledProps>`
    text-decoration: none;
    padding: ${({ p }) => p || 0};
    width: fit-content;
    & > * {
        white-space: nowrap !important;
    }

    &:hover {
        svg {
            fill: ${({ linkPosition }) =>
                linkPosition === LINK_POSITION.footer && COLORS.white};
            transition: all 0.5s ease;
        }
        span {
            color: ${({ linkPosition }) =>
                linkPosition === LINK_POSITION.footer && COLORS.white};
            transition: all 0.5s ease;
        }
    }
`;
