import React, {
  useCallback,
  useState,
  useEffect,
} from "react";
import { NavigationMenu } from "./NavigationMenu";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu } from "@mui/material";
import { useLocation } from "react-router-dom";
import { MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { auth } from "../../firebase/firebase";
import { redirect } from "react-router-dom";
import "./navigstyle.scss";

// import { useDispatch } from "react-redux";
// import { SendNavigate } from "../../action/actions";
// import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const Navigation = ({ name, userId }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const location =useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showButton, setShowButton] = useState(false);
  // const [profileNavigated, setProfileNavigated] = useState(false);
  // const [other,setOther] = useState(false);
  // const bool=useSelector((state)=>state.stateNavigate);
  // console.log(bool.data);
  // console.log(buttonClicked);
  const open = Boolean(anchorEl);
  // const [profileClicked, setProfileClicked] = useState(false);
  console.log("navigation");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResize = () => {
    // Check window width and set showPostButton accordingly
    setShowButton(window.innerWidth < 1141);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  const handleLogout = async () => {
    try {
      await auth.signOut(); // The signOut method is part of the Firebase Authentication API
      // Redirect or handle the user state after logout
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

 
  return (
    <>
      {/* <div className="container-navigation-alag">
        <div className="container-second-parent-container">
          <div className="logo">
            <svg
              height="30"
              width="30"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div style={{ backgroundColor: "red" }}>
            {NavigationMenu.map((item, index) => (
              <div key={index} className="navigation-e1230">
                {item.title === "Profile" ? (
                  <NavLink
                    className="navigation-item"
                    to={`/profile/${userId}`}
                    // activeClassName="active"
                    // onClick={handleClose}
                  >
                    <p className="nav-item-icon"> {item.icon}</p>
                    <p className="nav-item-title">{item.title}</p>
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.path}
                    // activeClassName="active"
                    // onClick={handleClose}
                    className="navigation-item"
                  >
                    <p className="nav-item-icon"> {item.icon}</p>
                    <p className="nav-item-title">{item.title}</p>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
          <div className="button-back">
            {showButton ? (
              <div
                style={{
                  backgroundColor: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                  borderRadius: "50%",
                  width: "50px",
                  marginTop: "20px",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="30"
                  width="30"
                  // class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp"
                  // style="color: rgb(255, 255, 255);"
                >
                  <g>
                    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                  </g>
                </svg>
              </div>
            ) : (
              <Button className="solid-button" variant="contained">
                <span> Post</span>
              </Button>
            )}
          </div>
				<div>
          {showButton ? (
            <div style={{ marginTop: "20px" }}>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jtRW4OgVL_Qe0p5Q8MEye6bS1_OIC4Gwsw&usqp=CAU"></Avatar>
            </div>
          ) : (
            <>
              <div className="profile-container-navig">
                <div className="avatar-container-second-navig" >
					<div >
                  <Avatar></Avatar>
				  </div>
                  <div className="profile-text">
                    <div
                    //   className=""
                      style={{
                        width: "135px",
                        backgroundColor: "pink",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {name}
                    </div>
                    <div
                    //   className=""
                      style={{
                        width: "135px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {userId}
                    </div>
                  </div>

                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
					>
                    <MoreHorizIcon />
					  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <div>
                      <MenuItem onClick={handleClose}>
                        Add an existing Account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </div>
                  </Menu>
                </div>
              </div>
            </>
          )}
		  </div>
        </div>
      </div> */}

      <div className="container-navigation-alag">
        <div className="container-second-parent-container">
          <div className="navigationmenu-navbar">
            <div className="logo">
              <svg
                height="30"
                width="30"
                viewBox="0 0 24 24"
                aria-hidden="true"
                
                className="logo-real-navigation"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" ></path>
                </g>
              </svg>
            </div>
            {NavigationMenu.map((item, index) => (
              <div key={index} className="navigation-e1230">
                {item.title === "Profile" ? (
                  <NavLink
                    className="navigation-item"
                    to={`/profile/${userId}`}
                    // activeClassName="active"
                    // onClick={handleClose}
                  >
                    <p className="nav-item-icon"> {item.icon}</p>
                    <p className="nav-item-title">{item.title}</p>
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.path}
                    // activeClassName="active"
                    // onClick={handleClose}

                    className="navigation-item"
                  >
                    <p className="nav-item-icon"> {item.icon}</p>
                    <p className="nav-item-title">{item.title}</p>
                  </NavLink>
                )}
              </div>
            ))}
          <div className="button-back" >
            {showButton ? (
              <div className="post-nav-beta-symbol"
               
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="30"
                  width="30"
                  // class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp"
                  // style="color: rgb(255, 255, 255);"
                >
                  <g>
                    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                  </g>
                </svg>
              </div>
            ) : (
              
              <Button className="solid-button" variant="contained">
                <span> Post</span>
              </Button>
              
            )}
          </div>
          {showButton ? (
            <div className="avatar-mobile-hidden" >
              <Avatar className="avatar-real-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jtRW4OgVL_Qe0p5Q8MEye6bS1_OIC4Gwsw&usqp=CAU"></Avatar>
            </div>
          ) : (
            <>
              <div className="profile-container-navig">
                <div className="avatar-container-second-navig">
                  <div>
                    <Avatar></Avatar>
                  </div>
                  <div className="profile-text">
                    <div
                      //   className=""
                      style={{
                        width: "135px",
                        // backgroundColor: "pink",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        color:"white"
                      }}
                    >
                      {name}
                    </div>
                    <div
                      //   className=""
                      style={{
                        width: "135px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        color:"#383a3d"
                      }}
                    >
                      {userId}
                    </div>
                  </div>

                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreHorizIcon  style={{color:"white"}}/>
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <div>
                      <MenuItem onClick={handleClose}>
                        Add an existing Account
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </div>
                  </Menu>
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
