import React, { FC, useState } from "react";
import { DropdownMobile } from "@/anatomic/atoms/Dropdown";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import {
    LETTER_SPACING,
    LINE_HEIGHT,
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

    return (
        <>
            <FlexRow
                p="0 20px"
                mh="70px"
                bg={open ? COLORS.black : COLORS.white}
                alignItems="center"
                justifyContent="space-between"
            >
                <Logo color={open ? COLORS.white : COLORS.black} />
                <RxHamburgerMenu
                    onClick={() => setOpen(!open)}
                    color={open ? COLORS.white : COLORS.black}
                />
            </FlexRow>
            {open && (
                <FlexColumn
                    alignItems="center"
                    h="calc(100vh - 70px)"
                    bg={COLORS.black}
                    gap="50px"
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
                                key={item.id}
                            >
                                <LinkElem
                                    href={item.href}
                                    linkText={item.title}
                                    textStyles={{
                                        color: COLORS.white,
                                        textTransform: "uppercase",
                                        lineHeight: LINE_HEIGHT.m,
                                        weight: TEXT_WEIGHTS.main,
                                        size: TEXT_SIZES.s,
                                        letterSpacing: LETTER_SPACING.l,
                                    }}
                                    active={item.href === activeRoute}
                                />
                            </FlexRow>
                        ),
                    )}
                </FlexColumn>
            )}
        </>
    );
};
