import { VideoInformation } from "../models/models";
import Clients from "./Clients";
import VideoContainer from "./Video/VideoContainer";

interface VideoContainerProps {
  selectedVideo?: VideoInformation;
  selectVideo: (video: VideoInformation) => void;
}

const Main = (props: VideoContainerProps) => {
  return (
    <main>
      <VideoContainer {...props} />
      <Clients />
    </main>
  );
};

export default Main;
