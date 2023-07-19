import React, { FC, PropsWithChildren, createContext } from "react";
import { useMediaQuery } from "react-responsive";
import { responsiveConfig } from "@/utils/responsive";

export interface ResponsiveContextDataInterface {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextDataInterface>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
});

export const ResponsiveContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const { mobile, desktop, tablet } = responsiveConfig;

    const isMobile = useMediaQuery({
        minWidth: mobile.min,
        maxWidth: mobile.max,
    });
    const isTablet = useMediaQuery({
        minWidth: tablet.min,
        maxWidth: tablet.max,
    });
    const isDesktop = useMediaQuery({
        minWidth: desktop.min,
        maxWidth: desktop.max,
    });

    return (
        <ResponsiveContext.Provider value={{ isMobile, isDesktop, isTablet }}>
            {children}
        </ResponsiveContext.Provider>
    );
};
