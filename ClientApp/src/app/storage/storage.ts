import { Memory } from "../Memory/Memory";

export interface Storage {
  id: number;
  memoryId: number;
  type: string;
  archived: boolean;

  memory?: Memory;
}
