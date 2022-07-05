import { Fragment } from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import FodmapItemModel from "../../models/fodmap-item";

const FodmapItem: React.FC<FodmapItemModel> = ({ name, fodmap, image }) => {
  return (
    <Fragment>
      <ListItemButton>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={name}
              src={image}
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={fodmap} />
          <ListItemIcon
            sx={{
              color:
                fodmap === "low"
                  ? "green"
                  : fodmap === "high"
                  ? "red"
                  : "orange",
            }}
          >
            <CircleIcon />
          </ListItemIcon>
        </ListItem>
      </ListItemButton>
      <Divider />
    </Fragment>
  );
};

export default FodmapItem;
