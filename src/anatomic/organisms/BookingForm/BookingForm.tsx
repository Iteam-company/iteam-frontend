import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { FC } from "react";
import { Input } from "@/anatomic/atoms/Input";
import { Formik, Form } from "formik";
import { Button } from "@/anatomic/atoms/Button";
import { FlexContainer } from "./styled";
import { FormSchema, FormikValues, initialValues } from "./util";
import { useRouter } from "next/router";
import { WhiteSection } from "@/anatomic/atoms/WhiteSection";

type Props = {
    h?: string;
};

export const BookingForm: FC<Props> = ({ h }) => {
    const router = useRouter();

    const onSubmit = (values: FormikValues) => {
        const date = new Date().toISOString().split(".")[0];
        router.push(
            `https://calendly.com/iteamcom/30min/${date}?email=${values.email}`,
        );
    };

    return (
        <WhiteSection h={h}>
            <Text
                color={COLORS.textPrimary}
                weight={TEXT_WEIGHTS.medium}
                size={TEXT_SIZES.large.xs}
            >
                Book an initial 30-min call
            </Text>
            <Text size={TEXT_SIZES.small.m} color={COLORS.textThird}>
                Let`s discuss your needs. And we will tell you how we can help.
                Without obligations.
            </Text>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={FormSchema}
            >
                {({ values, setFieldValue, errors, touched }) => (
                    <Form style={{ width: "500px" }}>
                        <FlexContainer
                            gap="45px"
                            alignItems="start"
                            justifyContent="center"
                            w="100%"
                            style={{ boxSizing: "border-box" }}
                        >
                            <FlexColumn w="65%">
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    padding="8px 12px"
                                    error={
                                        errors.email && touched.email
                                            ? errors.email
                                            : null
                                    }
                                />
                            </FlexColumn>
                            <FlexColumn w="auto">
                                <Button
                                    type="submit"
                                    gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                    variant={BUTTON_VARIANTS.gradient_button}
                                    label={
                                        <Text
                                            color={COLORS.dark}
                                            weight={TEXT_WEIGHTS.main}
                                            size={TEXT_SIZES.small.m}
                                        >
                                            Book a call
                                        </Text>
                                    }
                                />
                            </FlexColumn>
                        </FlexContainer>
                    </Form>
                )}
            </Formik>
        </WhiteSection>
    );
};
