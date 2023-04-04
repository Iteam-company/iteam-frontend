import styled from "styled-components";
import { Adaptive } from "@/anatomic/molecules/Adaptive";

export const AdaptiveElem = styled(Adaptive)`
    padding: 0 0 230px;
    @media all and (max-width: 885px) {
        flex-direction: column;
    }
`;
