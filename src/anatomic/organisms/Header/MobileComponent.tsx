import React, { FC, useEffect, useState } from "react";
import { DropdownMobile } from "@/anatomic/atoms/Dropdown";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import {
    LETTER_SPACING,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { NAV_LINKS } from "./util";
import { RxHamburgerMenu } from "react-icons/rx";
import { LinkElem } from "./styledMobile";

export const MobileComponent: FC<{ activeRoute: string }> = ({
    activeRoute,
}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <FlexColumn position="relative" w="100%">
            <FlexRow
                p="0 20px"
                mh="70px"
                w="100%"
                bg={open ? "#292331E8" : COLORS.pageBG}
                alignItems="center"
                justifyContent="space-between"
                style={{ boxSizing: "border-box" }}
                zIndex="100"
            >
                <Logo color={open ? COLORS.white : COLORS.dark} />
                <RxHamburgerMenu
                    onClick={() => setOpen(!open)}
                    color={open ? COLORS.white : COLORS.dark}
                />
            </FlexRow>
            {open && (
                <FlexColumn
                    alignItems="end"
                    p="0 20px"
                    h="calc(100vh - 70px)"
                    w="100%"
                    bg="#292331E8"
                    gap="20px"
                    position="fixed"
                    zIndex="1000"
                    style={{ top: "70px", boxSizing: "border-box" }}
                >
                    {NAV_LINKS.map((item) =>
                        item.options ? (
                            <DropdownMobile
                                key={item.id}
                                title={item.title}
                                activeRoute={activeRoute}
                                options={item.options}
                            />
                        ) : (
                            <FlexRow
                                position="relative"
                                alignItems="center"
                                justifyContent="end"
                                key={item.id}
                            >
                                <LinkElem
                                    href={item.href}
                                    linkText={item.title}
                                    textStyles={{
                                        color: COLORS.white,
                                        weight: TEXT_WEIGHTS.medium,
                                        size: TEXT_SIZES.medium.s,
                                        letterSpacing: LETTER_SPACING.l,
                                    }}
                                    active={item.href === activeRoute}
                                />
                            </FlexRow>
                        ),
                    )}
                </FlexColumn>
            )}
        </FlexColumn>
    );
};
