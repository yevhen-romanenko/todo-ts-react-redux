// see https://github.com/uuidjs/uuid#uuidparsestr

const uuidParse = require('uuid').parse;

export const convertGuidToInt = (uuid: any) => {
  let parsedUuid = uuidParse(uuid);

  let buffer = Buffer.from(parsedUuid);

  let result = buffer.readUInt32BE(0);

  return result;
};
