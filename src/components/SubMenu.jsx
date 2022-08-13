import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"


const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content:space-between;
align-items: center;
list-style:none;
padding:20px;
height:60px;
text-decoration:none;
font-size:20px;

&:hover {
  background: #252831;
  border-left: 5px solid #00FF00;
  border-radius: 15px;
  cursor:pointer;
}
`

const SidebarLabel =  styled.span`
margin-left: 16px;
`;

const SubMenu = ({item}) => {
  return (
    <div >
      <SidebarLink to={item.path}>
      <div>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </div>
      </SidebarLink>
    </div>
  )
}

export default SubMenu