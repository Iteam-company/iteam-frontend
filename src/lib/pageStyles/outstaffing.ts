import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { COLORS } from "../theme/color";

export const Card = styled(FlexColumn)`
    z-index: 1;
    max-width: 935px;
    padding: 55px 90px 75px;
    background: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
    box-sizing: border-box;
`;
