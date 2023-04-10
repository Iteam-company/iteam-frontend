import { FlexColumn } from "@/anatomic/atoms/Flex";
import { GradientTitle } from "@/anatomic/atoms/GradientTitle";
import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";

export const Divider = styled.div<{ height?: string; width?: string }>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    background: ${COLORS.textPrimary};
`;

export const Dot = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: linear-gradient(
        180deg,
        #250743 0%,
        #5f3bc7 63.54%,
        #5f3bc7 97.92%
    );
`;

export const GradientText = styled(GradientTitle)`
    @media all and (max-width: 600px) {
        font-size: 80px;
        line-height: 80px;
    }
`;

export const Container = styled(FlexColumn)`
    @media all and (max-width: 750px) {
        background: linear-gradient(
            90deg,
            rgba(48, 25, 115, 0.46) 7.84%,
            rgba(70, 22, 205, 0) 45.98%
        );
    }
`;

export const Mobile = styled(FlexColumn)`
    @media all and (min-width: 751px) {
        display: none;
    }
`;
export const Desktop = styled(FlexColumn)`
    @media all and (max-width: 750px) {
        display: none;
    }
`;
