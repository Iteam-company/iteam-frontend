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
export const Container = styled.div`
    margin: 0 50px;
    height: 80vh;
    padding: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 24px;
    @media all and (max-width: 899px) {
        margin: 0 10px;
    }
`;
