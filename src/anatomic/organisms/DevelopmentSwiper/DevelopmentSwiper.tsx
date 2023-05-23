import { FlexColumn } from "@/anatomic/atoms/Flex";
import React, { FC, memo } from "react";
import styled from "styled-components";
import { DevelopmentDesktop } from "./DevelopmentDesktop";
import { DevelopmentMobile } from "./DevelopmentMobile";
import { InfoInterface } from "@/pages/development";

export interface TechnologiesProps {
    technologies: InfoInterface[];
}

export const DevelopmentSwiper: FC<TechnologiesProps> = memo(
    ({ technologies = [] }) => {
        return (
            <>
                <Desktop>
                    <DevelopmentDesktop technologies={technologies} />
                </Desktop>

                <Mobile>
                    <DevelopmentMobile technologies={technologies} />
                </Mobile>
            </>
        );
    },
);

const Mobile = styled(FlexColumn)`
    @media all and (min-width: 900px) {
        display: none;
    }
`;
const Desktop = styled(FlexColumn)`
    @media all and (max-width: 899px) {
        display: none;
    }
`;
DevelopmentSwiper.displayName = "DevelopmentSwiper";
