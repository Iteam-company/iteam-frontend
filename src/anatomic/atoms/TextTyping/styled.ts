import { COLORS } from "@/lib/theme/color";
import styled from "styled-components";
import { TEXT_SIZES, TEXT_WEIGHTS } from "../Text/util";

export const StyledTypingEffect = styled.div`
    font-size: ${TEXT_SIZES.large.m};
    color: ${COLORS.dark};
    font-weight: ${TEXT_WEIGHTS.medium};
`;

export const ShowContainet = styled.div`
    display: none;

    @media (min-width: 670px) {
        display: block;
    }
`;

export const AdoptForText = styled.div`
    font-size: ${TEXT_SIZES.small.m};
    color: ${COLORS.textThird};
    margin: 0;

    @media (min-width: 790px) {
        font-size: ${TEXT_SIZES.small.xl};
        margin-bottom: 10px;
    }

    @media (min-width: 992px) {
        font-size: ${TEXT_SIZES.medium.l};
        margin-bottom: 10px;
    }
`;
