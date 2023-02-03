import { FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";
import { BUTTON_VARIANTS } from "./util";

interface Props {
    variant?: BUTTON_VARIANTS;
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
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const Button: FC<Props> = ({
    variant,
    className,
    color,
    w,
    p,
    label,
    icon,
    href,
    hoverColor,
    onClick,
    type = "button",
    disabled,
}) => {
    if (variant === BUTTON_VARIANTS.color) {
        return (
            <ColorButton
                className={className}
                color={color}
                w={w}
                type={type}
                disabled={disabled}
            >
                {label}
            </ColorButton>
        );
    }
    if (variant === BUTTON_VARIANTS.change) {
        return (
            <ChangeButton
                className={className}
                color={COLORS.white}
                w={w}
                type={type}
                disabled={disabled}
            >
                {label}
            </ChangeButton>
        );
    }
    if (variant === BUTTON_VARIANTS.icon) {
        return (
            <ButtonIcon
                className={className}
                hoverColor={hoverColor}
                type={type}
                disabled={disabled}
            >
                <Link href={href} target="_blank">
                    <Icon src={icon} />
                </Link>
            </ButtonIcon>
        );
    }

    return null;
};

const ColorButton = styled.button<Props>`
    height: 43px;
    width: 100%;
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
