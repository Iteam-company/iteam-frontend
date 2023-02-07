import { COLORS } from "@/lib/theme/color";
import { ReactNode } from "react";
import { TEXT_SIZES, TEXT_WEIGHTS } from "../Text";

export interface Props {
    href: string;
    size?: TEXT_SIZES | string;
    weight?: TEXT_WEIGHTS | string;
    lineHeight?: string;
    color?: COLORS | string;
    className?: string;
    w?: string;
    font?: string;
    textAlign?: string;
    textTransform?: string;
    whiteSpace?: string;
    letterSpacing?: string;
    linkText: string;
    p?: string;
    icon?: ReactNode;
    gap?: string;
    linkPosition?: LINK_POSITION | string;
}

export interface StyledProps {
    p?: string;
    linkPosition?: LINK_POSITION | string;
}

export const enum LINK_POSITION {
    header = "header",
    footer = "footer",
}
