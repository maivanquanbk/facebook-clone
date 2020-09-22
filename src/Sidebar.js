import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar({ user }) {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p320x320/56312071_852675698405545_2588168896255098880_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=wm3G1xB7YDQAX847iyP&_nc_ht=scontent-sin6-2.xx&tp=6&oh=fcd25af2695ced18fc69c80c7dc0dc00&oe=5F8FA0C3"
        title="Quan Mai"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default Sidebar;
