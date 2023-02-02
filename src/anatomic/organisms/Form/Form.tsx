import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Input } from "@/anatomic/atoms/Input";
import { Form, Formik } from "formik";
import React from "react";
import { FiMail } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsWindowDock } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import styled from "styled-components";
import { TextArea } from "@/anatomic/atoms/TextArea";
import { Button } from "@/anatomic/atoms/Button";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { COLORS } from "@/lib/theme/color";
import { REACT_APP_SMTP_USER } from "env";
import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import axios from "axios";
import client from "@/axios";

interface FormikValues {
    name: string;
    email: string;
    subject: string;
    comments: string;
}

const initialValues = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};

export const FormElem = () => {
    const onSubmit = async (values: FormikValues) => {
        console.log(values);
        try {
            const response = await client.post("/api/nodemailer", values);
            console.log(response, "response");
        } catch (err) {
            console.log("Error", err);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, setFieldValue }) => (
                <StyledForm>
                    <FlexColumn gap="20px">
                        <FlexRow gap="20px">
                            <Input
                                id="name"
                                name="name"
                                placeholder="Name"
                                icon={<BiUser size={16} />}
                                lable="Your Name"
                            />
                            <Input
                                id="email"
                                name="email"
                                placeholder="Email"
                                icon={<FiMail size={16} />}
                                lable="Your Email"
                            />
                        </FlexRow>
                        <Input
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            icon={<BsWindowDock size={16} />}
                            lable="Subject"
                        />
                        <TextArea
                            id="comments"
                            name="comments"
                            placeholder="Message"
                            icon={<TbMessageCircle2 size={16} />}
                            lable="Comments"
                            value={values.comments}
                            onChange={(e: any) =>
                                setFieldValue("comments", e.target.value)
                            }
                        />
                        <Button
                            type="submit"
                            variant={BUTTON_VARIANTS.color}
                            label={
                                <Text
                                    size={TEXT_SIZES.xs}
                                    color={COLORS.white}
                                    weight={TEXT_WEIGHTS.medium}
                                    letterSpacing="0.5px"
                                >
                                    Send Message
                                </Text>
                            }
                        />
                    </FlexColumn>
                </StyledForm>
            )}
        </Formik>
    );
};
const StyledForm = styled(Form)`
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
    padding: 24px;
    border-radius: 6px;
`;
