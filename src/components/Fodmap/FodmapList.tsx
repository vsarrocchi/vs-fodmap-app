import { List } from "@mui/material";
import FodmapItemModel from "../../models/fodmap-item";
import FodmapItem from "./FodmapItem";
import FODMAP_LIST from "../../fodmap-list";

const FodmapList: React.FC = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {FODMAP_LIST.map((item: FodmapItemModel) => (
        <FodmapItem
          key={item.id}
          name={item.name}
          fodmap={item.fodmap}
          image={item.image}
          id={item.id}
          category={item.category}
        />
      ))}
    </List>
  );
};

export default FodmapList;

// import { FixedSizeList as List } from 'react-window';

// const Row = ({ index, style }: any) => (
//   <div style={style}>Row {index}</div>
// );

// const FodmapList = () => (
//   <List
//     height={150}
//     itemCount={1000}
//     itemSize={35}
//     width="100%"
//   >
//     {Row}
//   </List>
// );

// export default FodmapList;
