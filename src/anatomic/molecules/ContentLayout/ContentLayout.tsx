import { FlexRow } from "@/anatomic/atoms/Flex";
import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    alignItem?: string;
}
export const ContentLayout: FC<Props> = ({
    children,
    alignItem = "center",
}) => {
    return (
        <FlexRow
            alignItems={alignItem}
            justifyContent="space-between"
            m="auto"
            w="60%"
        >
            {children}
        </FlexRow>
    );
};
