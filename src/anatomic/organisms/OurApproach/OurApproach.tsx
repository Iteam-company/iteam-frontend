import React, { FC, memo } from "react";
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

export const OurApproach: FC<Props> = memo(({ approaches }) => {
    return (
        <FlexColumn w="100%" h="auto" alignItems="center" zIndex="5" mw="934px">
            <Desktop w="100%" alignItems="center">
                <ApproachSlide approaches={approaches} />
            </Desktop>

            <Mobile w="100%" alignItems="center">
                <SwiperRange maxValue={approaches.length - 1}>
                    {approaches.map((item: ApproachInterface) => (
                        <SwiperSlide
                            key={item.step}
                            style={{
                                minHeight: "400px",
                            }}
                        >
                            <ApproachSlideMobile {...item} />
                        </SwiperSlide>
                    ))}
                </SwiperRange>
            </Mobile>
        </FlexColumn>
    );
});

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
OurApproach.displayName = "OurApproach";
