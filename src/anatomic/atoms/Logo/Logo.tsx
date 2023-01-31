import React from "react";
import LogoIcon from "@/assets/icon/logo.png";
import styled from "styled-components";

export const Logo = () => {
    return <Icon src={LogoIcon.src} />;
};
const Icon = styled.img`
    height: 45px;
`;
