import { FlexColumn } from "@/anatomic/atoms/Flex";

import styled from "styled-components";

export const Mobile = styled(FlexColumn)`
    @media all and (min-width: 800px) {
        display: none;
    }
`;
export const Desktop = styled(FlexColumn)`
    @media all and (max-width: 799px) {
        display: none;
    }
`;
