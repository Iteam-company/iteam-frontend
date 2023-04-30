import React, { FC } from "react";
import { StyledTypingEffect } from "./styled";
import Typewriter from "typewriter-effect";
interface Props {
    text: string[];
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
