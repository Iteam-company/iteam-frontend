import { FlexColumn } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
interface MobileProps {
    mW?: number;
}

export const Mobile = styled(FlexColumn)<MobileProps>`
    @media all and (min-width: ${({ mW }) =>  mW ? `${mW - 1}px` : '800px'}) {
        display: none;
    }
`;
export const Desktop = styled(FlexColumn)<MobileProps>`
    @media all and (max-width: ${({ mW }) => mW ? `${mW - 1}px` : '799px'}) {
        display: none;
    }
`;


export const Stick = styled.div`
    width: 1px;
    height: 20px;
    background-color: black;
`

export const SliderBox = styled.div`
    padding-left: 20px`