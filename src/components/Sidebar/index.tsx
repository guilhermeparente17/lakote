import { IoMenu } from "react-icons/io5";
import {
  SidebarContainer,
  SidebarItem,
  SidebarList,
  SidebarLogo,
  SidebarMenu,
} from "./styled";

type SidebarProps = {
    setIsOpen?: any;
    isOpen?: boolean;
}

const Sidebar = ({setIsOpen, isOpen}: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu onClick={() => setIsOpen(false)}>
        <IoMenu size={30} color="#fff" />
      </SidebarMenu>

      <SidebarLogo>Lakote</SidebarLogo>

      <SidebarList>
        <SidebarItem onClick={() => setIsOpen(false)}>Product</SidebarItem>
        <SidebarItem onClick={() => setIsOpen(false)}>Project</SidebarItem>
        <SidebarItem onClick={() => setIsOpen(false)}>Community</SidebarItem>
        <SidebarItem onClick={() => setIsOpen(false)}>About Us</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
