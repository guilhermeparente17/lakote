import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: fit-content;
    height: 30px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 20px;
    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
        transition: 0.2s ease-in-out;
    }
`;