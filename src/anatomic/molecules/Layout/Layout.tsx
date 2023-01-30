import { Header } from "@/anatomic/organisms/Header";
import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    );
};
