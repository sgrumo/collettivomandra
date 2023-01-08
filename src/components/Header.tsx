import { VideoInformation } from "../models/models";

interface HeaderProps {
  selectedVideo?: VideoInformation;
}

const Header = ({ selectedVideo }: HeaderProps) => {
  return (
    <header className={`first-letter pt-4 pb-8`}>
      <h1 className="principal-heading">COLLETTIVO MANDRA</h1>
    </header>
  );
};

export default Header;
