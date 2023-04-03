import { COLORS } from "@/lib/theme/color";
import { Link } from "@/anatomic/atoms/Link";
import styled from "styled-components";

export const LinkElem = styled(Link)<{ active: boolean }>`
    padding: 10px 0;
    ::after {
        content: "";
        position: absolute;
        bottom: 7px;
        width: ${({ active }) => (active ? "100%" : "0")};
        background-color: ${COLORS.white};
        height: 2px;
        transition: width 0.5s ease;
        left: 0;
    }
`;
