import React from "react";
import { FormElem } from "@/anatomic/organisms/Form/Form";
import { Info } from "@/anatomic/molecules/Info";
import { AdaptiveElem } from "@/lib/pageStyles/contactUsStyles";

const ContactUs = () => {
    return (
        <AdaptiveElem gap="20px" justifyContent="center">
            <FormElem />
            <Info />
        </AdaptiveElem>
    );
};

export default ContactUs;
