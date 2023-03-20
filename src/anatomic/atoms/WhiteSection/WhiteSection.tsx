import { COLORS } from "@/lib/theme/color";
import React, { FC, ReactNode } from "react";
import { FlexColumn } from "../Flex";

export const WhiteSection: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <FlexColumn
            mh="230px"
            bg={COLORS.white}
            w="100%"
            zIndex="1"
            justifyContent="center"
            alignItems="center"
            gap="25px"
            p="20px 20px"
            style={{ boxSizing: "border-box" }}
        >
            {children}
        </FlexColumn>
    );
};
