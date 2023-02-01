import { FlexColumn, FlexRow, StyledFlex } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import { NAV_LINKS, SOCIAL_MEDIA, TITLES } from "./util";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "@/anatomic/atoms/Link";
import { LINK_POSITION } from "@/anatomic/atoms/Link/util";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import styled from "styled-components";

export const Footer = () => {
    return (
        <footer>
            <FlexRow justifyContent="center" bg={COLORS.black} p="60px 0">
                <Flex
                    justifyContent="space-between"
                    w="80%"
                    flexWrap="wrap"
                    gap="40px"
                >
                    <FlexColumn gap="20px">
                        <Text
                            color={COLORS.white}
                            size={TEXT_SIZES.m}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {TITLES.office}
                        </Text>
                        <FlexColumn justifyContent="space-between" gap="8px">
                            <Text
                                color={COLORS.white}
                                size={TEXT_SIZES.xs}
                                weight={TEXT_WEIGHTS.main}
                            >
                                Address:
                            </Text>
                            <Text
                                color={COLORS.white}
                                size={TEXT_SIZES.xs}
                                weight={TEXT_WEIGHTS.main}
                            >
                                Tel:
                            </Text>
                            <Text
                                color={COLORS.white}
                                size={TEXT_SIZES.xs}
                                weight={TEXT_WEIGHTS.main}
                            >
                                Hours:
                            </Text>
                        </FlexColumn>
                    </FlexColumn>
                    {NAV_LINKS.map((item) => (
                        <FlexColumn gap="20px" key={item.href}>
                            <Text
                                color={COLORS.white}
                                size={TEXT_SIZES.m}
                                weight={TEXT_WEIGHTS.main}
                            >
                                {item.title}
                            </Text>
                            <FlexColumn gap="10px">
                                {item.options?.map((option) => (
                                    <Link
                                        key={option.href}
                                        linkPosition={LINK_POSITION.footer}
                                        color={COLORS.link}
                                        size={TEXT_SIZES.xs}
                                        weight={TEXT_WEIGHTS.normal}
                                        linkText={option.option}
                                        href={option.href}
                                        gap="8px"
                                        icon={
                                            <MdArrowForwardIos
                                                className="icon"
                                                size={10}
                                                color={COLORS.link}
                                            />
                                        }
                                    />
                                ))}
                            </FlexColumn>
                        </FlexColumn>
                    ))}

                    <FlexColumn gap="20px">
                        <Text
                            color={COLORS.white}
                            size={TEXT_SIZES.m}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {TITLES.socil_media}
                        </Text>
                        <FlexRow justifyContent="space-between" gap="8px">
                            {SOCIAL_MEDIA.map((item) => (
                                <Button
                                    variant={BUTTON_VARIANTS.icon}
                                    icon={item.icon.src}
                                    href={item.href}
                                    hoverColor={COLORS.blue}
                                    key={item.id}
                                />
                            ))}
                        </FlexRow>
                    </FlexColumn>
                </Flex>
            </FlexRow>
            <Divider />
            <FlexRow justifyContent="center" bg={COLORS.black} p="30px 0">
                <FlexRow w="80%">
                    <Text color={COLORS.white} size={TEXT_SIZES.m}>
                        © 2023 ITeam. All rights reserved.
                    </Text>
                </FlexRow>
            </FlexRow>
        </footer>
    );
};
const Flex = styled(StyledFlex)`
    flex-direction: row;

    @media all and (max-width: 500px) {
        flex-direction: column;
    }
`;
const Divider = styled.div`
    height: 0;
    width: 100%;
    border-top: 1px solid ${COLORS.blue};
`;
