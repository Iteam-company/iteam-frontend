import React, { FC } from "react";
import styled from "styled-components";
import { FlexColumn } from "../Flex";

export const Device: FC<{ image: string }> = ({ image }) => {
    return (
        // <FlexColumn w="100%" mh="500px">
        <Screen src={image} />
        // </FlexColumn>
    );
};
const Screen = styled.img`
    height: 100%;
    width: 100%;
`;
// const Screen = styled.div<{ image: any }>`
//     height: 100px;
//     width: 100px;
//     background: transparent no-repeat center;
//     background-size: cover;
//     background-image: url(${({ image }) => image});
// `;
