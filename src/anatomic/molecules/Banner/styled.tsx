import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 7px 1fr 7px 1fr 7px;
    grid-template-rows: 7px 1fr 7px 1fr 7px;
    width: 100%;
    grid-template-areas:
        "tl . tc . tr"
        ". content content content ."
        "lc content content content rc"
        ". content content content ."
        "lb . bc . br";
`;

export const Block = styled.div<{ gridArea: string }>`
    grid-area: ${({ gridArea }) => gridArea};
    background-color: ${COLORS.activePath};
    height: 7px;
    width: 7px;
    z-index: 200;
`;

export const ContentConteiner = styled.div`
    grid-area: content;
    border: 2px dashed ${COLORS.activePath};
    position: relative;
    margin: -5px;
`;

export const Box = styled.div`
    border: 2px solid transparent;
    border-right-color: ${COLORS.activePath};
    border-bottom-color: ${COLORS.activePath};
    height: 24px;
    width: 24px;
    margin-left: -24px;
    margin-top: -24px;
    position: absolute;
    z-index: 100;
`;

export const Typewriter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 1020px;
    padding: 0;
    margin-top: -5px;
    margin-bottom: -5px;
    @media all and (max-width: 1260px) {
        width: 80%;
    }
`;

export const TextContainer = styled.div`
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
    @media all and (max-width: 800px) {
        & > * > * > * {
            font-size: 35px;
        }
        & > * {
            font-size: 35px;
            .cursor {
                font-size: 40px;
            }
        }
    }
`;

export const GridLineH = styled.div`
    border-top: 2px solid #eaedf1ed;
    border-bottom: 2px solid #eaedf1;
    width: 100%;
    box-sizing: border-box;
    z-index: 0;
`;

export const GridLineV = styled.div`
    width: calc(100% + 4px);
    border-left: 2px solid #eaedf1;
    border-right: 2px solid #eaedf1;
    height: 80vh;
    position: absolute;
    top: -100%;
    left: -4px;
    @media all and (max-height: 800px) {
        height: 40vh;
        top: -40%;
    }
`;
