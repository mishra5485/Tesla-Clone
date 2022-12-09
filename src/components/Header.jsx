import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

function Header() {
  const [Burger, setBurger] = useState(false);
  return (
    <Container>
      <a href="main.com">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      <Menu>
        <a href="main.com">Model S</a>
        <a href="main.com">Model 3</a>
        <a href="main.com">Model X</a>
        <a href="main.com">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="main.com">Shop</a>
        <a href="main.com">Tesla Account</a>
        <CustomMenu
          onClick={() => {
            setBurger(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={Burger}>
        <CloseWrapper>
          <CustomClose
            onClick={() => {
              setBurger(false);
            }}
          />
        </CloseWrapper>

        <li>
          <a href="main.com">Existing Inventory</a>
        </li>
        <li>
          <a href="main.com">Used Inventory</a>
        </li>
        <li>
          <a href="main.com">Trade-in</a>
        </li>
        <li>
          <a href="main.com">CyberTruck</a>
        </li>
        <li>
          <a href="main.com">Roadster</a>
        </li>
        <li>
          <a href="main.com">Semi</a>
        </li>
        <li>
          <a href="main.com">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const CustomClose = styled(CancelIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
