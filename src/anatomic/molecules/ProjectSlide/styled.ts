import { FlexColumn } from "@/anatomic/atoms/Flex";

import styled from "styled-components";

export const Mobile = styled(FlexColumn)`
    @media all and (min-width: 900px) {
        display: none;
    }
`;
export const Desktop = styled(FlexColumn)`
    @media all and (max-width: 899px) {
        display: none;
    }
`;
