import React from 'react';
import * as FaIcon from "react-icons/fa"
import * as AiIcon from "react-icons/ai"
import * as IoIcon from "react-icons/io"
import * as RiIcon from "react-icons/ri"
import * as FcIcon from "react-icons/fc"

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcon.AiFillHome/>,
    iconClosed: <RiIcon.RiArrowDownSFill/>,
    iconOpened: <RiIcon.RiArrowUpSFill/>,

    subNav:[
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcon.IoMdPerson />,
      },
      {
        title: "Ratings",
        path: "/overview/ratings",
        icon: <FcIcon.FcRating/>,
      },
    ]
  },

  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcon.IoIosPaper/>,
    iconClosed: <RiIcon.RiArrowDownSFill/>,
    iconOpened: <RiIcon.RiArrowUpSFill/>,

    subNav:[
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIcon.IoIosPaper/>,
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcon.IoIosPaper/>,
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icon: <IoIcon.IoIosPaper/>,
      },
    ]
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcon.FaCartPlus/>
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcon.IoMdPeople />
  },
  {
    title:"Messages",
    path: "/messages",
    icon: <FaIcon.FaEnvelopeOpenText />,
    iconClosed: <RiIcon.RiArrowDownSFill/>,
    iconOpened: <RiIcon.RiArrowUpSFill/>,

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <IoIcon.IoIosPaper />
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icon: <IoIcon.IoIosPaper />
      },
      {
        title: "Message 3",
        path: "/messages/message3",
        icon: <IoIcon.IoIosPaper />
      },
    ]
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcon.IoMdHelpCircle />
  }
]