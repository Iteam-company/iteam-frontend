import styled from "styled-components";
import { Text, TEXT_SIZES } from "@/anatomic/atoms/Text";

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: transparent;
`;
export const Title = styled(Text)`
    max-width: 1000px;
    @media all and (max-width: 899px) {
        font-size: ${TEXT_SIZES.xxl};
    }
`;
