export type Description = {
  title: string;
  text: string[];
};

export type Product = {
  id: number;
  slug: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string | null;
  zoom: string | null;
  cell: string[];
};

export type ProductCard = Pick<
  Product,
  | 'id'
  | 'slug'
  | 'category'
  | 'name'
  | 'priceRegular'
  | 'priceDiscount'
  | 'screen'
  | 'capacity'
  | 'color'
  | 'ram'
> & { image: string };
