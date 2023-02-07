import { FC, useState } from "react";
import {
    LETTER_SPACING,
    LINE_HEIGHT,
    Text,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "../Text";
import { COLORS } from "@/lib/theme/color";
import { Container, Title, Icon, Menu, LinkElem } from "./styledMobile";
import arrowIcon from "@/assets/icon/down-arrow.svg";

interface Options {
    option: string;
    href: string;
}
interface Props {
    title: string;
    options: Options[];
    activeRoute?: string;
}

export const DropdownMobile: FC<Props> = ({ title, options, activeRoute }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <Title onClick={handleClick}>
                <Text
                    color={
                        options.find(({ href }) => href === activeRoute)
                            ? COLORS.activePath
                            : COLORS.dropdown
                    }
                    textTransform="uppercase"
                    lineHeight={LINE_HEIGHT.m}
                    weight={TEXT_WEIGHTS.bold}
                    size={TEXT_SIZES.xxs}
                    letterSpacing={LETTER_SPACING.l}
                >
                    {title}
                </Text>

                <Icon src={arrowIcon.src} />
            </Title>
            {open && (
                <Menu>
                    {options.map((item) => (
                        <LinkElem
                            active={item.href === activeRoute}
                            href={item.href}
                            key={item.href}
                            size={TEXT_SIZES.xxxs}
                            color={
                                item.href === activeRoute
                                    ? COLORS.activePath
                                    : COLORS.dropdown
                            }
                            textTransform="uppercase"
                            linkText={item.option}
                            weight={TEXT_WEIGHTS.bold}
                            letterSpacing={LETTER_SPACING.xs}
                            p="7px 15px"
                        />
                    ))}
                </Menu>
            )}
        </Container>
    );
};
