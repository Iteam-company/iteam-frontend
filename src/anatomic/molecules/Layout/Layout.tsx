import { FlexRow } from "@/anatomic/atoms/Flex";
import { Footer } from "@/anatomic/organisms/Footer";
import { Header } from "@/anatomic/organisms/Header";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ButtonUp } from "../ButtonUp";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <StyledLayout className="layout">
            <Header />
            <main>
                <FlexRow w="100%" justifyContent="center">
                    {children}
                </FlexRow>
            </main>
            <ButtonUp />
            <Footer />
        </StyledLayout>
    );
};
const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    main {
        flex-grow: 1;
    }
`;
