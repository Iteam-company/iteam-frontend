import { COLORS } from "@/lib/theme/color";
import { ReactNode } from "react";

export const TEXT_SIZES = {
    small: { xs: "10px", s: "12px", m: "14px", l: "16px", xl: "18px" },
    medium: { xs: "20px", s: "22px", m: "24px", l: "30px", xl: "32px" },
    large: { xs: "34px", s: "36px", m: "42px", l: "50px", xl: "54px" },
};

export interface Props {
    type?: TEXT_TYPES;
    size?: keyof typeof TEXT_SIZES | string;
    weight?: TEXT_WEIGHTS | string;
    lineHeight?: string;
    color?: COLORS | string;
    className?: string;
    children?: ReactNode;
    w?: string;
    font?: string;
    textAlign?: string;
    textTransform?: string;
    textDecoration?: string;
    whiteSpace?: string;
    letterSpacing?: string;
    mobileSize?: keyof typeof TEXT_SIZES | string;
}

export const enum LETTER_SPACING {
    xs = "0.44x",
    s = "0.5px",
    m = "0.8px",
    l = "1px",
    xl = "2px",
}

export const enum LINE_HEIGHT {
    s = "1.5",
    m = "1.6",
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
