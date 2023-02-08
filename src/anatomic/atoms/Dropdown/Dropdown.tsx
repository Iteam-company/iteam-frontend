import { FC } from "react";
import {
    LETTER_SPACING,
    LINE_HEIGHT,
    Text,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "../Text";
import arrowIcon from "@/assets/icon/down-arrow.svg";
import { COLORS } from "@/lib/theme/color";
import { Container, Icon, LinkElem, Menu, Title } from "./styled";

interface Options {
    option: string;
    href: string;
}

interface Props {
    title: string;
    options: Options[];
    activeRoute?: string;
}

export const Dropdown: FC<Props> = ({ title, options, activeRoute }) => {
    return (
        <Container>
            <Title>
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
                    letterSpacing={LETTER_SPACING.m}
                    textAlign="center"
                >
                    {title}
                </Text>
                <Icon src={arrowIcon.src} />
            </Title>
            <Menu>
                {options.map((item) => (
                    <LinkElem
                        active={item.href === activeRoute}
                        p={"10px 20px"}
                        href={item.href}
                        key={item.href}
                        weight={TEXT_WEIGHTS.bold}
                        size={TEXT_SIZES.xxxs}
                        color={
                            item.href === activeRoute
                                ? COLORS.activePath
                                : COLORS.dropdown
                        }
                        textTransform="uppercase"
                        linkText={item.option}
                        letterSpacing={LETTER_SPACING.xs}
                    />
                ))}
            </Menu>
        </Container>
    );
};
