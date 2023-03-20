import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text, TEXT_WEIGHTS, TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import { Input } from "@/anatomic/atoms/Input";
import { Formik, Form } from "formik";
import { Button } from "@/anatomic/atoms/Button";
import { FlexContainer } from "./styled";

export const BookingForm = () => {
    return (
        <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
            {({ values, setFieldValue, errors, touched }) => (
                <Form style={{ minWidth: "auto", width: "500px" }}>
                    <FlexContainer
                        gap="45px"
                        alignItems="center"
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
                                // borderRadius="12px"
                                height="40px"
                            />
                        </FlexColumn>
                        <FlexColumn w="auto">
                            <Button
                                type="submit"
                                gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                variant={BUTTON_VARIANTS.gradient_button}
                                label={
                                    <Text
                                        color={COLORS.black}
                                        weight={TEXT_WEIGHTS.main}
                                        size={TEXT_SIZES.xxxs}
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
    );
};
