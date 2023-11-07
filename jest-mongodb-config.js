// Para usar con MongoDB y jest-mongodb
// https://www.npmjs.com/package/@shelf/jest-mongodb

module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest',
    },
    binary: {
      version: '4.2.1',
      skipMD5: true,
    },
    autoStart: false,
  },
};
