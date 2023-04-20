import PropTypes from "prop-types";
import { MenuItem, MenuList, Popover } from "@mui/material";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";

export const OverviewLatestProductsPopover = (props) => {
  const { anchorEl, onClose, open } = props;

  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={anchorEl}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 150 } }}
    >
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PencilIcon style={{ height: "18px", width: "18px" }} />
          Edit
        </MenuItem>
        <MenuItem sx={{ display: "flex", alignItems: "center", gap: 1, color: "red" }}>
          <TrashIcon style={{ height: "18px", width: "18px" }} />
          Delete
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

OverviewLatestProductsPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
