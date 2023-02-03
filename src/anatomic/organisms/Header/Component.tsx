import React, { FC } from "react";
import { Dropdown } from "@/anatomic/atoms/Dropdown";
import { FlexRow } from "@/anatomic/atoms/Flex";
import { Logo } from "@/anatomic/atoms/Logo/Logo";
import { Link } from "@/anatomic/atoms/Link";
import { TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { NAV_LINKS } from "./util";
import { ContentLayout } from "@/anatomic/molecules/ContentLayout";

export const Component: FC<{ activeRoute: string }> = ({ activeRoute }) => {
    return (
        <FlexRow
            bg="rgba(189, 195, 199, 0.4)"
            alignItems="center"
            justifyContent="space-between"
            mh="74px"
        >
            <ContentLayout>
                <Logo />
                {NAV_LINKS.map((item) =>
                    item.options ? (
                        <Dropdown
                            title={item.title}
                            activeRoute={activeRoute}
                            options={item.options}
                            key={item.id}
                        />
                    ) : (
                        <Link
                            textAlign="center"
                            key={item.id}
                            p="20px 10px"
                            href={item.href}
                            linkText={item.title}
                            color={
                                item.href === activeRoute
                                    ? COLORS.activePath
                                    : COLORS.dropdown
                            }
                            textTransform="uppercase"
                            lineHeight="1.6"
                            weight={TEXT_WEIGHTS.bold}
                            size={TEXT_SIZES.xxs}
                            letterSpacing="1px"
                        />
                    ),
                )}
            </ContentLayout>
        </FlexRow>
    );
};
