import styled from "styled-components";

export const Dot = styled.div`
    &--outer-circle {
        &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            content: "";
            border: 2px solid white;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
