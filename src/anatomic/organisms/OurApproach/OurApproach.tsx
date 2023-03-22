import React, { FC, useState, useCallback, useMemo } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { ApproachSlide } from "@/anatomic/molecules/ApproachSlide";
import { ApproachInterface } from "@/pages/api/outstaffing";

interface Props {
    approaches: ApproachInterface[];
}

export const OurApproach: FC<Props> = ({ approaches }) => {
    return (
        <FlexColumn w="100%" h="auto" alignItems="center" zIndex="5">
            <FlexColumn>
                <ApproachSlide approaches={approaches} />
            </FlexColumn>
        </FlexColumn>
    );
};
