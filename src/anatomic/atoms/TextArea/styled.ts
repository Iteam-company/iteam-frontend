import { COLORS } from "@/lib/theme/color";
import { Field } from "formik";
import styled from "styled-components";

export const StyledTextArea = styled(Field)`
    resize: vertical;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 6px 12px 6px 40px;
    width: 100%;
    min-height: 143px;
    outline: none;
    font-family: "Nunito", sans-serif;
    line-height: 26px;

    :focus-within {
        border: 1px solid ${COLORS.black};
        transition: border 0.5s;
    }
`;
export const Icon = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
`;
export const Container = styled.div`
    position: relative;
    width: 100%;
`;
