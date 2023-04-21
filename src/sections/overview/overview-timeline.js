import {
  Card,
  CardContent,
  SvgIcon,
  Button,
  CardActions,
  CardHeader,
  Divider,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import PropTypes from "prop-types";

export const OverviewTimeline = (props) => {
  const { timelineItems = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Timeline" />
      <CardContent sx={{ padding: 1 }}>
        <Timeline position="right" sx={{ rowGap: 0.5, margin: 0 }}>
          {timelineItems.map((item) => {
            return (
              <Button sx={{ margin: 0, padding: 1 }}>
                <TimelineItem key={item.id}>
                  <TimelineOppositeContent color="text.secondary" fontSize={14}>
                    {item.date} {item.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant={item.isCompleted ? "filled" : "outlined"}
                      color={item.isCompleted ? "success" : "primary"}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent color="black">{item.name}</TimelineContent>
                </TimelineItem>
              </Button>
            );
          })}
        </Timeline>
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

OverviewTimeline.propTypes = {
  timelineItems: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
