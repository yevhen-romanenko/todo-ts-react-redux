// see https://github.com/uuidjs/uuid#uuidparsestr

const uuidParse = require('uuid').parse;

export const convertGuidToInt = (uuid: any) => {
  let parsedUuid = uuidParse(uuid);
  // convert to integer - see answers to https://stackoverflow.com/q/39346517/2860309
  let buffer = Buffer.from(parsedUuid);
  //   console.log(`parsed uuid converted to buffer`);
  let result = buffer.readUInt32BE(0);
  //   console.log(`buffer converted to integer ${result} successfully`);

  return result;
};
