import { GraphicCardModel } from "../graphic-card-model/graphic-card-model";

export interface GraphicCard {
  id: number;
  modelId: number;
  series: string;
  archived: boolean;
  model?: GraphicCardModel
}
