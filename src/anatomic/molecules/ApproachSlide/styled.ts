import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { Text } from "@/anatomic/atoms/Text";

export const StepTitle = styled(Text)`
    position: absolute;
    bottom: 35px;
    @media all and (max-width: 1056px) {
    }
`;
export const Container = styled(FlexColumn)<{ color?: string }>`
    width: 380px;
    height: 380px;
    max-width: 380px;
    min-width: 380px;
    background-color: ${({ color }) => color && color};
    border-radius: 380px;
    @media all and (max-width: 1056px) {
        max-width: 200px;
        min-width: 200px;
        height: 200px;
    }
`;

export const CircularProgressbarContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 380px;
    min-width: 380px;
    @media all and (max-width: 1056px) {
        max-width: 200px;
        min-width: 200px;
    }
`;
