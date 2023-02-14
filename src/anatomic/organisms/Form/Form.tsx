import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Input } from "@/anatomic/atoms/Input";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsWindowDock } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import styled from "styled-components";
import { TextArea } from "@/anatomic/atoms/TextArea";
import { Button } from "@/anatomic/atoms/Button";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { COLORS } from "@/lib/theme/color";
import client from "@/axios";
import successIcon from "@/assets/icon/success-image.svg";
import { motion } from "framer-motion";
import { FormSchema, FormikValues, initialValues } from "./util";

export const FormElem = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = async (values: FormikValues) => {
        try {
            await client.post("/api/nodemailer", values);
            setSuccess(true);
        } catch (err) {
            setError("Sorry, we were unable to send your message");
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={FormSchema}
        >
            {({ values, setFieldValue, errors, touched }) => (
                <StyledForm>
                    {!success && (
                        <FlexColumn gap="20px" alignItems="center">
                            <FlexRow gap="20px">
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    icon={<BiUser size={16} />}
                                    lable="Your Name"
                                    error={
                                        errors.name && touched.name
                                            ? errors.name
                                            : null
                                    }
                                />

                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    icon={<FiMail size={16} />}
                                    lable="Your Email"
                                    error={
                                        errors.email && touched.email
                                            ? errors.email
                                            : null
                                    }
                                />
                            </FlexRow>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                icon={<BsWindowDock size={16} />}
                                lable="Subject"
                                error={
                                    errors.subject && touched.subject
                                        ? errors.subject
                                        : null
                                }
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
                                error={
                                    errors.comments && touched.comments
                                        ? errors.comments
                                        : null
                                }
                            />
                            <Button
                                type="submit"
                                variant={BUTTON_VARIANTS.color}
                                color={COLORS.black}
                                label={
                                    <Text
                                        size={TEXT_SIZES.xs}
                                        color={COLORS.white}
                                        weight={TEXT_WEIGHTS.medium}
                                        letterSpacing={LETTER_SPACING.s}
                                    >
                                        Send Message
                                    </Text>
                                }
                            />
                            {error && <Text textAlign="center">{error} </Text>}
                        </FlexColumn>
                    )}
                    {success && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1] }}
                        >
                            <FlexColumn alignItems="center" gap="20px">
                                <Icon src={successIcon.src} />
                                <Text
                                    type={TEXT_TYPES.title}
                                    size={TEXT_SIZES.m}
                                    color={COLORS.text}
                                    textAlign="center"
                                >
                                    The form has been sent
                                </Text>
                            </FlexColumn>
                        </motion.div>
                    )}
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
const Icon = styled.img`
    width: 100%;
`;
