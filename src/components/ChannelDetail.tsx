import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelData, Item } from "../@types/interfaces.channel";
import { Video, VideoData } from "../@types/interfaces.video";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<Item>({} as Item);
  const [videos, setVideos] = useState<Video[]>([] as Video[]);

  const { id = "" } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const channelData = await fetchFromAPI<ChannelData>(
        `channels?part=snippet&id=${id}`
      );

      setChannelDetail(channelData?.items?.[0]);

      const videosData = await fetchFromAPI<VideoData>(
        `search?channelId=${id}&part=snippet&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div className="channelBackground" />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
