import { FlexColumn } from "@/anatomic/atoms/Flex";
import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";

export const Button = styled.button`
    box-shadow: 0 3px 5px 0 rgb(173 197 255 / 30%);
    height: 36px;
    width: 36px;
    background-color: ${COLORS.buttonDark};
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
`;

export const ButtonWrapper = styled(FlexColumn)<{ visible: boolean }>`
    justify-content: center;
    align-items: center;
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    position: fixed;
    z-index: 5;
    bottom: 30px;
    right: 30px;
    transition: all 0.5s;
    svg {
        position: absolute;
        z-index: 10;
        color: white;
        cursor: pointer;
    }
    :hover {
        button {
            transform: rotate(45deg);
        }
    }
`;
