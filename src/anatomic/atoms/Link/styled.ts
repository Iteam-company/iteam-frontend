import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { LINK_POSITION, StyledProps } from "./util";

export const StyledLink = styled.a<StyledProps>`
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
