import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import { Flex } from "./styled";
import { INFO } from "./utils";

export const Info = () => {
    return (
        <Flex gap="24px" p="20px" w="40%">
            <Text
                weight={TEXT_WEIGHTS.main}
                color={COLORS.textPrimary}
                size={TEXT_SIZES.medium.s}
            >
                Lets talk
            </Text>
            <FlexColumn gap="30px">
                <Text color={COLORS.warmGray} size={TEXT_SIZES.small.xl}>
                    Feel free to send us an enquiry using the contact form. We
                    will replay within 24 hour
                </Text>
                {INFO.map((item) => (
                    <FlexRow alignItems="center" gap="10px" key={item.title}>
                        {item.icon}
                        <FlexColumn>
                            <Text
                                size={TEXT_SIZES.small.xl}
                                color={COLORS.black}
                            >
                                {item.title}
                            </Text>
                            <Text
                                size={TEXT_SIZES.small.xl}
                                color={COLORS.black}
                            >
                                {item.text}
                            </Text>
                        </FlexColumn>
                    </FlexRow>
                ))}
            </FlexColumn>
        </Flex>
    );
};
