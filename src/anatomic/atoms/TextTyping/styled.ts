import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { TEXT_SIZES, TEXT_WEIGHTS } from "../Text/util";

export const StyledTypingEffect = styled.div`
    font-size: ${TEXT_SIZES.large.m};
    color: ${COLORS.dark};
    font-weight: ${TEXT_WEIGHTS.medium};
`;
