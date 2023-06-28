import { ReactNode } from "react";
import { Props as TextProps } from "@/anatomic/atoms/Text";

export interface Props {
    className?: string;
    href: string;
    linkText: string;
    p?: string;
    icon?: ReactNode;
    gap?: string;
    linkPosition?: LINK_POSITION | string;
    textStyles?: TextProps;
    children?: JSX.Element;
}

export interface StyledProps {
    p?: string;
    linkPosition?: LINK_POSITION | string;
}

export const enum LINK_POSITION {
    header = "header",
    footer = "footer",
}
