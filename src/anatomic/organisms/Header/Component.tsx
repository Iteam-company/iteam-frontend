import React, { FC } from "react";
import { Dropdown } from "@/anatomic/atoms/Dropdown";
import { FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import { Link } from "@/anatomic/atoms/Link";
import { TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { LinkElem, Button } from "./styled";
import { HeaderI, HeaderLinksI } from "./utils";
import { Adaptive } from "@/anatomic/molecules/Adaptive";

export const Component: FC<HeaderI> = ({ activeRoute, data = [] }) => {
    return (
        <FlexRow
            w="100%"
            alignItems="center"
            justifyContent="center"
            h="50px"
            p="50px 10px 0"
            bg={COLORS.pageBG}
        >
            <FlexRow w="92%" alignItems="center" justifyContent="space-between">
                <Logo />
                <FlexRow
                    w="74%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <FlexRow
                        w="70%"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {data.slice(0, 5).map((item: HeaderLinksI) =>
                            item.href ? (
                                <FlexRow position="relative" key={item.id}>
                                    <LinkElem
                                        href={
                                            item.href == "/home"
                                                ? "/"
                                                : item.href
                                        }
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
                            ) : item.options ? (
                                <Dropdown
                                    title={item.title}
                                    activeRoute={activeRoute}
                                    options={item.options}
                                    key={item.id}
                                />
                            ) : null,
                        )}
                    </FlexRow>

                    <FlexRow w="30%" alignItems="center" justifyContent="end">
                        {"/contact_us" === activeRoute ? (
                            <FlexRow p="0 38px">
                                <FlexRow
                                    position="relative"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <LinkElem
                                        href={data[5].href! || ""}
                                        linkText={data[5].title}
                                        active={data[5].href === activeRoute}
                                        textStyles={{
                                            textAlign: "center",
                                            color: COLORS.dark,
                                            weight: TEXT_WEIGHTS.main,
                                            size: TEXT_SIZES.small.m,
                                        }}
                                    />
                                </FlexRow>
                            </FlexRow>
                        ) : (
                            <Button>
                                <Link
                                    href={data[5].href! || ""}
                                    linkText={data[5].title}
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
                </FlexRow>
            </FlexRow>
        </FlexRow>
    );
};
