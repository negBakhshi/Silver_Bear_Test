import { GraphicCard } from "../graphic-card/graphic-card";
import { Memory } from "../Memory/Memory";
import { Port } from "../port/port";
import { Unit } from "../unit/unit";
import { Storage } from "../storage/storage";
import { Cpu } from "../cpu/cpu";

export interface Laptop {
  id: number;
  memoryId: number;
  storageId: number;
  graphicCardId: number;
  cpuId: number;
  portId: number;
  powerUnitId: number;
  power: number;
  weight: number;
  weightUnitId: number;
  graphicCard: GraphicCard;
  cpu: Cpu;
  port: Port;
  memory: Memory
  powerUnit: Unit;
  storage: Storage;
  weightUnit: Unit;
}
