import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import {SidebarData} from "../sidebarData/SidebarData"
import SubMenu from "./SubMenu";

const Nav = styled.div`
  // background: var(--color-bg);
  height: var(--height);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  alig-items: center;
`;

const SidebarNav = styled.nav`
background: var(--color-bg);
  width: 250px;
  height: 100vh;
  display:flex;
  justify-content: center;
  position:fixed;
  top:0;
  left: ${({sidebar}) => (sidebar ? "0" : "-100%")};
  transition:350m;
  z-index:10;
`

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sidebar);
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcon.FaBars onClick={showSidebar}/>
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcon.AiOutlineClose onClick={showSidebar}/>
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
