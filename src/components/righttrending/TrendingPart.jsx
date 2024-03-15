import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./style.scss";
const TrendingPart = () => {
  // const [textColor,setTextColor]=useState("Search");
  return (
    <>
      <div className="trending-first-parent-block">
    {/* <div className="px"> */}
        <div className="trending-part-container" >
          <div className="search-container" >
            <div className="parent-input-searchicon" >
              <div className="search-block">
                <SearchIcon />
              </div>
              <div className="input-block" >
                <input 
                  className="input-real"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-first-parent-block">
          <div className="subscribe-parent-container">
            <div className="subscribe-container">
              <h3>Subscribe to Premium</h3>
              <p>
                Subscribe to unlock new features and if eligible, recieve a
                share of ads revenue.
              </p>
              <div>
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="happening-first-container-block" style={{}}>
          <div className="happening-second-container-second-block" style={{}}>
            <div className="happening-third-container-third-block">
              <h3>What's happening</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>News-Trending</p>
                  <p>#Japan</p>
                  <p>167K posts</p>
                </div>
                <div>...</div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>
    </>
  );
};
export default TrendingPart;
