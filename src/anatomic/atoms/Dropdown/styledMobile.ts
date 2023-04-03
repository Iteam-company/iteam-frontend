import styled from "styled-components";
import { COLORS } from "@/lib/theme/color";
import { Link } from "@/anatomic/atoms/Link";
import { FlexColumn } from "../Flex";

export const Icon = styled.img`
    width: 16px;
    height: 16px;
    position: relative;
    transition: top ease 0.5s;
    top: 0;
`;

export const Title = styled.div<{ active?: any }>`
    padding: 10px 0px;
    cursor: pointer;
    transition: opacity 0.5s;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;
    position: relative;

    ::after {
        content: "";
        position: absolute;
        bottom: 7px;
        width: ${({ active }) => (active ? "100px" : "0")};
        right: 0px;
        background-color: ${COLORS.white};
        height: 2px;
        transition: width 0.5s ease;
    }
`;

export const LinkElem = styled(Link)<{ active: boolean }>`
    cursor: pointer;
    position: relative;

    ::after {
        content: "";
        position: absolute;
        bottom: 7px;
        width: ${({ active }) => (active ? "80%" : "0")};
        right: 10%;
        background-color: ${COLORS.white};
        height: 1px;
        transition: width 0.5s ease;
    }
`;

export const Menu = styled(FlexColumn)`
    padding-left: 20px;
    align-items: end;
`;

export const Container = styled.div`
    justify-content: center;
    position: relative;
    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
    }
`;
