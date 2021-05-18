import { Unit } from "../unit/unit";

export interface Memory {
  id: number;
  unitId: number;
  value: number;
  archived: boolean;
  unit: Unit;
  storages: Storage[];
}
