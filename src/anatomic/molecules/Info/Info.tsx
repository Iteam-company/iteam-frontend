import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { Flex, Icon } from "./styled";
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    contactInfo: contactInfoI[];
}
interface contactInfoI {
    title: string;
    text: string;
    icon: any;
    linkToContactInfo: string;
}

export const Info: FC<Props> = ({ title, description, contactInfo }) => {
    return (
        <Flex gap="35px" p="20px" w="40%">
            <Text
                weight={TEXT_WEIGHTS.main}
                color={COLORS.textPrimary}
                size={TEXT_SIZES.medium.s}
            >
                {title}
            </Text>
            <FlexColumn gap="30px">
                <Text color={COLORS.warmGray} size={TEXT_SIZES.small.xl}>
                    {description}
                </Text>
                {contactInfo.map((item, index: number) => (
                    <Link
                        key={item.title}
                        href={item.linkToContactInfo}
                        target={index === 2 ? "_blank" : ""}
                        style={{ textDecoration: "none" }}
                    >
                        <FlexRow alignItems="center" gap="10px">
                            <Icon
                                src={getStrapiImage(
                                    item.icon.data.attributes.url,
                                )}
                            />
                            <FlexColumn>
                                <Text
                                    size={TEXT_SIZES.small.xl}
                                    color={COLORS.black}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    size={TEXT_SIZES.small.xl}
                                    color={COLORS.black}
                                >
                                    {item.text}
                                </Text>
                            </FlexColumn>
                        </FlexRow>
                    </Link>
                ))}
            </FlexColumn>
        </Flex>
    );
};
