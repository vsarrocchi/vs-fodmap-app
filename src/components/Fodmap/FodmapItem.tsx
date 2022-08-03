import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
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

const FodmapItem: React.FC<{
  id: string;
  name: string;
  image: string;
  fodmap: string;
}> = (props) => {
  const navigate = useNavigate();

  const fodmapClickHandler = () => {
    navigate(`/all-fodmap/${props.id}`);
  };

  return (
    <Fragment>
      <ListItemButton onClick={fodmapClickHandler}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={props.name}
              src={props.image}
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={props.name}
            secondary={props.fodmap}
            sx={{ textTransform: "capitalize" }}
          />
          <ListItemIcon
            sx={{
              color:
                props.fodmap === "low"
                  ? "green"
                  : props.fodmap === "high"
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
