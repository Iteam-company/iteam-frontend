import { COLORS } from "@/lib/theme/color";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiReact } from "react-icons/si";

export const icons = {
    ts: <SiTypescript color={COLORS.warmGray} size={26} />,
    js: <SiJavascript color={COLORS.warmGray} size={26} />,
    react: <SiReact color={COLORS.warmGray} size={26} />,
    angular: <SiAngular color={COLORS.warmGray} size={26} />,
};
export const iconsMobile = {
    ts: <SiTypescript color={COLORS.warmGray} size={16} />,
    js: <SiJavascript color={COLORS.warmGray} size={16} />,
    react: <SiReact color={COLORS.warmGray} size={16} />,
    angular: <SiAngular color={COLORS.warmGray} size={16} />,
};
