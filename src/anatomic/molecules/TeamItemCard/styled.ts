import { COLORS } from "@/lib/theme/color";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import styled from "styled-components";
import LabelIcon from "@/assets/icon/label.png";
import { TEXT_WEIGHTS, Text } from "@/anatomic/atoms/Text";
import { Swiper as SwiperComponent } from "swiper/react";
import ArrowLeft from "@/assets/icon/leftvector.svg";
import ArrowRight from "@/assets/icon/vector.svg";

export const Avatar = styled.div<{ image: any }>`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${({ image }) => image});
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
export const Label = styled(FlexColumn)<{ width?: number }>`
    height: 27px;
    width: 30px;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${LabelIcon.src});
    position: absolute;
    top: -20px;
    left: calc(${({ width }) => width} * 20% - 15px);
`;

export const GradientElem = styled.div<{ gradient: string }>`
    height: 32px;
    width: 100px;
    border-radius: 50px;
    padding: 2px;
    background-image: linear-gradient(${({ gradient }) => gradient});
`;

export const GradientElemContent = styled(FlexRow)`
    background: white;
    border-radius: 50px;
    width: 100%;
    height: 100%;
`;
export const CardTitle = styled(Text)`
    color: #433c5c;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: ${TEXT_WEIGHTS.medium};
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
    }
    .swiper-button-next {
        height: 30px;
        ::after {
            content: url(${ArrowRight.src});
        }
    }
`;