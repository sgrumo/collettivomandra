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
    <div
      className="video-preview"
      onClick={() => selectVideo(video.id)}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <a href={video.urlVideo} target="_blank" rel="noreferrer">
        <span
          className={`video-preview-type duration-300 ease-in-out  ${
            onHover ? "opacity-0" : "opacity-100"
          }`}
        >
          {video.type}
        </span>
        <Image
          src={`https://i.vimeocdn.com/video/${video.id}-d?mw=2000&mh=1125&q=70`}
          layout="fill"
          alt={video.title}
        />

        <div
          className={`absolute top-0 left-0 h-full w-full bg-black duration-500 ease-in-out ${
            onHover ? "opacity-50" : "opacity-0"
          }`}
        >
          <div className="video-text-container">
            <span className="video-preview-title">{video.title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Preview;
