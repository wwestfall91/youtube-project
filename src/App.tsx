import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import Subheader from "./subheader/Subheader";
import VideoGrid from "./video-grid/VideoGrid";

function App() {
  const [isSideBarCollapsed, setCollapseSideBar] = useState(false);

  function toggleSideBar() {
    return setCollapseSideBar(!isSideBarCollapsed);
  }

  return (
    <>
      <div className="page-container">
        <Header toggleLeftBar={toggleSideBar}></Header>

        <div className="body-container">
          <SideBar isCollapsed={isSideBarCollapsed}></SideBar>
          <div className="main-body">
            <Subheader></Subheader>
            <VideoGrid></VideoGrid>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
