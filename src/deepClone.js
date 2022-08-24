function deepClone(obj) {
  switch (typeof obj) {
    case "bigint":
      return obj;
    case "boolean":
      return obj;
    case "function":
      // functions are not copied
      return obj;
    case "number":
      return obj;
    case "string":
      return obj;
    case "undefined":
      return obj;
    case "symbol":
      return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: deepClone(value),
    };
  }, {});
}

module.exports = deepClone;
