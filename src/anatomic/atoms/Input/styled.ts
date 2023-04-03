import styled from "styled-components";
import { Field } from "formik";
import { COLORS } from "@/lib/theme/color";
import { TEXT_SIZES } from "@/anatomic/atoms/Text";

export const StyledInput = styled(Field)<{
    radius?: string;
    padding?: string;
    height?: string;
}>`
    border: 1px solid ${COLORS.lightGray};
    border-radius: ${({ radius }) => radius || "6px"};
    height: ${({ height }) => height || "50px"};
    box-sizing: border-box;
    padding: ${({ padding }) => padding || "6px 12px 6px 40px"};
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
    height: 50px;
    width: 50px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`;
