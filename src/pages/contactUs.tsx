import React from "react";
import { FlexRow } from "@/anatomic/atoms/Flex";
import { FormElem } from "@/anatomic/organisms/Form/Form";
import { Info } from "@/anatomic/organisms/Info";

const ContactUs = () => {
    return (
        <FlexRow justifyContent="center" p="50px 0" gap="24px">
            <FormElem />
            <Info />
        </FlexRow>
    );
};

export default ContactUs;
