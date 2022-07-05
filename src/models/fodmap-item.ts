interface FodmapItemModel {
  id: string;
  name: string;
  fodmap: string;
  category: string;
  image?: string;
  details?: {
    oligos: number;
    fructose: number;
    polyols: number;
    lactose: number;
  };
  description?: string;
  qty?: string;
  key?: string;
}

export default FodmapItemModel;
