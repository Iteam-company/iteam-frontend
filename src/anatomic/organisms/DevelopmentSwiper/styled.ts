import { HorizontalSwiperElem } from "@/anatomic/molecules/HorizontalSwiper";
import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import ArrowLeft from "@/assets/icon/leftvector.svg";
import ArrowRight from "@/assets/icon/vector.svg";

export const Dot = styled.div<{ isActive?: boolean }>`
    width: 35px;
    height: 4px;
    background: ${({ isActive }) =>
        isActive ? COLORS.textSecondary : COLORS.inputBorder};
    border-radius: 10px;
`;

export const SwiperElem = styled(HorizontalSwiperElem)<{
    isCentered?: boolean;
}>`
    padding: 0 55px;
    overflow: hidden;
    z-index: 5;
    @media all and (max-width: 899px) {
        padding: 0 30px;
    }
    .swiper-button-next,
    .swiper-button-prev {
        top: 50%;
    }
    .swiper-button-next {
        left: 95%;

    }
    .swiper-button-prev {
        left: 1%;

    }
    & > * {
        justify-content: ${({ isCentered }) => isCentered && "center"};
    }
`;
