import React, { FC } from "react";

import styled from "styled-components";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";

export const Logo: FC<{ color?: string }> = ({ color = "black" }) => {
    return (
        <Text size={TEXT_SIZES.s} weight={TEXT_WEIGHTS.main} color={color}>
            iteam.
        </Text>
    );
};
const Icon = styled.img`
    height: 40px;
`;
