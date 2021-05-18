import { Brand } from "../brand/brand";
import { GraphicCard } from "../graphic-card/graphic-card";

export interface GraphicCardModel {
  id: number;
  brandId: number;
  name: string;
  archived: boolean;
  brand: Brand;
  graphicCards: GraphicCard[];
}
