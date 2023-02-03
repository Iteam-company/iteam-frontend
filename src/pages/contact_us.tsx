import React from "react";
import { FlexRow, StyledFlex } from "@/anatomic/atoms/Flex";
import { FormElem } from "@/anatomic/organisms/Form/Form";
import { Info } from "@/anatomic/molecules/Info";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <FlexRow justifyContent="center" p="50px 0">
            <Flex
                w="60%"
                alignItems="center"
                justifyContent="center"
                gap="20px"
            >
                <FormElem />
                <Info />
            </Flex>
        </FlexRow>
    );
};

export default ContactUs;

const Flex = styled(StyledFlex)`
    flex-direction: row;

    @media all and (max-width: 885px) {
        flex-direction: column;
    }
`;
