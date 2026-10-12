export interface ProductType {
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  nameBn: string;
  today: string;
  unit: "kg" | "litre" | "dozen" | "piece";
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  id: number;
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
}
