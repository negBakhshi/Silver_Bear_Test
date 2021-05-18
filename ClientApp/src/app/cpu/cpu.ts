import { Brand } from "../brand/brand";

export interface Cpu {
  id: number;
  brandId?: number;
  series: string;
  archived: boolean;
  brand?: Brand
}
