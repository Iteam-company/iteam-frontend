import { FC } from "react";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "../Text";
import arrowIcon from "@/assets/icon/down-arrow.svg";
import { COLORS } from "@/lib/theme/color";
import { Container, Icon, LinkElem, Menu, Title } from "./styled";

export interface OptionsI {
    option: string;
    href: string;
}

interface Props {
    title: string;
    options: OptionsI[];
    activeRoute?: string;
}

export const Dropdown: FC<Props> = ({ title, options, activeRoute }) => {
    return (
        <Container>
            <Title active={options.find(({ href }) => href === activeRoute)}>
                <Text
                    type={TEXT_TYPES.text_block}
                    color={COLORS.dark}
                    weight={TEXT_WEIGHTS.main}
                    size={TEXT_SIZES.small.m}
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
                        p="10px 20px"
                        href={item.href}
                        key={item.href}
                        linkText={item.option}
                        textStyles={{
                            weight: TEXT_WEIGHTS.medium,
                            size: TEXT_SIZES.small.s,
                            color: COLORS.dropdown,
                            letterSpacing: LETTER_SPACING.xs,
                        }}
                    />
                ))}
            </Menu>
        </Container>
    );
};
