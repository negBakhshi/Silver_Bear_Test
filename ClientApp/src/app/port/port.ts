import { Unit } from "../unit/unit";

export interface Port {
  id: number;
  quantity: number;
  unitId: number;

  unit: Unit;
}
