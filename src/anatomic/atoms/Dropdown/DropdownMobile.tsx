import { FC, useState } from "react";
import styled from "styled-components";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import arrowIcon from "@/assets/icon/down-arrow.svg";
import { COLORS } from "@/lib/theme/color";
import { Link } from "../Link";
import { FlexColumn, FlexRow } from "../Flex";

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
                    lineHeight="1.6"
                    weight={TEXT_WEIGHTS.bold}
                    size={TEXT_SIZES.xxs}
                    letterSpacing="1px"
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
                            letterSpacing="0.44px"
                            p="7px 15px"
                        />
                    ))}
                </Menu>
            )}
        </Container>
    );
};

const Icon = styled.img`
    width: 16px;
    height: 16px;
    position: relative;
    transition: top ease 0.5s;
    top: 0;
`;

const Title = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    transition: opacity 0.5s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;

const LinkElem = styled(Link)<{ active: boolean }>`
    cursor: pointer;
    :hover {
        color: ${({ active }) => !active && COLORS.black};
    }
`;

const Menu = styled(FlexColumn)`
    padding-left: 20px;
`;

const Container = styled.div`
    width: 100%;
    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
    }
`;
