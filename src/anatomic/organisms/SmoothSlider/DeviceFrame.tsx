import React, { PropsWithChildren, FC, useContext } from "react";
import { DeviceFrameset, DeviceOptions } from "react-device-frameset";
import { ResponsiveContext } from "@/contexts/ResponsiveContext";
import styled, { CSSProperties } from "styled-components";

interface Props extends PropsWithChildren {
    isDynamicAdaptive: boolean;
}

type DeviceOptionsType = typeof DeviceOptions;

export const DeviceFrame: FC<Props> = ({
    children,
    isDynamicAdaptive = true,
}) => {
    const { isMobile, isTablet } = useContext(ResponsiveContext);

    const getDevice = (): keyof DeviceOptionsType => {
        const device =
            (isMobile && "iPhone 8 Plus") ||
            (isTablet && "iPad Mini") ||
            "MacBook Pro";
        return device;
    };

    const deviceStyleRules: {
        [K in keyof Partial<DeviceOptionsType>]: Partial<CSSProperties>;
    } = {
        "MacBook Pro": { transform: "translate(-20%, 30%) scale(0.5)" },
        "iPad Mini": {
            transform: "translate(-10%, 15%) scale(0.5)",
        },
        "iPhone X": { transform: "translate(-20%, 10%) scale(0.4)" },
    };

    const device = !isDynamicAdaptive ? "MacBook Pro" : getDevice();

    return (
        <StyledAdaptiveWrapper>
            <div
                className="device-frame-wrapper"
                style={{
                    ...deviceStyleRules[device],
                }}
            >
                <DeviceFrameset device={device as never} color="black">
                    {children}
                </DeviceFrameset>
            </div>
        </StyledAdaptiveWrapper>
    );
};

const StyledAdaptiveWrapper = styled.div`
    background: transparent;

    @media (max-width: 2000px) {
        .device-frame-wrapper {
            transform: translate(-15%, 35%) scale(0.7) !important;
        }
    }

    @media (max-width: 1500px) {
        .device-frame-wrapper {
            transform: translate(-15%, 30%) scale(0.65) !important;
        }
    }

    @media (max-width: 1300px) {
        .device-frame-wrapper {
            transform: translate(-20%, 30%) scale(0.6) !important;
        }
    }

    @media (max-width: 1200px) {
        .device-frame-wrapper {
            transform: translate(-20%, 30%) scale(0.5) !important;
        }
    }

    //tablet starts here (ipad)

    @media (max-width: 1150px) {
        & > .device-frame-wrapper {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            border-radius: 50px;
            transform: translate(0%, 20%) scale(0.5) !important;
        }
    }

    @media (max-width: 1050px) {
        .device-frame-wrapper {
            transform: translate(-5%, 20%) scale(0.5) !important;
        }
    }

    @media (max-width: 900px) {
        .device-frame-wrapper {
            transform: translate(-15%, 20%) scale(0.4) !important;
        }
    }

    @media (max-width: 800px) {
        .device-frame-wrapper {
            transform: translate(-15%, 15%) scale(0.4) !important;
            border-radius: 70px;
        }
    }

    // mobile starts here (iphone)

    @media (max-width: 700px) {
        .device-frame-wrapper {
            transform: translate(-5%, 13%) scale(0.4) !important;
            border-radius: 70px;
        }
    }

    @media (max-width: 600px) {
        .device-frame-wrapper {
            transform: translate(-15%, 10%) scale(0.4) !important;
            border-radius: 70px;
        }
    }

    @media (max-width: 500px) {
        .device-frame-wrapper {
            transform: translate(-25%, 10%) scale(0.4) !important;
            border-radius: 70px;
        }
    }

    @media (max-width: 400px) {
        .device-frame-wrapper {
            transform: translate(-30%, 5%) scale(0.3) !important;
            border-radius: 70px;
        }
    }
`;
