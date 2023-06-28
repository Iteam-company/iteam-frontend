import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import LabelIcon from "@/assets/icon/label.png";
import { Swiper as SwiperComponent } from "swiper/react";
import ArrowLeft from "@/assets/icon/leftvector.svg";
import ArrowRight from "@/assets/icon/vector.svg";
import { Text } from "@/anatomic/atoms/Text";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { ImageProps } from "next/image";

export const Avatar = styled.div<{ image: any }>`
    height: 122px;
    width: 122px;
    border-radius: 50%;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${({ image }) => image});
    @media all and (max-width: 600px) {
        height: 90px;
        width: 90px;
    }
`;
export const Card = styled(FlexColumn)`
    width: 100%;
    height: 140px;
    padding: 20px;
    background: ${COLORS.white};
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    background: ${COLORS.progressTrail};
    border-radius: 16px;
    height: 7px;
`;

export const ProgressIndicator = styled.div<{ width: number }>`
    width: calc(${({ width }) => width} * 20%);
    background: ${COLORS.progressPath};
    height: 7px;
    border-radius: 16px;
`;

export const Label = styled(FlexColumn)<{
    width?: number;
    top?: string;
    bgImg?: ImageProps;
    right?: string;
}>`
    height: 29px;
    width: ${({ bgImg }) => (bgImg ? "41px" : "36px")};
    background: transparent no-repeat center;
    background-size: cover;
    backgroung-position: center;
    background-image: ${({ bgImg }) =>
        bgImg ? `url(${bgImg.src})` : `url(${LabelIcon.src})`};
    position: absolute;
    top: ${({ top }) => top || "-20px"};
    left: calc(${({ width }) => width} * 20% - 15px);
    right: ${({ right }) => right || "0"};

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const GradientElem = styled.div<{
    gradient: string;
    width?: string;
    padding?: string;
}>`
    height: 32px;
    width: ${(props) => props.width || "100px"};
    border-radius: 50px;
    padding: ${(props) => props.padding || "2px"};
    background-image: linear-gradient(${({ gradient }) => gradient});
`;

export const GradientElemContent = styled(FlexRow)`
    background: ${COLORS.white};
    border-radius: 50px;
    width: 100%;
    height: 100%;
`;
export const StyledSwiper = styled(SwiperComponent)`
    border-radius: 16px;
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);

    .swiper-button-prev {
        height: 30px;
        ::after {
            content: url(${ArrowLeft.src});
            display: flex;
            justify-content: center;
            align-items: center;
        }
        left: 0;
    }
    .swiper-button-next {
        height: 30px;
        ::after {
            content: url(${ArrowRight.src});
        }
        right: 0;
    }
`;

export const ItalicText = styled(Text)`
    font-style: italic;
`;
