import React, { FC } from "react";
import { Text } from "../Text/Text";
import { StyledTypingEffect } from "./styled";
import { Props as TextProps, TEXT_TYPES } from "@/anatomic/atoms/Text";

interface Props {
    text: string | string[];
    textStyles?: TextProps;
}

export const TextTyping: FC<Props> = ({ text, textStyles }) => {
    return (
        <StyledTypingEffect
            speed={200}
            typingDelay={1500}
            text={text}
            cursorClassName="cursor"
            displayTextRenderer={(text, i) => {
                return (
                    <Text type={TEXT_TYPES.text_block} {...textStyles}>
                        {text}
                    </Text>
                );
            }}
        />
    );
};
