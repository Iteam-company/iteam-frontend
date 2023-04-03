import { TEXT_SIZES } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import { Field } from "formik";
import styled from "styled-components";

export const StyledTextArea = styled(Field)`
    resize: vertical;
    border: 1px solid ${COLORS.lightGray};
    border-radius: 6px;
    box-sizing: border-box;
    padding: 6px 12px 6px 40px;
    width: 100%;
    min-height: 143px;
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
    top: 15px;
    left: 15px;
`;
export const Container = styled.div`
    position: relative;
    width: 100%;
`;
