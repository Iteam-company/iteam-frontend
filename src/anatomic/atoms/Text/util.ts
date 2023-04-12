import { COLORS } from "@/lib/theme/color";
import { ReactNode } from "react";

interface TextSizesInterface {
    small: typeof SMALL_TEXT_SIZES;
    medium: typeof MEDIUM_TEXT_SIZES;
    large: typeof LARGE_TEXT_SIZES;
}

enum SMALL_TEXT_SIZES {
    xs = "10px",
    s = "12px",
    m = "14px",
    l = "16px",
    xl = "18px",
}

enum MEDIUM_TEXT_SIZES {
    xs = "20px",
    s = "22px",
    m = "24px",
    l = "30px",
    xl = "32px",
}
enum LARGE_TEXT_SIZES {
    xs = "34px",
    s = "36px",
    m = "42px",
    l = "50px",
    xl = "54px",
}

export const TEXT_SIZES: TextSizesInterface = {
    small: SMALL_TEXT_SIZES,
    medium: MEDIUM_TEXT_SIZES,
    large: LARGE_TEXT_SIZES,
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
    mobileLineHeight?: string;
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
    thin = "300",
    normal = "400",
    main = "500",
    medium = "600",
    bold = "700",
}
