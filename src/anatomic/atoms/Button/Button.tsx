import { FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";
import { BUTTON_TYPES } from "./util";

interface Props {
    type?: BUTTON_TYPES;
    className?: string;
    color?: any;
    w?: string;
    p?: string;
    textColor?: string;
    label?: ReactNode;
}

export const Button: FC<Props> = ({ type, className, color, w, p, label }) => {
    if (type === BUTTON_TYPES.color) {
        return (
            <ColorButton className={className} color={color} w={w}>
                {label}
            </ColorButton>
        );
    }
    if (type === BUTTON_TYPES.change) {
        return (
            <ChangeButton className={className} color={COLORS.white} w={w}>
                {label}
            </ChangeButton>
        );
    }
    return null;
};

const ColorButton = styled.button<Props>`
    padding: 8px 20px;
    border: none;
    border-radius: 6px;
    background-color: ${({ color }) => color || COLORS.buttonDark};
    cursor: pointer;
    box-shadow: 0 3px 5px 0 rgb(173 197 255 / 30%);
`;

const ChangeButton = styled(ColorButton)<Props>`
    transition: background-color 0.5s;
    :hover {
        & > * {
            color: ${COLORS.white};
        }
        background-color: ${COLORS.buttonDark};
    }
`;
