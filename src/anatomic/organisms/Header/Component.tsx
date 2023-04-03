import React, { FC } from "react";
import { Dropdown } from "@/anatomic/atoms/Dropdown";
import { FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import { Link } from "@/anatomic/atoms/Link";
import { TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { NAV_LINKS } from "./util";
import { TEXT_CONTENT } from "@/lib/lang";
import { AdaptiveElem, LinkElem, Button } from "./styled";

export const Component: FC<{ activeRoute: string }> = ({ activeRoute }) => {
    return (
        <FlexRow
            alignItems="center"
            justifyContent="center"
            h="50px"
            p="50px 0 0"
            bg={COLORS.pageBG}
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
                                        href={item.href}
                                        linkText={item.title}
                                        active={item.href === activeRoute}
                                        textStyles={{
                                            textAlign: "center",
                                            color: COLORS.dark,
                                            weight: TEXT_WEIGHTS.main,
                                            size: TEXT_SIZES.small.m,
                                        }}
                                    />
                                ) : "/contact_us" === activeRoute ? (
                                    <FlexRow position="relative">
                                        <LinkElem
                                            href={item.href}
                                            linkText={item.title}
                                            active={item.href === activeRoute}
                                            textStyles={{
                                                textAlign: "center",
                                                color: COLORS.dark,
                                                weight: TEXT_WEIGHTS.main,
                                                size: TEXT_SIZES.small.m,
                                            }}
                                        />
                                    </FlexRow>
                                ) : (
                                    <Button>
                                        <Link
                                            href={item.href}
                                            linkText={item.title}
                                            textStyles={{
                                                textAlign: "center",
                                                color: COLORS.dark,
                                                weight: TEXT_WEIGHTS.main,
                                                size: TEXT_SIZES.small.m,
                                            }}
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
