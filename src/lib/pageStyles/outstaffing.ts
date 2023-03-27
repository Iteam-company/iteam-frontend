import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
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

    @media all and (max-width: 700px) {
        padding: 30px;
    }
`;
export const FlexContainer = styled(FlexRow)`
    @media all and (max-width: 600px) {
        flex-direction: column;
        gap: 30px;
    }
`;
export const Img = styled.img`
    height: 100%;
    width: 100%;
`;
