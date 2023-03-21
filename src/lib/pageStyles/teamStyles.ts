import styled from "styled-components";
import { TEXT_SIZES, Text } from "@/anatomic/atoms/Text";

export const Container = styled.div`
    margin: 0 50px;
    height: 70vh;
    padding: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 24px;
    @media all and (max-width: 899px) {
        margin: 0 10px;
    }
`;
export const Title = styled(Text)`
    max-width: 1000px;
    @media all and (max-width: 899px) {
        font-size: ${TEXT_SIZES.xxl};
    }
`;
