import { COLORS } from "@/lib/theme/color";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import { Text } from "@/anatomic/atoms/Text";
import repeatIcon from "@/assets/icon/repeat.svg";

export const StepTitle = styled(Text)`
    position: absolute;
    bottom: 35px;
    @media all and (max-width: 600px) {
        bottom: 0px;
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
    @media all and (max-width: 600px) {
        max-width: 100px;
        min-width: 100px;
        height: 100px;
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
    @media all and (max-width: 600px) {
        max-width: 100px;
        min-width: 100px;
    }
`;

export const RepeatButton = styled.button`
    position: absolute;
    bottom: 30px;
    right: 40px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: linear-gradient(
        109.75deg,
        ${COLORS.white} -1.04%,
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
        padding-top: 8px;
        content: url(${repeatIcon.src});
        background-color: ${COLORS.lightPurple};
        border-radius: 50%;
        height: 34px;
        width: 34px;
        box-sizing: border-box;
        aspect-ratio: 1 / 1;
    }
`;
