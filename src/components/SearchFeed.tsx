import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Videos } from ".";
import { Video, VideoData } from "../@types/interfaces.video";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState<Video[]>([] as Video[]);
  const { searchTerm = "" } = useParams();
  useEffect(() => {
    fetchFromAPI<VideoData>(`search?part=snippet&q=${searchTerm}`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for :{" "}
        <span style={{ color: "#f31503" }}>{searchTerm} videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
