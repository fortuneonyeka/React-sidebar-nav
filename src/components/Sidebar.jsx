import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as FaIcon from "react-icons/fa"
import * as AiIcon from "react-icons/ai"


const Nav = styled.div`
background:var(--color-bg);
height: var(--height);
display:flex;
justify-content:flex-start;
align-items:center
`

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size:rem;
height:80px;
display:flex;
justify-content:flex-start;
alig-items:center
`

const Sidebar = () => {
  return (
    <>
  <Nav>
    <NavIcon to="#">
    <FaIcon.FaBars />
    </NavIcon>
  </Nav>
    </>
  )
}

export default Sidebar