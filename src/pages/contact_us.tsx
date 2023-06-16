import React from "react";
import { FormElem } from "@/anatomic/organisms/Form/Form";
import { Info } from "@/anatomic/molecules/Info";
import { AdaptiveElem } from "@/lib/pageStyles/contactUsStyles";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import {
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import BgImage1 from "@/assets/bgImage/contact_us/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/contact_us/bgImage2.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { useStrapiData, Pages } from "@/hooks/useStrapiData";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Layout } from "@/anatomic/molecules/Layout";

const ContactUs = () => {
    const [data, isLoading] = useStrapiData(Pages.contactUs);
    const size = useWindowSize();
    // if (!data) return null;
    return (
        <Layout>
        <FlexColumn
            w="100%"
            h="100%"
            alignItems="center"
            position="relative"
            style={{ overflow: "hidden" }}
        >
            <FlexColumn
                w="80%"
                h="100%"
                alignItems="center"
                gap="40px"
                p="80px 20px 40px"
            >
                <Text
                    color={COLORS.textPrimary}
                    size={TEXT_SIZES.large.xs}
                    weight={TEXT_WEIGHTS.medium}
                    type={TEXT_TYPES.title}
                >
                    {data.main.title}
                </Text>
                <Text color={COLORS.textThird} size={TEXT_SIZES.medium.xs}>
                    {data.main.description}
                </Text>
            </FlexColumn>
            <FlexColumn
                w="100%"
                h="100%"
                alignItems="center"
                position="relative"
            >
                <AdaptiveElem
                    gap="80px"
                    justifyContent="center"
                    or={size.width! < 886 ? "column-reverse" : "column"}
                >
                    <FormElem />
                    <Info {...data.contact} />
                </AdaptiveElem>

                <BgImage
                    ds="block"
                    src={BgImage1}
                    maxWidth={size.width! < 1600 ? 550 : 600}
                    bottom={size.width! < 1600 ? 56 : 50}
                    left={size.width! < 1600 ? -14 : -10}
                    mobileBottom={40}
                    mobileLeft={50}
                    priority
                />
            </FlexColumn>
            <BgImage
                ds="block"
                src={BgImage2}
                maxWidth={1420}
                bottom={-40}
                right={-4}
                mobileBottom={-6}
                loading="lazy"
            />
        </FlexColumn>
        </Layout>
    );
};

export default ContactUs;
