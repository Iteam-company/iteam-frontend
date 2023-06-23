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
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    const size = useWindowSize();
    const partial = size.width! < 801 ? 2.1 : null;

    useDelayedScroll(4000, partial);
    const [data, isLoading] = useStrapiData(Pages.headerFooter);
    if (!data) return <LogoAnimation />;

    return (
        <StyledLayout>
            <>
                <div style={{ background: "#FDFBFF" }}>
                    <LogoAnimation />
                    <div
                        style={{
                            maxWidth: "1450px",
                            margin: "0 auto",
                        }}
                    >
                        <Header data={data.header} />
                    </div>
                </div>
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
            </>
        </StyledLayout>
    );
};
