export function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}
