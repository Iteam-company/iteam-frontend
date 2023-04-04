import { TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { Field } from "formik";
import styled from "styled-components";

export const StyledTextArea = styled(Field)`
    resize: vertical;
    border: 1px solid ${COLORS.inputBorder};
    border-radius: 12px;
    box-sizing: border-box;
    padding: 8px 12px 8px 40px;
    width: 100%;
    min-height: 121px;
    outline: none;
    font-family: "Poppins", sans-serif;
    line-height: 32px;
    font-size: ${TEXT_SIZES.small.m};

    ::placeholder {
        font-size: ${TEXT_SIZES.small.m};
    }

    :focus-within {
        border: 1px solid ${COLORS.dark};
        transition: border 0.5s;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 14px;
    left: 10px;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`;
