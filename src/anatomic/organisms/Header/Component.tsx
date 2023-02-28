import React, { FC } from "react";
import { Dropdown } from "@/anatomic/atoms/Dropdown";
import { FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import { Link } from "@/anatomic/atoms/Link";
import { TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { NAV_LINKS } from "./util";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import styled from "styled-components";
import { TEXT_CONTENT } from "@/lib/lang";

export const Component: FC<{ activeRoute: string }> = ({ activeRoute }) => {
    return (
        <FlexRow
            alignItems="center"
            justifyContent="center"
            h="50px"
            p="50px 0 0"
        >
            <AdaptiveElem
                justifyContent="space-between"
                alignItems="center"
                gap="100px"
            >
                <Logo />
                <FlexRow
                    justifyContent="space-evenly"
                    gap="40px"
                    alignItems="center"
                >
                    {NAV_LINKS.map((item) =>
                        item.options ? (
                            <Dropdown
                                title={item.title}
                                activeRoute={activeRoute}
                                options={item.options}
                                key={item.id}
                            />
                        ) : (
                            <FlexRow position="relative" key={item.id}>
                                {item.title !==
                                TEXT_CONTENT.header.contact_us ? (
                                    <LinkElem
                                        textAlign="center"
                                        href={item.href}
                                        linkText={item.title}
                                        active={item.href === activeRoute}
                                        color={COLORS.black}
                                        weight={TEXT_WEIGHTS.main}
                                        size={TEXT_SIZES.xxs}
                                    />
                                ) : "/contact_us" === activeRoute ? (
                                    <FlexRow position="relative">
                                        <LinkElem
                                            textAlign="center"
                                            href={item.href}
                                            linkText={item.title}
                                            active={item.href === activeRoute}
                                            color={COLORS.black}
                                            weight={TEXT_WEIGHTS.main}
                                            size={TEXT_SIZES.xxs}
                                        />
                                    </FlexRow>
                                ) : (
                                    <Button>
                                        <Link
                                            textAlign="center"
                                            href={item.href}
                                            linkText={item.title}
                                            color={COLORS.black}
                                            weight={TEXT_WEIGHTS.main}
                                            size={TEXT_SIZES.xxs}
                                        />
                                    </Button>
                                )}
                            </FlexRow>
                        ),
                    )}
                </FlexRow>
            </AdaptiveElem>
        </FlexRow>
    );
};

const AdaptiveElem = styled(Adaptive)`
    max-width: none;
`;
const LinkElem = styled(Link)<{ active: boolean }>`
    :hover {
        ::after {
            width: 100%;
            left: 0;
        }
    }
    ::after {
        content: "";
        position: absolute;
        bottom: -8px;
        width: ${({ active }) => (active ? "100%" : "0")};
        background-color: ${COLORS.black};
        height: 2px;
        transition: width 0.5s ease;
        right: 0;
    }
`;

const Button = styled.button`
    background-color: ${COLORS.black};
    border: 1px solid ${COLORS.black};

    &:hover {
        background-color: ${COLORS.white};
        border: 1px solid ${COLORS.black};
        & > * > * {
            color: ${COLORS.black};
        }
    }
    & > * > * {
        color: ${COLORS.white};
        padding: 12px 38px;
    }
`;
