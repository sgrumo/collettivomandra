import { VideoInformation } from "../models/models";
import VideoContainer from "./Video/VideoContainer";

interface VideoContainerProps {
  selectedVideo?: VideoInformation;
  selectVideo: (video: VideoInformation) => void;
}

const Main = (props: VideoContainerProps) => {
  return (
    <main>
      <VideoContainer {...props} />
    </main>
  );
};

export default Main;
