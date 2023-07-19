import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    TEXT_SIZES,
    LETTER_SPACING,
    TEXT_WEIGHTS,
    Text,
    TEXT_TYPES,
} from "@/anatomic/atoms/Text";
import { Title } from "@/lib/pageStyles/teamStyles";
import { COLORS } from "@/lib/theme/color";
import { FC } from "react";

type Props = {
    title: string;
    description: string;
};

export const TeamTitle: FC<Props> = ({ title, description }) => {
    return (
        <>
            <FlexColumn justifyContent="center" alignItems="start">
                <Text
                    size={TEXT_SIZES.small.s}
                    letterSpacing={LETTER_SPACING.s}
                    weight={TEXT_WEIGHTS.medium}
                    type={TEXT_TYPES.title}
                    color={COLORS.warmGray}
                >
                    {title}
                </Text>
                <Title
                    size={TEXT_SIZES.large.m}
                    color={COLORS.dark}
                    weight={TEXT_WEIGHTS.medium}
                    mobileSize={TEXT_SIZES.medium.xs}
                >
                    {description}
                </Title>
            </FlexColumn>
        </>
    );
};
