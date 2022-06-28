import { List } from "@mui/material";
import FodmapItemModel from "../models/fodmap-item";
import FodmapItem from "./FodmapItem";

const FodmapList: React.FC<{ items: FodmapItemModel[] }> = (props) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {props.items.map((item) => (
        <FodmapItem
          key={item.id}
          name={item.name}
          fodmap={item.fodmap}
          image={item.image}
        />
      ))}
    </List>
  );
};

export default FodmapList;
