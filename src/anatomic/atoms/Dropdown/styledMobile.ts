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

export const Title = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    transition: opacity 0.5s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;

export const LinkElem = styled(Link)<{ active: boolean }>`
    cursor: pointer;
    :hover {
        color: ${({ active }) => !active && COLORS.black};
    }
`;

export const Menu = styled(FlexColumn)`
    padding-left: 20px;
`;

export const Container = styled.div`
    width: 100%;
    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
    }
`;
