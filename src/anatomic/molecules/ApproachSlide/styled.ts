import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { Text } from "@/anatomic/atoms/Text";
import repeatIcon from "@/assets/icon/repeat.png";

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

export const RepeatButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: linear-gradient(
        109.75deg,
        #ffffff -1.04%,
        rgba(206, 188, 255, 0.19) 26.21%,
        rgba(182, 124, 255, 0.18) 52.65%,
        rgba(141, 71, 255, 0.43) 74.36%
    );
    box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.2);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:after {
        content: url(${repeatIcon.src});
        background-color: #f6eefc;
        border-radius: 50%;
        height: 34px;
        width: 34px;
        box-sizing: border-box;
        aspect-ratio: 1 / 1;
    }
`;
