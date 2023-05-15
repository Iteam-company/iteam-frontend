import React, { FC } from "react";
import { StyledTypingEffect } from "./styled";
import { Props as TextProps } from "@/anatomic/atoms/Text";
import Typewriter from "typewriter-effect";

interface Props {
    text: any;
    textStyles?: TextProps;
}

export const TextTyping: FC<Props> = ({ text }) => {
    return (
        <StyledTypingEffect>
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                }}
            />
        </StyledTypingEffect>
    );
};
