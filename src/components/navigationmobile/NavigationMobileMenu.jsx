import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import GroupIcon from '@mui/icons-material/Group';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import { FaXTwitter } from "react-icons/fa6";
import PersonIcon from '@mui/icons-material/Person';
// import PendingIcon from '@mui/icons-material/Pending';
// import "./style.scss";
// console.log("navigationmenu");
export const NavigationMobileMenu=[
    {
        title:"Home",
        icon:<HomeIcon   className="icon-single-mobile-menu"/>,
        path:"/home",
    },
    {
        title:"Explore",
        icon:<ExploreIcon className="icon-single-mobile-menu"/>,
        path:"/explore",
    },
    {
        title:"Notification",
        icon:<NotificationsNoneIcon className="icon-single-mobile-menu"/>,
        path:"/notification",
    },
    {
        title:"Messages",
        icon:<MessageIcon className="icon-single-mobile-menu"/>,
        path:"/messages",
    },
   
    {
        title:"Profile",
        icon:<PersonIcon className="icon-single-mobile-menu"/>,
        // path:"/profile",
    },
   
]