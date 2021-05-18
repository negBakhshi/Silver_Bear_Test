import { Cpu } from "../cpu/cpu";
import { GraphicCardModel } from "../graphic-card-model/graphic-card-model";

export interface Brand {
  id: number;
  name: string;
  archived: boolean;
  Cpus: Cpu[];
  GraphicCardModels: GraphicCardModel[]
}
