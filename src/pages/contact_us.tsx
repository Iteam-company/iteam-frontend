import React from "react";
import { FormElem } from "@/anatomic/organisms/Form/Form";
import { Info } from "@/anatomic/molecules/Info";
import styled from "styled-components";
import { Adaptive } from "@/anatomic/molecules/Adaptive";

const ContactUs = () => {
    return (
        <AdaptiveElem gap="20px" justifyContent="center">
            <FormElem />
            <Info />
        </AdaptiveElem>
    );
};

export default ContactUs;

const AdaptiveElem = styled(Adaptive)`
    padding: 50px 0;
    @media all and (max-width: 885px) {
        flex-direction: column;
    }
`;
