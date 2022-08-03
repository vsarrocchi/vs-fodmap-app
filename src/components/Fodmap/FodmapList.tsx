import { List } from "@mui/material";
import FodmapItem from "./FodmapItem";
import FODMAP_LIST from "../../fodmap-list";

const FodmapList: React.FC = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {FODMAP_LIST.map((item) => (
        <FodmapItem
          key={item.id}
          name={item.name}
          fodmap={item.fodmap}
          image={item.image}
          id={item.id}
        />
      ))}
    </List>
  );
};

export default FodmapList;
