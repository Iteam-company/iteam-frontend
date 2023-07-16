import styled from "styled-components";
import { Adaptive } from "@/anatomic/molecules/Adaptive";

type Order = {
    or?: string;
};

export const AdaptiveElem = styled(Adaptive)<Order>`
    padding: 0 0 230px;
    @media all and (max-width: 885px) {
        flex-direction: ${({ or }) => or || "column"};
        justify-content: center;
        align-items: center;
    }
`;
