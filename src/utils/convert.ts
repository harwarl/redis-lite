import { CommandEnum, CRLF } from "../constants/constants";
import { CommandType } from "../types/types";

export function ConvertToCommand(request: string): CommandType {
  let parts = request.split(CRLF);
  //   { parts: [ '*2', '$5', 'hello', '$5', 'world', '' ] }

  let name = parts[2].toUpperCase();

  return {
    Name: CommandEnum.PingCmd,
    ArgsNum: 2,
    Args: ["bola"],
  };
}

console.log(ConvertToCommand(`*2\r\n$5\r\nhello\r\n$5\r\nworld\r\n`));
