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
  SvgIcon,
  Avatar,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import PropTypes from "prop-types";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/solid/EllipsisVerticalIcon";

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
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
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
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => {
                return (
                  <TableRow hover key={project.id}>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>
                      <Avatar /> {project.client}
                    </TableCell>
                    <TableCell>{project.date}</TableCell>
                    <TableCell>{project.members}</TableCell>
                    <TableCell>{project.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

OverviewRecentProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
