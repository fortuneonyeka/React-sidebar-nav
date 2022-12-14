import React,{useState} from 'react'
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
  background: var(--color-sidebarlink);
  border-left: 5px solid var(--color-sidebarborder);
  border-radius: 15px;
  cursor:pointer;
}
`

const SidebarLabel =  styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #414757;
height:60px;
padding:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:var(--color-sidebarborder);
font-size:18px;

&:hover {
  background:#632ce4;
  border-right: 5px solid var(--color-sidebarborder);
  border-radius: 15px;
  cursor:pointer;
}
`

const SubMenu = ({item}) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => {
    setSubnav(!subnav)
  }
  return (
    <div >
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
      <div>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </div>
      <div>
        {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
      </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return(
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </div>
  )
}

export default SubMenu