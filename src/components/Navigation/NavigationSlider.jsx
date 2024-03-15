import React from "react";
import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavigationSlider=[
    {
        title:"Home",
        icon:<HomeIcon  className="icon-single"/>,
        path:"/home",
    },
    {
        title:"Explore",
        icon:<ExploreIcon className="icon-single"/>,
        path:"/explore",
    },
    {
        title:"Notification",
        icon:<NotificationsNoneIcon className="icon-single"/>,
        path:"/notification",
    },
    {
        title:"Messages",
        icon:<MessageIcon className="icon-single"/>,
        path:"/messages",
    },
    {
        title:"Lists",
        icon:<ListAltIcon className="icon-single"/>,
        path:"/lists",
    },
    {
        title:"Bookmarks",
        icon:<BookmarkIcon className="icon-single"/>,
        path:"/bookmarks",
    },
    {
        title:"communities",
        icon:<GroupIcon className="icon-single"/>,
        path:"/communities",
    },
    {
        title:"Profile",
        icon:<PersonIcon className="icon-single"/>,
        // path:"/profile",
    },
    {
        title:"Log out",
        icon:<LogoutIcon className="icon-single"/>,
        path:"/logout",
    },
]
