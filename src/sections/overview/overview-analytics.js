import { Card, Divider, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";

export const OverviewAnalytics = (props) => {
  const { analytics = [] } = props;

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 3,
      }}
    >
        {analytics.map((section, index) => {
          return (
            <Stack key={section.id} direction="row" gap={13} alignItems="center">
              <Stack direction="column" gap={1}>
                <Typography variant="h6">{section.title}</Typography>
                <Typography variant="caption" color="grey">{section.subtitle}</Typography>
              </Stack>
              <Typography variant="h5" color={section.color}>
                {section.figure}
              </Typography>
              {index !== analytics.length - 1 ? (
                <Divider orientation="vertical" color="black" flexItem />
              ) : (
                <></>
              )}
            </Stack>
          );
        })}
    </Card>
  );
};

OverviewAnalytics.propTypes = {
  analytics: PropTypes.array.isRequired,
};
