import { CommandEnum } from "../constants/constants";

export type CommandType = {
  Name: CommandEnum;
  ArgsNum: number;
  Args: string[];
};

export enum CHAR {
  SIMPLE_STRING = "+",
  INTEGER = ":",
  BOOLEAN = "#",
  DOUBLE = ",",
  BULK_STRING = "$",
  ARRAY = "*",
  MAP = "%",
  ERROR = "-",
}
