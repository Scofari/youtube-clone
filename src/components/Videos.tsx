import { Box, Stack } from "@mui/material";
import { Video } from "../@types/interfaces.video";
import { ChannelCard, Loader, VideoCard } from ".";
import { Item } from "../@types/interfaces.channel";

interface VideosProps {
  videos: Video[] | Item[] | null;
  direction?: "column" | "row";
}

const Videos = ({ videos, direction }: VideosProps) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      sx={{
        flexDirection: direction || {
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
        },
      }}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
      alignItems="start"
    >
      {videos.map((video, index) => {
        const { id } = video;

        return (
          <Box key={index}>
            {id?.videoId && <VideoCard video={video as Video} />}
            {id?.channelId && <ChannelCard channelDetail={video as Item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
