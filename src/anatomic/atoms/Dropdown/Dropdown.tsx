import { FC } from "react";
import styled from "styled-components";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "../Text";
import arrowIcon from "@/assets/icon/down-arrow.svg";
import { COLORS } from "@/lib/theme/color";
import { Link } from "../Link";

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
                    lineHeight="1.6"
                    weight={TEXT_WEIGHTS.bold}
                    size={TEXT_SIZES.xxs}
                    letterSpacing="0.8px"
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
                        letterSpacing="0.44px"
                    />
                ))}
            </Menu>
        </Container>
    );
};

const Icon = styled.img`
    width: 16px;
    height: 16px;
    position: relative;
    transition: top ease 0.5s;
    top: 0;
    margin-top: -2.5px;
`;

const Title = styled.div`
    padding: 20px 10px;
    cursor: pointer;
    transition: opacity 0.5s;
    display: flex;
    align-items: center;
    gap: 5px;
    width: auto;
    vertical-align: middle;
`;

const LinkElem = styled(Link)<{ active: boolean }>`
    cursor: pointer;
    :hover {
        color: ${({ active }) => !active && COLORS.black};
    }
`;

const Menu = styled.div`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    display: flex;
    z-index: 100;
    padding: 10px 0px;
    list-style: none;
    min-width: 180px;
    max-width: 200px;
    flex-direction: column;
    position: absolute;
    border-radius: 6px;
    background-color: ${COLORS.white};
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
`;

const Container = styled.div`
    position: relative;
    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
        img {
            top: 5px;
        }
    }
`;
