import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";

import HighlightedFodmap from "../components/Fodmap/HighlightedFodmap";
import FODMAP_LIST from "../fodmap-list";

const FodmapDetail = () => {
  const params = useParams();
  const { fodmapId } = params;

  const fodmap = FODMAP_LIST.find((item) => item.id === fodmapId);

  return (
    <Fragment>
      <HighlightedFodmap name={fodmap?.name} />
      <Outlet />
    </Fragment>
  );
};

export default FodmapDetail;
