import React, { FC } from "react";
import { ShowContainet, StyledTypingEffect } from "./styled";
import Typewriter from "typewriter-effect";
import { AddaptForText, StyledTypingEffectAdapt } from "../Addapt/addapt";
interface Props {
    text: string[];
}
export const TextTyping: FC<Props> = ({ text }) => {
    return (
        <>
        <StyledTypingEffectAdapt>
        <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                }}
            />
       </StyledTypingEffectAdapt>
        </>   
    );
};
