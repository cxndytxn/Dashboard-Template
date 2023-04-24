import { useState } from "react";
import {
  Card,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  LinearProgress,
  CardActions,
  Divider,
  SvgIcon,
  Button,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import PropTypes from "prop-types";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/solid/EllipsisVerticalIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";

export const OverviewRecentProjects = (props) => {
  const { projects = [], sx } = props;
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card sx={sx}>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Projects
          </Typography>
          <Box display="flex" alignItems="center" lineHeight={0}>
            <SvgIcon fontSize="small" color="primary" sx={{ marginRight: 1 }}>
              <CheckIcon />
            </SvgIcon>
            <Typography fontWeight="regular" color="text">
              <strong>30 Done</strong> This Month
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={openMenu}>
          <SvgIcon>
            <EllipsisVerticalIcon />
          </SvgIcon>
        </IconButton>
        {renderMenu}
      </Box>
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Client</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Members</TableCell>
                <TableCell>Progress</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => {
                return (
                  <TableRow hover key={project.id} sx={{ width: "100%" }}>
                    <TableCell>{project.name}</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {project.image ? <Avatar src={project.image} /> : <Avatar />} {project.client}
                    </TableCell>
                    <TableCell>{project.date}</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      {project.members ? (
                        project.members.length > 1 ? (
                          project.members.map((img) => {
                            return <Avatar src={img} />;
                          })
                        ) : (
                          <Avatar src={project.members} />
                        )
                      ) : (
                        <Avatar />
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1">{project.status}%</Typography>
                      <LinearProgress variant="determinate" value={project.status} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
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

OverviewRecentProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
