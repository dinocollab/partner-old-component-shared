// Operator
var EOperator;
(function (EOperator) {
  EOperator[EOperator["GreaterThan"] = 0] = "GreaterThan";
  EOperator[EOperator["LessThan"] = 1] = "LessThan";
  EOperator[EOperator["GreaterThanOrEqual"] = 2] = "GreaterThanOrEqual";
  EOperator[EOperator["LessThanOrEqual"] = 3] = "LessThanOrEqual";
  EOperator[EOperator["NotEqual"] = 4] = "NotEqual";
  EOperator[EOperator["Equal"] = 5] = "Equal";
  EOperator[EOperator["Contains"] = 6] = "Contains";
})(EOperator || (EOperator = {}));

export { EOperator };
//# sourceMappingURL=type.js.map
