import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";

export const Flex = styled(FlexColumn)`
    @media all and (max-width: 850px) {
        order: -1;
        width: 80%;
    }
`;
