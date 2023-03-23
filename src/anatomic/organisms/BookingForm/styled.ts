import { Flex } from "@/anatomic/atoms/Flex";
import styled from "styled-components";

export const FlexContainer = styled(Flex)`
    @media all and (max-width: 550px) {
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }
`;
