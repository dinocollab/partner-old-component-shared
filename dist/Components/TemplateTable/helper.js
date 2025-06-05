var CreateConfigTable = function CreateConfigTable(Config) {
  return Config;
};
var CreateConfigTableFromModel = function CreateConfigTableFromModel(data, SelectId) {
  var keys = Object.keys(data);
  var Options = keys.reduce(function (config, key) {
    config[key] = {
      flex: 1,
      minWidth: 100
    };
    return config;
  }, {});
  return {
    SelectId: SelectId,
    Options: Options
  };
};

export { CreateConfigTable, CreateConfigTableFromModel };
//# sourceMappingURL=helper.js.map
