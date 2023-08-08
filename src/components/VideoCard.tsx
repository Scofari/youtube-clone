import { Link } from "react-router-dom";
import { Video } from "../@types/interfaces.video";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const {
    id,
    snippet: { channelId, thumbnails, title, channelTitle },
  } = video;

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "358px",
          md: "320px",
        },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={id?.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={thumbnails?.high?.url || demoThumbnailUrl}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={id?.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
