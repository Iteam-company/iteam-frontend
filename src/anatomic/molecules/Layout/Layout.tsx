import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Footer } from "@/anatomic/organisms/Footer";
import { Header } from "@/anatomic/organisms/Header";
import { COLORS } from "@/lib/theme/color";
import React, { FC, ReactNode } from "react";
import { ButtonUp } from "../ButtonUp";
import { StyledLayout } from "./styled";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
import { useDelayedScroll } from "@/hooks/useDelayedScroll";
import { useStrapiData, Pages } from "@/hooks/useStrapiData";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    useDelayedScroll();
    const [data, isLoading] = useStrapiData(Pages.headerFooter);
    if (!data) return null;

    return (
        <StyledLayout>
            <LogoAnimation />
            <Header data={data.header} />
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
            <Footer
                data={data.footer}
                title={data.info}
                socialMedia={data.socialMedia}
                footerText={data.footerText}
            />
        </StyledLayout>
    );
};
