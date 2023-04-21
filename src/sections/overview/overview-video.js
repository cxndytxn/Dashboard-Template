import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  CardActions,
  SvgIcon,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import PlayCircleIcon from "@heroicons/react/24/solid/PlayCircleIcon";
import PauseCircleIcon from "@heroicons/react/24/solid/PauseCircleIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import { useRef, useState } from "react";

export const OverviewVideo = (props) => {
  const theme = useTheme();
  const { url, title, description, sx, date } = props;
  const [play, setPlay] = useState(true);
  const ref = useRef();

  return (
    <Card sx={sx}>
      <Stack alignItems="center" sx={{ position: "relative" }}>
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
          width="100%"
          ref={ref}
          style={{ objectFit: "cover", maxHeight: "250px" }}
        >
          <source src={url} type="video/mp4" />
        </video>
        <IconButton
          sx={{ position: "absolute", bottom: 5, left: 5 }}
          onClick={() => {
            !play ? ref.current.play() : ref.current.pause();
            setPlay(!play);
          }}
        >
          {!play ? (
            <PlayCircleIcon
              style={{
                color: "white",
                zIndex: 1,
                width: "50px",
                height: "50px",
              }}
            />
          ) : (
            <PauseCircleIcon
              style={{
                color: "white",
                zIndex: 1,
                width: "50px",
                height: "50px",
              }}
            />
          )}
        </IconButton>
      </Stack>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div>
          <Typography variant="h6">{title}</Typography>
          <Typography sx={{ mt: 2 }}>{description}</Typography>
        </div>
        <Typography variant="caption" color={theme.palette.grey}>
          {date}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewVideo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  sx: PropTypes.object,
  date: PropTypes.string,
};
