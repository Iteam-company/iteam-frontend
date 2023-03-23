import styled from "styled-components";

export const Dot = styled.div`
    height: 8px;
    width: 8px;
    background-color: white;
    border-radius: 50%;
    position: relative;

    &.dot--outer-circle::after {
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
`;
