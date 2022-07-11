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
  qty1?: string;
  qty2?: string;
  qty3?: string;
  key?: string;
}

export default FodmapItemModel;
