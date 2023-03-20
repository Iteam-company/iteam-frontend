import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import { Flex } from "./styled";
import { INFO } from "./utils";

export const Info = () => {
    return (
        <Flex gap="24px" p="24px" w="40%">
            <Text
                weight={TEXT_WEIGHTS.medium}
                color={COLORS.text}
                size={TEXT_SIZES.m}
            >
                Lets talk
            </Text>
            <FlexColumn gap="16px">
                <Text>
                    Feel free to send us an enquiry using the contact form. We
                    will replay within 24 hour
                </Text>
                {INFO.map((item) => (
                    <FlexRow alignItems="center" gap="16px" key={item.title}>
                        {item.icon}
                        <FlexColumn>
                            <Text
                                weight={TEXT_WEIGHTS.main}
                                color={COLORS.text}
                            >
                                {item.title}
                            </Text>
                            <Text color="#222f3e">{item.text}</Text>
                        </FlexColumn>
                    </FlexRow>
                ))}
            </FlexColumn>
        </Flex>
    );
};
