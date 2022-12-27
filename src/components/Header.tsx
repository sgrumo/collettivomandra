import { VideoInformation } from "../models/models";

interface HeaderProps {
  selectedVideo?: VideoInformation;
}

const Header = ({ selectedVideo }: HeaderProps) => {
  return (
    <header
      className={`first-letter: min-h-[30vh]`}
      style={{
        backgroundImage: `url('https://i.vimeocdn.com/video/${selectedVideo?.id}-d_640x360?r=pad')`,
      }}
    >
      <h1 className="principal-heading">Portfolio - COLLETTIVO MANDRA</h1>
    </header>
  );
};

export default Header;
