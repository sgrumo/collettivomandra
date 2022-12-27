import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { VideoInformation } from "../models/models";

const Home: NextPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoInformation>();

  return (
    <div className="h-screen w-screen px-4 pt-4">
      <Header selectedVideo={selectedVideo} />
      <Main selectVideo={setSelectedVideo} selectedVideo={selectedVideo} />
    </div>
  );
};

export default Home;
