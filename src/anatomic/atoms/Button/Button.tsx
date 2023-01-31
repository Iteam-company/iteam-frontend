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
    icon?: string;
    href?: string;
    hoverColor?: string;
    onClick?: Function;
}

export const Button: FC<Props> = ({
    type,
    className,
    color,
    w,
    p,
    label,
    icon,
    href,
    hoverColor,
    onClick,
}) => {
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
    if (type === BUTTON_TYPES.icon) {
        return (
            <ButtonIcon className={className} hoverColor={hoverColor}>
                <Link href={href} target="_blank">
                    <Icon src={icon} />
                </Link>
            </ButtonIcon>
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

const ButtonIcon = styled.div<Props>`
    cursor: pointer;
    border: 1px solid ${COLORS.blue};
    border-radius: 6px;
    :hover {
        background-color: ${({ hoverColor }) => hoverColor};
    }
`;

const Link = styled.a`
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
    height: 16px;
    width: 16px;
`;
