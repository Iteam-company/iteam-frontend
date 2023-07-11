import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import nodemailerClient from "@/axios-nodemailer";
import { Input } from "@/anatomic/atoms/Input";
import { Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsWindowDock } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
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
import { StyledForm, Icon } from "./styled";

type Props = {
    closeDeskModal?: () => void;
};

export const FormElem: FC<Props> = ({ closeDeskModal }) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (closeDeskModal) {
            const timer = setTimeout(() => {
                success && closeDeskModal();
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [success]);

    const onSubmit = async (values: FormikValues) => {
        try {
            await nodemailerClient.post("api/nodemailer", values);
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
                                    icon={<BiUser size={20} />}
                                    label="Your Name"
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
                                    icon={<FiMail size={20} />}
                                    label="Your Email"
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
                                icon={<BsWindowDock size={20} />}
                                label="Subject"
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
                                icon={<TbMessageCircle2 size={20} />}
                                label="Comments"
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
                                color={COLORS.dark}
                                label={
                                    <Text
                                        size={TEXT_SIZES.small.m}
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
                                    size={TEXT_SIZES.medium.xs}
                                    color={COLORS.textPrimary}
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
