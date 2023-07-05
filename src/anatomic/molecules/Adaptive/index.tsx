import styled from "styled-components";
import { Flex } from "@/anatomic/atoms/Flex";

export const enum SCREEN_SIZES {
    desktop = "1200px",
    tablet = "768px",
    mobile = "400px",
}

export const desktop = (styles: string) =>
    `@media only screen and (min-width: ${SCREEN_SIZES.desktop}) { ${styles} }`;

export const tablet = (styles: string) =>
    `@media only screen and (min-width: ${SCREEN_SIZES.tablet}) { ${styles} }`;

export const mobile = (styles: string) =>
    `@media only screen and (min-width: ${SCREEN_SIZES.mobile}) { ${styles} }`;

export const Adaptive = styled(Flex)`
    padding: 0 10px;
    margin: 0 auto;
    width: fit-content;

    ${tablet(`
        padding: 0 10px; 
        min-width: 80%;
        max-width: 80%;
        margin: 0 auto;
    `)}

    ${desktop(`
        padding: 0 10px;
        width: 100%;
        max-width: 1200px;
        padding: 0 10px;
        margin: 0 auto;
    `)}

    @media(min-width: 1650px) {
        max-width: 1450px;
    }
`;
