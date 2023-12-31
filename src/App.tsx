import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
