import React, { FC, useState } from "react";
import { DropdownMobile } from "@/anatomic/atoms/Dropdown";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import { Link } from "@/anatomic/atoms/Link";
import {
    LETTER_SPACING,
    LINE_HEIGHT,
    TEXT_SIZES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { NAV_LINKS } from "./util";
import { RxHamburgerMenu } from "react-icons/rx";

export const MobileComponent: FC<{ activeRoute: string }> = ({
    activeRoute,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <FlexRow
                p="0 20px"
                mh="74px"
                bg="rgba(189, 195, 199, 0.4)"
                alignItems="center"
                justifyContent="space-between"
            >
                <Logo />
                <RxHamburgerMenu onClick={() => setOpen(!open)} />
            </FlexRow>
            <FlexColumn>
                {open &&
                    NAV_LINKS.map((item) =>
                        item.options ? (
                            <DropdownMobile
                                key={item.id}
                                title={item.title}
                                activeRoute={activeRoute}
                                options={item.options}
                            />
                        ) : (
                            <Link
                                key={item.id}
                                p="10px 20px"
                                href={item.href}
                                linkText={item.title}
                                color={
                                    item.href === activeRoute
                                        ? COLORS.activePath
                                        : COLORS.dropdown
                                }
                                textTransform="uppercase"
                                lineHeight={LINE_HEIGHT.m}
                                weight={TEXT_WEIGHTS.bold}
                                size={TEXT_SIZES.xxs}
                                letterSpacing={LETTER_SPACING.l}
                            />
                        ),
                    )}
            </FlexColumn>
        </>
    );
};
