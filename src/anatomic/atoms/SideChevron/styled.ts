import styled from "styled-components";
import { FlexRow } from "../Flex";

export const Card = styled(FlexRow)<{ right?: string }>`
    width: 90%;
    align-items: center;
    gap: 10px;
    position: absolute;
    z-index: 5;
    min-height: 80px;
    background-color: #e7e3fae5;
    border-radius: 10px 0px 0px 10px;
    right: ${({ right }) => right};
`;
