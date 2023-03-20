import { ReactNode } from "react";

export interface Props {
    variant?: BUTTON_VARIANTS;
    className?: string;
    color?: any;
    w?: string;
    p?: string;
    textColor?: string;
    label?: ReactNode;
    icon?: string;
    href?: string;
    hoverColor?: string;
    onClick?: Function;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    gradient?: any;
}

export const enum BUTTON_VARIANTS {
    color = "COLOR",
    change = "CHANGE",
    icon = "ICON",
    gradient_link = "GRADIENT_LINK",
    gradient_button = "GRADIENT_BUTTON",
}
