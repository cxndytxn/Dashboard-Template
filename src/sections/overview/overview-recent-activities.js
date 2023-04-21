import {
  Card,
  CardHeader,
  ListItem,
  List,
  ListItemAvatar,
  ListItemText,
  Divider,
  SvgIcon,
  Button,
  CardActions,
  Avatar,
} from "@mui/material";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";

export const OverviewRecentActivities = (props) => {
  const { activities = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Recent Activities" />
      <List>
        {activities.map((activity) => {
          return (
            <ListItem
              key={activity.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <Stack direction="row" alignItems="center">
                <ListItemAvatar>
                  {activity.image ? (
                    <Avatar
                      src={activity.image}
                      sx={{
                        height: 40,
                        width: 40,
                      }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        backgroundColor: "neutral.200",
                        height: 40,
                        width: 40,
                      }}
                    />
                  )}
                </ListItemAvatar>
                <Stack>
                  <ListItemText
                    primary={activity.username}
                    primaryTypographyProps={{ variant: "h6" }}
                    secondary={activity.time}
                    secondaryTypographyProps={{ variant: "caption" }}
                  />
                </Stack>
              </Stack>
              <ListItemText
                primary={activity.name}
                primaryTypographyProps={{ color: "primary", textAlign: "right" }}
              />
            </ListItem>
          );
        })}
      </List>
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

OverviewRecentActivities.propTypes = {
  activities: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
