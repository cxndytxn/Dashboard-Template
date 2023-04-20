import { Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import PlayCircleIcon from "@heroicons/react/24/solid/PlayCircleIcon";
import PauseCircleIcon from "@heroicons/react/24/solid/PauseCircleIcon";
import { useRef, useState } from "react";

export const OverviewVideo = (props) => {
  const { url, title, description } = props;
  const [play, setPlay] = useState(true);
  const ref = useRef();

  return (
    <Card>
      <Stack alignItems="center" sx={{ position: "relative" }}>
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
          height="230px"
          ref={ref}
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
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography sx={{ mt: 1 }}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

OverviewVideo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  sx: PropTypes.object,
};
