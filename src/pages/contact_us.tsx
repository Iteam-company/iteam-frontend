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

const ContactUs = () => {
    return (
        <FlexColumn
            w="100%"
            h="100%"
            alignItems="center"
            position="relative"
            style={{ overflow: "hidden" }}
        >
            <BgImage src={BgImage1.src} top={0} left={-350} />

            <FlexColumn
                w="80%"
                h="100%"
                alignItems="center"
                gap="40px"
                p="80px 20px 120px"
            >
                <Text
                    color={COLORS.textPrimary}
                    size={TEXT_SIZES.large.xs}
                    weight={TEXT_WEIGHTS.medium}
                    type={TEXT_TYPES.title}
                >
                    Contact Us
                </Text>
                <Text color={COLORS.textThird} size={TEXT_SIZES.medium.xs}>
                    Feel free to write and call us. We really love to
                    communicate with our clients.
                </Text>
            </FlexColumn>
            <AdaptiveElem gap="80px" justifyContent="center">
                <FormElem />
                <Info />
            </AdaptiveElem>
            <BgImage src={BgImage2.src} bottom={-250} right={-50} />
        </FlexColumn>
    );
};

export default ContactUs;
