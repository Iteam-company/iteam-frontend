import { FC, useState } from "react";
import { LETTER_SPACING, Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import { COLORS } from "@/lib/theme/color";
import { Container, Title, Icon, Menu, LinkElem } from "./styledMobile";
import { IoIosArrowDown } from "react-icons/io";

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
            <Title
                onClick={handleClick}
                active={options.find(({ href }) => href === activeRoute)}
            >
                <Text
                    color={COLORS.white}
                    textTransform="uppercase"
                    weight={TEXT_WEIGHTS.main}
                    size={TEXT_SIZES.s}
                    letterSpacing={LETTER_SPACING.l}
                >
                    {title}
                </Text>

                <IoIosArrowDown color={COLORS.white} />
            </Title>
            {open && (
                <Menu>
                    {options.map((item) => (
                        <LinkElem
                            active={item.href === activeRoute}
                            href={item.href}
                            key={item.href}
                            textStyles={{
                                size: TEXT_SIZES.xxxs,
                                color: COLORS.white,
                                textTransform: "uppercase",
                                weight: TEXT_WEIGHTS.main,
                                letterSpacing: LETTER_SPACING.xs,
                            }}
                            linkText={item.option}
                            p="7px 15px"
                        />
                    ))}
                </Menu>
            )}
        </Container>
    );
};
