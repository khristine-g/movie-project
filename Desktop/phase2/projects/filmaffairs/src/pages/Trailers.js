import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import YoutubeComponent from "../components/YoutubeComponent";

const Trailers = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=36abea3582203c7689f8273cff6a9daa`)
      .then((res) => res.json())
      .then((data) => setVideos(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(videos);
  return (
    <div style={{ margin: '0px' }}>
      {videos.map((item, i) => {
        if (i === videos.length - 2) {
          return <YoutubeComponent key={i} videoId={item.key} />;
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default Trailers;