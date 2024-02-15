import styled from "styled-components";

export const Button = styled.button`
    outline: none;
    border: 3px solid transparent;
    border-radius: 16px;
    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: max-content;
    height: 50px;
    font-size: 16px;
    background: #250743;
    font-weight: 500;
    color: white;
    cursor: pointer;

    transition: 0.3s all;

    &:hover {
        background: transparent;
        color: black;
        border: 3px solid #987bcb;
    }

    &:active {
        border: 3px solid transparent;
        background: #7bb0c7;
        color: white;
    }

    @media all and (min-width: 750px) {
        font-size: 20px;
        min-width: 390px;
        height: 69px;
        padding: 16px 20px;

        margin-top: 10px;
    }

    @media all and (min-width: 1000px) {
        font-size: 22px;
        min-width: 390px;
        height: 69px;
        padding: 18px 36px;

        margin-top: 20px;
    }
`;
