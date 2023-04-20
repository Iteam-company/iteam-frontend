import React, { FC } from "react";
import { COLORS } from "@/lib/theme/color";
import { TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import { TEXT_CONTENT } from "@/lib/lang";
import { Link } from "../Link";

export const Logo: FC<{ color?: string }> = ({ color = COLORS.dark }) => {
    return (
        <Link
            href="/"
            linkText={TEXT_CONTENT.logo}
            textStyles={{
                size: TEXT_SIZES.small.xl,
                weight: TEXT_WEIGHTS.main,
                color: color,
            }}
        />
    );
};
