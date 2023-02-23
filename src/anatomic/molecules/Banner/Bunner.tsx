import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_TYPES, Text } from "@/anatomic/atoms/Text";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import styled from "styled-components";
import BunnerBg from "@/assets/icon/bunnerBG.svg";

export const Bunner = () => {
    return (
        <FlexColumn
            justifyContent="center"
            alignItems="center"
            h="100%"
            w="100%"
            position="relative"
            bg={`url(${BunnerBg.src})`}
            bgSize="cover"
        >
            <FlexColumn>
                <Text
                    size="50px"
                    letterSpacing="2px"
                    color="black"
                    weight="700"
                    type={TEXT_TYPES.text_block}
                >
                    Here at All Front, we always
                </Text>
                <TextTyping
                    textStyles={{
                        size: "50px",
                        letterSpacing: "2px",
                        color: "#black",
                        weight: "700",
                        type: TEXT_TYPES.text_block,
                    }}
                    text={[
                        "test out work.",
                        "put your users first.",
                        "make you feel at easy.",
                        "deliver on time.",
                        "strive of simplicity.",
                    ]}
                />
            </FlexColumn>
        </FlexColumn>
    );
};

const Button = styled.button`
    z-index: 1;
    border: 2px solid ${COLORS.black};
    padding: 18px 24px;
    background-color: transparent;
    cursor: pointer;
`;
