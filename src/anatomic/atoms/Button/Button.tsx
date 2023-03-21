import { FC } from "react";
import { COLORS } from "@/lib/theme/color";
import { BUTTON_VARIANTS, Props } from "./util";
import {
    ColorButton,
    ChangeButton,
    ButtonIcon,
    Icon,
    Link,
    GradientButton,
    GradientButtonContent,
} from "./styled";

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
    type = "button",
    disabled,
    gradient,
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
    if (variant === BUTTON_VARIANTS.gradient) {
        return (
            <GradientButton
                href={href}
                className={className}
                gradient={gradient}
            >
                <GradientButtonContent
                    justifyContent="center"
                    alignItems="center"
                >
                    {label}
                </GradientButtonContent>
            </GradientButton>
        );
    }

    return null;
};
