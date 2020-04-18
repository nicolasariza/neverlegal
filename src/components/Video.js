import React from "react";
import classes from "../BackgroundVideo.module.css";

const videoSource =
  "https://instagram.fbog5-1.fna.fbcdn.net/v/t50.2886-16/85887262_812240295942012_1621417359007404735_n.mp4?_nc_ht=instagram.fbog5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=DLLEJw7bQRMAX8Wv5zB&oe=5E9B391D&oh=bac78ead414ba095edfb5609ef48a622";

const Video = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay playsinline loop muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
