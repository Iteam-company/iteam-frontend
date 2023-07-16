import React, { PropsWithChildren, FC } from "react";
import { DeviceFrameset } from "react-device-frameset";
import styled from "styled-components";
// import "react-device-frameset/dist/styles/marvel-devices.min.css";

interface Props extends PropsWithChildren {
    device: string;
}

export const DeviceFrame: FC<Props> = ({ children, device }) => {
    return (
        <div>
            <DeviceFrameset
                style={{
                    transform: "scale(0.5) !important",
                }}
                device={device as never}
            >
                {children}
            </DeviceFrameset>
        </div>
    );
};

const StyledFrameDevice = styled(DeviceFrame)`
    & > .marvel-device {
        transform: scale(0.5);
    }
`;
