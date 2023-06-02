import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "@/anatomic/atoms/Link";
import { LINK_POSITION } from "@/anatomic/atoms/Link/util";
import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { Divider } from "./styled";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { PropsI, LinkDataI, SocialMediaI, CompanyInfoI } from "./utils";
import { OptionsI } from "@/anatomic/atoms/Dropdown/Dropdown";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";

export const Footer: FC<PropsI> = ({
    data = [],
    title,
    socialMedia,
    footerText,
}) => {
    return (
        <footer>
            <FlexRow justifyContent="center" bg={COLORS.dark} p="45px 0">
                <AdaptContainer>
                    <Adaptive
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap="40px"
                        alignItems="start"
                    >
                        <FlexColumn gap="20px">
                            <Text
                                color={COLORS.white}
                                size={TEXT_SIZES.medium.xs}
                                weight={TEXT_WEIGHTS.main}
                            >
                                {title.office}
                            </Text>
                            <FlexColumn
                                justifyContent="space-between"
                                gap="8px"
                            >
                                {footerText.companyInfo.map(
                                    (item: CompanyInfoI, index: number) => (
                                        <FlexRow key={index}>
                                            <Text
                                                color={COLORS.white}
                                                size={TEXT_SIZES.small.l}
                                                weight={TEXT_WEIGHTS.main}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                color={COLORS.white}
                                                size={TEXT_SIZES.small.l}
                                                weight={TEXT_WEIGHTS.main}
                                            >
                                                {item.value}
                                            </Text>
                                        </FlexRow>
                                    ),
                                )}
                            </FlexColumn>
                        </FlexColumn>
                        {data.map((item: LinkDataI) => (
                            <FlexColumn gap="20px" key={item.id}>
                                <Text
                                    color={COLORS.white}
                                    size={TEXT_SIZES.medium.xs}
                                    weight={TEXT_WEIGHTS.main}
                                >
                                    {item.title}
                                </Text>
                                <FlexColumn gap="10px">
                                    {item.options.map((option: OptionsI) => (
                                        <Link
                                            key={option.href}
                                            linkPosition={LINK_POSITION.footer}
                                            textStyles={{
                                                color: COLORS.link,
                                                size: TEXT_SIZES.small.l,
                                                weight: TEXT_WEIGHTS.normal,
                                            }}
                                            linkText={option.option}
                                            href={
                                                option.href == "/home"
                                                    ? "/"
                                                    : option.href
                                            }
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
                                size={TEXT_SIZES.medium.xs}
                                weight={TEXT_WEIGHTS.main}
                            >
                                {title.socil_media}
                            </Text>
                            <FlexRow justifyContent="space-between" gap="8px">
                                {socialMedia.map((item: SocialMediaI) => (
                                    <Button
                                        variant={BUTTON_VARIANTS.icon}
                                        icon={getStrapiImage(
                                            item.icon.data.attributes.url,
                                        )}
                                        href={item.href}
                                        hoverColor={COLORS.blue}
                                        key={item.id}
                                    />
                                ))}
                            </FlexRow>
                        </FlexColumn>
                    </Adaptive>
                </AdaptContainer>
            </FlexRow>
            <Divider />
            <FlexRow justifyContent="center" bg={COLORS.dark} p="30px 0">
                <Adaptive>
                    <AdaptContainer>
                        <Text color={COLORS.white} size={TEXT_SIZES.medium.xs}>
                            {footerText.rights}
                        </Text>
                    </AdaptContainer>
                </Adaptive>
            </FlexRow>
        </footer>
    );
};
