import React, { FC } from "react";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_SIZES, Text } from "@/anatomic/atoms/Text";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";
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
            <Text size={TEXT_SIZES.medium.xs} color={COLORS.textThird}>
                {main.description}
            </Text>
        </FlexColumn>
    );
};
