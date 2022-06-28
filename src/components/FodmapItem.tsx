import { Fragment } from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import classes from "./FodmapItem.module.css";

const FodmapItem: React.FC<{ name: string; fodmap: string; image?: string }> = (
  props
) => {
  return (
    <Fragment>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar
            alt={props.name}
            src={props.image}
            sx={{ width: 60, height: 60, marginRight: 2 }}
          />
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.fodmap} />
      </ListItem>
      <Divider />
    </Fragment>
  );
};

export default FodmapItem;
