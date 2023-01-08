import Image from "next/image";
import { useState } from "react";
import { VideoInformation } from "../../models/models";

interface PreviewProps {
  video: VideoInformation;
  selectedVideo?: VideoInformation;
  selectVideo: (id: string) => void;
}
const Preview = ({ video, selectedVideo, selectVideo }: PreviewProps) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="video-preview" onClick={() => selectVideo(video.id)}>
      <Image
        src={`https://i.vimeocdn.com/video/${video.id}-d?mw=2000&mh=1125&q=70`}
        layout="fill"
        alt={video.title}
      />
      <span className="video-preview-title">{video.title}</span>
    </div>
  );
};
export default Preview;
