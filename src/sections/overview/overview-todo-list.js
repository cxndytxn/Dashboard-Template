import {
  Card,
  CardHeader,
  CardActions,
  Checkbox,
  List,
  ListItem,
  Typography,
  Divider,
  SvgIcon,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";

export const OverviewTodoList = (props) => {
  const { todos = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Tasks List" />
      <List>
        {todos.map((todo) => {
          return (
            <ListItem
              sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
              key={todo.id}
            >
              <Checkbox
                color="primary"
                disabled={todo.isDisabled}
              />
              <Stack direction="column">
                <Typography variant="subtitle1">{todo.title}</Typography>
                <Typography variant="body2" color="grey">{todo.desc}</Typography>
              </Stack>
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

OverviewTodoList.propTypes = {
  sx: PropTypes.object,
};
