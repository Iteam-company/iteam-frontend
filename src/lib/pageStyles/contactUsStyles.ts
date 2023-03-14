import styled from "styled-components";
import { Adaptive } from "@/anatomic/molecules/Adaptive";

export const AdaptiveElem = styled(Adaptive)`
    padding: 100px 0 50px;
    @media all and (max-width: 885px) {
        flex-direction: column;
    }
`;
