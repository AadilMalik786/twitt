import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FaXTwitter } from "react-icons/fa6";
import PersonIcon from '@mui/icons-material/Person';
import PendingIcon from '@mui/icons-material/Pending';
import "./navigstyle.scss";
console.log("navigationmenu");
export const NavigationMenu=[
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
        
        title:"Premium",
        icon:<FaXTwitter className="icon-single" />,
        path:"/premium",
    },
    {
        title:"Profile",
        icon:<PersonIcon className="icon-single"/>,
        // path:"/profile",
    },
    {
        title:"More",
        icon:<PendingIcon className="icon-single"/>,
        path:"/pending",
    },
]