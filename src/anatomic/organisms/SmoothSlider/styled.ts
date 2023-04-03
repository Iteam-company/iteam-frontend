import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";

export const Dot = styled.div`
    height: 8px;
    width: 8px;
    border: 2px solid ${COLORS.dark};
    border-radius: 50%;
    position: relative;

    &.dot--outer-circle::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        content: "";
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: ${COLORS.dark};
    }
`;
