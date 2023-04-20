import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Footer } from "@/anatomic/organisms/Footer";
import { Header } from "@/anatomic/organisms/Header";
import { COLORS } from "@/lib/theme/color";
import React, { FC, ReactNode } from "react";
import { ButtonUp } from "../ButtonUp";
import { StyledLayout } from "./styled";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
import { useDelayedScroll } from "@/hooks/useDelayedScroll";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    useDelayedScroll();

    return (
        <StyledLayout>
            <LogoAnimation />
            <Header />
            <main>
                <FlexColumn
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                    bg={COLORS.pageBG}
                >
                    {children}
                </FlexColumn>
            </main>
            <ButtonUp />
            <Footer />
        </StyledLayout>
    );
};
