import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    ApproachSlide,
    ApproachSlideMobile,
} from "@/anatomic/molecules/ApproachSlide";
import { ApproachInterface } from "@/pages/api/outstaffing";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { SwiperRange } from "../SwiperRange";

interface Props {
    approaches: ApproachInterface[];
}

export const OurApproach: FC<Props> = ({ approaches }) => {
    return (
        <FlexColumn w="100%" h="auto" alignItems="center" zIndex="5">
            <Desktop>
                <ApproachSlide approaches={approaches} />
            </Desktop>

            <Mobile w="100%" alignItems="center">
                <SwiperRange maxValue={approaches.length - 1}>
                    {approaches.map((item: ApproachInterface) => (
                        <SwiperSlide
                            key={item.step}
                            style={{
                                boxSizing: "border-box",
                                borderRadius: "16px",
                                minHeight: "400px",
                                background: "#FFFFFF",
                                boxShadow: "0px 4px 20px rgba(37, 7, 67, 0.37)",
                            }}
                        >
                            <ApproachSlideMobile {...item} />
                        </SwiperSlide>
                    ))}
                </SwiperRange>
            </Mobile>
        </FlexColumn>
    );
};

const Mobile = styled(FlexColumn)`
    @media all and (min-width: 603px) {
        padding: 0 20px;
        display: none;
    }
`;
const Desktop = styled(FlexColumn)`
    @media all and (max-width: 602px) {
        display: none;
    }
`;
