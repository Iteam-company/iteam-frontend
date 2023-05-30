import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_SIZES, Text } from "@/anatomic/atoms/Text";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";
import { AddaptFoIbg, AddaptForText, StyledTypingEffectAdapt } from "@/anatomic/atoms/Addapt/addapt";
import { AdoptForText } from "@/anatomic/atoms/TextTyping/styled";
interface PropsI {
    main: {
        text: TextI[];
        description: string;
    };
}
export interface TextI {
    text: string;
}

export const Banner: FC<PropsI> = ({ main }) => {
    const optionList = main.text.map((item: TextI) => item.text);

    return (
        <FlexColumn mw="778px" mh="200px" justifyContent="space-between">
            <TextTyping text={optionList} />
          <AdoptForText>
          {main.description}
          </AdoptForText>
        </FlexColumn>
    );
};
