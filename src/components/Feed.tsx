import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from ".";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Video, VideoData } from "../@types/interfaces.video";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<Video[]>([] as Video[]);

  useEffect(() => {
    fetchFromAPI<VideoData>(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright {new Date().getFullYear()} Youtube Clone
        </Typography>
      </Box>

      <Box p={2} flex={2} height="90vh" sx={{ overflowY: "auto" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="white">
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
