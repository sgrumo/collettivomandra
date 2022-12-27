import { videoData } from "../../../data/video";
import { VideoInformation } from "../../models/models";
import Preview from "./Preview";

interface VideoContainerProps {
  selectedVideo?: VideoInformation;
  selectVideo: (video: VideoInformation) => void;
}

const VideoContainer = ({
  selectedVideo,
  selectVideo,
}: VideoContainerProps) => {
  const videos = videoData.map((video, index) => (
    <Preview
      video={video}
      key={index}
      selectedVideo={selectedVideo}
      selectVideo={(id) => selectVideo(video)}
    />
  ));
  return <section className="video-container">{videos}</section>;
};

export default VideoContainer;
