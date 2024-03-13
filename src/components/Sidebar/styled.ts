import styled, { keyframes } from "styled-components";

type ItemProps = {
    isOpen?: boolean;
}

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const SidebarContainer =  styled.div<ItemProps>`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: #282928;
    z-index: 999;
    animation: ${({ isOpen }) => isOpen ? slideDown : slideUp} 0.3s ease-in-out;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export const SidebarMenu = styled.div`
    width: 100%;
    margin: 20px 20px 50px 0px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    &:hover {
        opacity: 0.3;
        transition: 0.2s ease-in-out;
    }
`
export const SidebarLogo = styled.h2`
    font-size: 30px;
    color: #fff;
    margin-bottom: 50px;
`

export const SidebarList = styled.ul`
    list-style: none;
    color: #fff;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SidebarItem = styled.li`
    margin-bottom: 60px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
