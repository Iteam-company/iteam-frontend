import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { FC } from "react";

type Props = {
    title: string;
    description: string;
};

export const DevelopmentTitle: FC<Props> = ({ title, description }) => {
    return (
        <>
            <Text
                textAlign="center"
                color={COLORS.textPrimary}
                size={TEXT_SIZES.large.xs}
                weight={TEXT_WEIGHTS.medium}
                mobileSize={TEXT_SIZES.small.xl}
                type={TEXT_TYPES.title}
            >
                {title}
            </Text>

            <Text
                textAlign="center"
                color={COLORS.textThird}
                size={TEXT_SIZES.medium.xs}
                letterSpacing={LETTER_SPACING.s}
                mobileSize={TEXT_SIZES.small.l}
            >
                {description}
            </Text>
        </>
    );
};
