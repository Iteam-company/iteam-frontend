import { COLORS } from "@/lib/theme/color";
import { ReactNode } from "react";

export interface Props {
    type?: TEXT_TYPES;
    size?: TEXT_SIZES | string;
    weight?: TEXT_WEIGHTS | string;
    lineHeight?: string;
    color?: COLORS | string;
    className?: string;
    children?: ReactNode;
    w?: string;
    font?: string;
    textAlign?: string;
    textTransform?: string;
    whiteSpace?: string;
    letterSpacing?: string;
}
export const enum TEXT_SIZES {
    xxxs = "11px",
    xxs = "14px",
    xs = "16px",
    s = "18px",
    m = "20px",
    l = "24px",
    xl = "30px",
    xxl = "42px",
}

export const enum LETTER_SPACING {
    xs = "0.44x",
    s = "0.5px",
    m = "0.8px",
    l = "1px",
}

export const enum LINE_HEIGHT {
    s = "1.5px",
    m = "1.6px",
}

export const enum TEXT_TYPES {
    title = "TITLE",
    text = "TEXT",
    text_block = "TEXT_BLOCK",
}

export const enum TEXT_WEIGHTS {
    normal = "400",
    main = "500",
    medium = "600",
    bold = "700",
}
