import { Port } from "../port/port";
import { Memory } from "../Memory/Memory";

export interface Unit {
  id: number;
  type: string;
  value: string;
  archived: boolean;

  memories?: Memory[];
  ports?: Port[];
}

export enum UnitTypsEnum {
  Memory = "Memory",
  Weight = "Weight",
  Port = "Port",
  Power = "Power"
}

export enum PowerUnitsEnum {
  WPSU = "W PSU",
}

export enum MemoryUnitsEnum {
  Bit = "b",
  Byte = "B",
  Kilobyte = "KB",
  Megabyte = "MB",
  Gigabyte = "GB",
  Terabyte = "TB",
  Petabyte = "PB",
  Exabyte = "EB",
  Zettabyte = "ZB",
  Yottabyte = "YB"
}

export enum WeightUnitsEnum {
  grams = "gr",
  Kilograms = "kg",
  pound = "lb"
}

export enum PortUnitsEnum {
  USB_2 = "USB 2.0",
  USB_3 = "USB 3.0",
  USB_C = "USB C"
}

export const UnitTypes2LabelMapping: Record<UnitTypsEnum, string> = {
  [UnitTypsEnum.Memory]: "Memory",
  [UnitTypsEnum.Weight]: "Weight",
  [UnitTypsEnum.Port]: "Port",
  [UnitTypsEnum.Power]:"Power"
};

export const MemoryUnits2LabelMapping: Record<MemoryUnitsEnum, string> = {
  [MemoryUnitsEnum.Bit]: "bit",
  [MemoryUnitsEnum.Byte]: "byte",
  [MemoryUnitsEnum.Kilobyte]: "KB",
  [MemoryUnitsEnum.Megabyte]: "MB",
  [MemoryUnitsEnum.Gigabyte]: "GB",
  [MemoryUnitsEnum.Terabyte]: "TB",
  [MemoryUnitsEnum.Petabyte]: "PB",
  [MemoryUnitsEnum.Exabyte]: "EB",
  [MemoryUnitsEnum.Zettabyte]: "ZB",
  [MemoryUnitsEnum.Yottabyte]: "YB"
};

export const WeightUnits2LabelMapping: Record<WeightUnitsEnum, string> = {
  [WeightUnitsEnum.grams]: "gr",
  [WeightUnitsEnum.Kilograms]: "kg",
  [WeightUnitsEnum.pound]: "lb"
};

export const Ports2LabelMapping: Record<PortUnitsEnum, string> = {
  [PortUnitsEnum.USB_2]: "USB 2.0",
  [PortUnitsEnum.USB_3]: "USB 3.0",
  [PortUnitsEnum.USB_C]: "USB C"
};

export const Power2LabelMapping: Record<PowerUnitsEnum, string> = {
  [PowerUnitsEnum.WPSU]: "W PSU",
};
