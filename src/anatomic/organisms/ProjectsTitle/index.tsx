import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Desktop, Mobile } from "../AppsImplement/AppsImplement";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";

export const ProjectTitle = () => {
    return (
        <>
            <Desktop w="100%">
                <FlexColumn
                    w="100%"
                    justifyContent="center"
                    position="relative"
                >
                    <FlexColumn
                        mw="900px"
                        justifyContent="center"
                        alignItems="start"
                        position="absolute"
                        style={{ left: "28%" }}
                    >
                        <Text
                            size={TEXT_SIZES.small.s}
                            letterSpacing={LETTER_SPACING.s}
                            weight={TEXT_WEIGHTS.medium}
                            type={TEXT_TYPES.title}
                            color={COLORS.warmGray}
                        >
                            OUR WORK
                        </Text>
                        <Text
                            size={TEXT_SIZES.large.l}
                            color={COLORS.dark}
                            weight={TEXT_WEIGHTS.medium}
                        >
                            Crafting exceptional and user-centric digital
                            products that captivate and enchant your clients,
                            sparking love at first click.
                        </Text>
                    </FlexColumn>
                </FlexColumn>
            </Desktop>
            <Mobile w="100%">
                <FlexColumn
                    mw="700px"
                    justifyContent="center"
                    alignItems="start"
                >
                    <Text
                        size={TEXT_SIZES.small.s}
                        letterSpacing={LETTER_SPACING.s}
                        weight={TEXT_WEIGHTS.medium}
                        type={TEXT_TYPES.title}
                        color={COLORS.warmGray}
                    >
                        OUR WORK
                    </Text>
                    <Text
                        size={TEXT_SIZES.medium.xl}
                        color={COLORS.dark}
                        weight={TEXT_WEIGHTS.medium}
                        mobileSize={TEXT_SIZES.medium.s}
                    >
                        Crafting exceptional and user-centric digital products
                        that captivate and enchant your clients, sparking love
                        at first click.
                    </Text>
                </FlexColumn>
            </Mobile>
        </>
    );
};
