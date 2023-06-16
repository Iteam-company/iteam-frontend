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
import { MainContextProvider } from "@/context/MainContext";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    const size = useWindowSize();
    const partial = size.width! < 801 ? 2.1 : null;

    useDelayedScroll(4000, partial);
    const [data, isLoading] = useStrapiData(Pages.headerFooter);

    return (
        
            <StyledLayout>
                {!data || isLoading ? (
                    <>loading...</>
                ) : (
                    <>
                        <div style={{ background: "#FDFBFF" }}>
                            <AdaptContainer>
                                <Header data={data.header} />
                            </AdaptContainer>
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
                )}
            </StyledLayout>
       
    );
};
