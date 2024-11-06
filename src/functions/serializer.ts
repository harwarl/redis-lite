import { CRLF } from "../constants/constants";
import { CHAR } from "../types/types";

export function deserializer(command: string) {
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

export async function deserializeString() {}
