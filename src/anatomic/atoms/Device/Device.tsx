import React, { FC } from "react";
import { Screen } from "./styled";

export const Device: FC<{ image: string }> = ({ image }) => {
    return <Screen src={image} />;
};
