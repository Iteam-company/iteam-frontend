import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { Link } from "../Link";

export const Icon = styled.img`
    width: 16px;
    height: 16px;
    position: relative;
    transition: top ease 0.5s;
    top: 0;
    margin-top: -2.5px;
`;

export const Title = styled.div`
    padding: 20px 10px;
    cursor: pointer;
    transition: opacity 0.5s;
    display: flex;
    align-items: center;
    gap: 5px;
    width: auto;
    vertical-align: middle;
`;

export const LinkElem = styled(Link)<{ active: boolean }>`
    cursor: pointer;
    :hover {
        color: ${({ active }) => !active && COLORS.black};
    }
`;

export const Menu = styled.div`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    display: flex;
    z-index: 100;
    padding: 10px 0px;
    list-style: none;
    min-width: 180px;
    max-width: 200px;
    flex-direction: column;
    position: absolute;
    border-radius: 6px;
    background-color: ${COLORS.white};
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
    background-color: black;
`;

export const Container = styled.div`
    position: relative;
    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
        img {
            top: 5px;
        }
    }
`;
