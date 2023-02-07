import styled from "styled-components";
import { Field } from "formik";
import { COLORS } from "@/lib/theme/color";

export const StyledInput = styled(Field)`
    border: 1px solid #dee2e6;
    border-radius: 6px;
    height: 40px;
    box-sizing: border-box;
    padding: 6px 12px 6px 40px;
    width: 100%;
    outline: none;
    :focus-within {
        border: 1px solid ${COLORS.black};
        transition: border 0.5s;
    }
`;

export const Icon = styled.div`
    height: 40px;
    width: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`;
