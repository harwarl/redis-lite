import { CRLF } from "../constants/constants";
import { CHAR } from "../types/types";

export function deserialize(command: string) {
  //Get the first character of the command
  const firstCharacter = command.charAt(0);

  switch (firstCharacter) {
    case CHAR.SIMPLE_STRING:
      //Handle the simple string
      return;

    case CHAR.INTEGER:
      //handle integer
      return;

    case CHAR.BOOLEAN:
      //Handle Boolean
      return;

    case CHAR.BULK_STRING:
      //Handle bulk strings
      return;

    case CHAR.ARRAY:
      //Handle Array
      return;

    case CHAR.MAP:
      //Handle Map
      return;

    //If the firstChar is not part of the recognized chars, throw new Error
    default:
      throw new Error();
  }
}

let parsedData = 0;

export async function deserializeString(commandString: string) {
  // Removes the data and CRLF
  const data = commandString.substring(1, commandString.indexOf(CRLF));
  //   increase the parsedData by the data length and 3: command and /r/n
  parsedData = data.length + 3;
  return data;
}

export function deserializeInteger(commandString: string): number {
  const data = commandString.substring(1, commandString.indexOf(CRLF));
  parsedData = data.length + 3;
  return Number(data);
}

export function deserializeBoolean(commandString: string): boolean {
  const data = commandString.substring(1, commandString.indexOf(CRLF));
  parsedData = data.length + 3;
  return data === "t" ? true : false;
}

export function deserializeBulkString(commandString: string): string | null {
  const bytesCount = Number(
    commandString.substring(1, commandString.indexOf(CRLF))
  );
  if (bytesCount < 0) {
    return null;
  }

  let data = "";
  //letting the starting index be the index of the firstCRLF  + the next Crlf to be able to fully capture the data
  let index = commandString.indexOf(CRLF) + 2;
  let i = 0;

  while (i < bytesCount && index < commandString.length - 2) {
    data += commandString.charAt(index);
    index++;
    i++;
  }

  if (i !== bytesCount) {
    return "Invalid String";
  }

  parsedData = data.length + 5 + bytesCount.toString().length;
  return data;
}

export function deserializeArray(commandString: string): string[] | null {
  let elementCount = Number(
    commandString.substring(1, commandString.indexOf(CRLF))
  );

  if (elementCount <= 0) {
    return [];
  }

  let data = "",
    pos = 4;
  let len = commandString.length - 2;
  let elements: any[] = [];
  while (pos < len) {
    data = commandString.substring(pos);
    const res = deserialize(data);
    pos += parsedData;
    elements = elements.concat(res);
  }
  return elements;
}

export function deserializeMap(commandString: string): any {
  let elementCount = Number(
    commandString.substring(1, commandString.indexOf(CRLF))
  );

  if (elementCount <= 0) {
    return {};
  }

  
}
