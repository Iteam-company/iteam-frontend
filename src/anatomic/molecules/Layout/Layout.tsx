import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Footer } from "@/anatomic/organisms/Footer";
import { Header } from "@/anatomic/organisms/Header";
import React, { FC, ReactNode } from "react";
import { ButtonUp } from "../ButtonUp";
import { StyledLayout } from "./styled";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <StyledLayout className="layout">
            <Header />
            <main>
                <FlexColumn
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                >
                    {children}
                </FlexColumn>
            </main>
            <ButtonUp />
            <Footer />
        </StyledLayout>
    );
};
