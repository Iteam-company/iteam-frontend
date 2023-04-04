import styled from "styled-components";
import { Field } from "formik";
import { COLORS } from "@/lib/theme/color";
import { TEXT_SIZES } from "@/anatomic/atoms/Text";

export const StyledInput = styled(Field)<{
    padding?: string;
}>`
    border: 1px solid ${COLORS.inputBorder};
    border-radius: 12px;
    height: 40px;
    box-sizing: border-box;
    padding: ${({ padding }) => padding || "8px 12px 8px 40px"};
    width: 100%;
    outline: none;
    font-size: ${TEXT_SIZES.small.m};

    :focus-within {
        border: 1px solid ${COLORS.dark};
        transition: border 0.5s;
    }
    ::placeholder {
        font-size: ${TEXT_SIZES.small.m};
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
