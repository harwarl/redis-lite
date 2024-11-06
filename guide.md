=> Build a serializer that convert responses to RESP format
=> Build a deserializer that convert incoming RESP messages to normal 

DESERIALIZER ->
-> check the first character of the command. If valid, pass the command to be further processed, if invalid, throw Error
