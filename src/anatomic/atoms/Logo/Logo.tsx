import React, { FC } from "react";
import { COLORS } from "@/lib/theme/color";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import { TEXT_CONTENT } from "@/lib/lang";
import Link from "next/link";

export const Logo: FC<{ color?: string }> = ({ color = COLORS.dark }) => {
    return (
        <Link
            href="/"
            style={{
                textDecoration: "none",
            }}
        >
            <Text
                size={TEXT_SIZES.small.xl}
                weight={TEXT_WEIGHTS.main}
                color={color}
            >
                {TEXT_CONTENT.logo}
            </Text>
        </Link>
    );
};
