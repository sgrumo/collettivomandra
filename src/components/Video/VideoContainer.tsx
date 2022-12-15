import { useState } from "react";
import { videoData } from "../../../data/video";
import Preview from "./Preview";

const VideoContainer = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>();

  const videos = videoData.map((video, index) => (
    <Preview
      video={video}
      key={index}
      selectedVideo={selectedVideo}
      selectVideo={(id) => setSelectedVideo(id)}
    />
  ));
  return <section className="video-container">{videos}</section>;
};

export default VideoContainer;
