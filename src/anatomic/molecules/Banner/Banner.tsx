import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_SIZES, Text } from "@/anatomic/atoms/Text";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";
import {
    AddaptFoIbg,
    AddaptForText,
    StyledTypingEffectAdapt,
} from "@/anatomic/atoms/Addapt/addapt";
import { AdoptForText } from "@/anatomic/atoms/TextTyping/styled";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Button } from "./styled";
import { TEXT_CONTENT } from "@/lib/lang";
import useScrollUp from "@/hooks/useScrollUp";
import useScrollToElement from "@/hooks/useScrollToElement";
import { useRouter } from "next/router";
interface PropsI {
    main: {
        text: TextI[];
        description: string;
        buttonText?: string;
    };
}
export interface TextI {
    text: string;
}

export const Banner: FC<PropsI> = ({ main }) => {
    const optionList = main.text.map((item: TextI) => item.text);
    const size = useWindowSize();
    const router = useRouter();

    const onButtonClick = () => router.push("/contact_us");

    return (
        <FlexColumn mw={size.width! > 992 ? "75%" : "770px"} gap="30px">
            <TextTyping text={optionList} />
            <AdoptForText>{main.description}</AdoptForText>
            {/* TODO: Add this to Strapi */}
            <Button onClick={onButtonClick}>
                {main.buttonText || TEXT_CONTENT.banner.button}
            </Button>
        </FlexColumn>
    );
};
