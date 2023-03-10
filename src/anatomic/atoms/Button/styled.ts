import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { FlexRow } from "../Flex";
import { Props } from "./util";

export const ColorButton = styled.button<Props>`
    height: 43px;
    width: 100%;
    padding: 8px 20px;
    border: none;
    border-radius: 6px;
    background-color: ${({ color }) => color || COLORS.buttonDark};
    cursor: pointer;
    box-shadow: 0 3px 5px 0 rgb(173 197 255 / 30%);
`;

export const ChangeButton = styled(ColorButton)<Props>`
    transition: background-color 0.5s;
    :hover {
        & > * {
            color: ${COLORS.white};
        }
        background-color: ${COLORS.buttonDark};
    }
`;

export const ButtonIcon = styled.div<Props>`
    cursor: pointer;
    border: 1px solid ${COLORS.blue};
    border-radius: 6px;
    :hover {
        background-color: ${({ hoverColor }) => hoverColor};
    }
`;

export const Link = styled.a`
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    height: 16px;
    width: 16px;
`;

export const GradientButton = styled.a<{ gradient: string }>`
    text-decoration: none;
    height: 46px;
    width: 167px;
    border-radius: 50px;
    padding: 5px;
    background-image: linear-gradient(${({ gradient }) => gradient});
    cursor: pointer;
`;

export const GradientButtonContent = styled(FlexRow)`
    background: white;
    border-radius: 50px;
    width: 100%;
    height: 100%;
`;
