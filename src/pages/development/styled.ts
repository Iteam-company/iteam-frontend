import { Grid } from "@/anatomic/atoms/Grid/grid";
import styled from "styled-components";

export const Card = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
    border-radius: 6px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    text-decoration: none;
`;

export const Icon = styled.img`
    width: 25px;
    height: 25px;
`;
export const GridElem = styled(Grid)`
    @media all and (max-width: 1400px) and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    padding: 40px 0 60px;
    width: 100%;
    align-items: start;
`;
