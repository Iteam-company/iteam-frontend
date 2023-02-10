import React from "react";
import LogoIcon from "@/assets/icon/logo.png";
import LogoWhiteIcon from "@/assets/icon/logo-white.png";
import LogoGoldIcon from "@/assets/icon/logo-orange.png";

import styled from "styled-components";

export const Logo = () => {
    // return <Icon src={LogoIcon.src} />;
    // return <Icon src={LogoWhiteIcon.src} />;
    return <Icon src={LogoGoldIcon.src} />;
};
const Icon = styled.img`
    height: 40px;
`;
