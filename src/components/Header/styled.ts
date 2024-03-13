import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background-color: #282928;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

export const HeaderLogo = styled.h2`
    font-size: 16px;
    margin-left: 40px;
    cursor: pointer;
`;

export const HeaderNav = styled.ul`
    list-style: none;
    display: flex;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const HeaderItem = styled.li`
    margin: 0px 20px;
    font-size: 14px;
    font-weight: normal;
    &:hover {
        text-decoration: underline;
    }
`;

export const HeaderLanguage = styled.div`
    margin-right: 40px;

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const HeaderMenu = styled.div`
    margin-right: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    display: none;

    &:hover {
        opacity: 0.7;
        transition: 0.2s ease-in-out
    }

    @media screen and (max-width: 700px) {
        display: block;
    }
`;
