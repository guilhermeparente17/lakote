import { IoMenu } from "react-icons/io5";
import {
  HeaderContainer,
  HeaderItem,
  HeaderLanguage,
  HeaderLogo,
  HeaderMenu,
  HeaderNav,
} from "./styled";

type HeaderProps = {
  setIsOpen?: any;
};

const Header = ({setIsOpen}:HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderLogo>Lakote</HeaderLogo>

      <HeaderNav>
        <HeaderItem>Product</HeaderItem>
        <HeaderItem>Project</HeaderItem>
        <HeaderItem>Community</HeaderItem>
        <HeaderItem>About Us</HeaderItem>
      </HeaderNav>

      <HeaderLanguage>linguas</HeaderLanguage>

      <HeaderMenu onClick={() => setIsOpen(true)}>
        <IoMenu size="30" />
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
