import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "@/anatomic/atoms/Link";
import { LINK_POSITION } from "@/anatomic/atoms/Link/util";
import Image from "next/image";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { Divider } from "./styled";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { PropsI, LinkDataI, SocialMediaI, CompanyInfoI } from "./utils";
import { OptionsI } from "@/anatomic/atoms/Dropdown/Dropdown";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import upWorkLogo from "../../../assets/icon/upwork.svg";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Footer: FC<PropsI> = ({
    data = [],
    title,
    socialMedia,
    footerText,
}) => {
    const size = useWindowSize();
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
                        <FlexColumn gap="20px" justifyContent="space-between">
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
                                        <FlexRow key={index} gridGap="10px">
                                            <Text
                                                color={COLORS.white}
                                                size={TEXT_SIZES.small.l}
                                                weight={TEXT_WEIGHTS.main}
                                            >
                                                {item.title}
                                            </Text>
                                            {item.item_link ? (
                                                <Link
                                                    textStyles={{
                                                        color: COLORS.link,
                                                        size: TEXT_SIZES.small
                                                            .l,
                                                        weight: TEXT_WEIGHTS.normal,
                                                    }}
                                                    href={item.item_link}
                                                    linkText={item.value}
                                                ></Link>
                                            ) : (
                                                <Text
                                                    color={COLORS.link}
                                                    size={TEXT_SIZES.small.l}
                                                    weight={TEXT_WEIGHTS.normal}
                                                >
                                                    {item.value}
                                                </Text>
                                            )}
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
                                <FlexColumn gap="10px" flexWrap="wrap">
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
                                whiteSpace="pre-line"
                            >
                                Upwork Agency
                            </Text>
                            <FlexRow
                                justifyContent="center"
                                alignItems="center"
                            >
                                {/* {socialMedia.map((item: SocialMediaI) => (
                                    <Button
                                        variant={BUTTON_VARIANTS.icon}
                                        icon={getStrapiImage(
                                            item.icon.data.attributes.url,
                                        )}
                                        href={item.href}
                                        hoverColor={COLORS.blue}
                                        key={item.id}
                                    />
                                ))} */}
                                <Link
                                    href="https://www.upwork.com/agencies/1422842507989712896/"
                                    linkText=""
                                >
                                    <Image
                                        src={upWorkLogo}
                                        alt="upwork logo"
                                        height="25"
                                        width="25"
                                    />
                                </Link>
                            </FlexRow>
                        </FlexColumn>
                    </Adaptive>
                </AdaptContainer>
            </FlexRow>
            <Divider />
            <FlexRow justifyContent="center" bg={COLORS.dark} p="30px 0">
                <Adaptive>
                    <AdaptContainer>
                        <Text
                            color={COLORS.white}
                            size={TEXT_SIZES.small.l}
                            weight={TEXT_WEIGHTS.main}
                        >
                            {footerText.rights}
                        </Text>
                    </AdaptContainer>
                </Adaptive>
            </FlexRow>
        </footer>
    );
};
