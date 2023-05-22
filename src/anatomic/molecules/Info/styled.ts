import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";

export const Flex = styled(FlexColumn)`
    @media all and (max-width: 850px) {
        order: -1;
        width: 80%;
    }
`;
export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;
