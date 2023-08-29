import { COLORS } from "@/lib/theme/color";
import Image from "next/image";
import styled from "styled-components";

export const Dot = styled.div`
    height: 8px;
    width: 8px;
    border: 2px solid ${COLORS.dark};
    border-radius: 50%;
    position: relative;

    &.dot--outer-circle::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        content: "";
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: ${COLORS.dark};
    }
`;

export const NavDots = styled.div`
    position: absolute;
    left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
`;

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const PinedWindow = styled.div<{ h?: string; navigation: boolean }>`
    position: relative;
    margin: 0 20px;
    height: ${({ h }) => (h ? h : "90vh")};
    width: 95vw;
    padding-left: ${({ navigation }) => (navigation ? "5%" : "0px")};
    box-sizing: border-box;
    border-radius: 20px;
    background-color: ${COLORS.white};
    box-shadow: 0px 4px 20px 0px #00000040;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

export const LeftContentContainer = styled.div<{ isTwoColumn?: boolean }>`
    position: relative;
    width: ${({ isTwoColumn }) => (isTwoColumn ? "55%" : "100%")};
    height: 100%;
    overflow: hidden;
`;
export const ImagesContainer = styled.div`
    position: relative;
    padding-bottom: 35%;
    height: auto;
    width: 55%;
`;
export const StyledContainer = styled.div<{
    index: number;
    isMobile?: boolean;
}>`
    position: absolute;
    top: ${({ isMobile }) => (isMobile ? "-49%" : "0")};
    left: ${({ isMobile }) => (isMobile ? "-10%" : "0")};
    width: 100%;
    height: 100%;
    min-height: 290px;
    min-width: 290px;
    aspect-ratio: 1/1;
    overflow: hidden;
    margin-left: 7px;
    transform: none;
    z-index: ${({ index = 1 }) => index};
    background: white;
    transform: ${({ index = 1 }) => !!index && "translate(100%, 0px)"};
`;
export const StyledImage = styled(Image)<{ index: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
    overflow: hidden;
    z-index: ${({ index = 1 }) => index};
    transform: ${({ index = 1 }) => !!index && "translate(-100%, 0px)"};
`;

export const StyledContentContainer = styled.div<{
    slidePosition?: string;
    index: number;
}>`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: ${({ slidePosition }) =>
        slidePosition ? slidePosition : "center"};
    align-items: center;
    z-index: ${({ index = 1 }) => index};
    width: ${({ slidePosition }) => (slidePosition ? "auto" : "100%")};
    overflow: hidden;
    transform: ${({ index = 1 }) => !!index && "translate(100%, 0px)"};
`;

export const StyledWrapper = styled.div`
    height: 125%;
    width: 1px;
`;
export const AbsoluteWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
`;
