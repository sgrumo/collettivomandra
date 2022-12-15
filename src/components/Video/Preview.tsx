import Image from "next/image";
import { VideoInformation } from "../../models/models";

interface PreviewProps {
  video: VideoInformation;
  selectedVideo?: string;
  selectVideo: (id: string) => void;
}
const Preview = ({ video, selectedVideo, selectVideo }: PreviewProps) => {
  return (
    <div
      className={`video-preview ${
        selectedVideo !== undefined && selectedVideo === video.id
          ? "video-preview-outline"
          : ""
      }`}
      onClick={() => selectVideo(video.id)}
    >
      <Image
        src={`https://i.vimeocdn.com/video/${video.id}-d_640x360?r=pad`}
        layout="fill"
        alt={video.title}
      />
      <span className="video-preview-title">{video.title}</span>
    </div>
  );
};
export default Preview;
