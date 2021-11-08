export function zero(operation) {
  return expression(0, operation);
}
export function one(operation) {
  return expression(1, operation);
}
export function two(operation) {
  return expression(2, operation);
}
export function three(operation) {
  return expression(3, operation);
}
export function four(operation) {
  return expression(4, operation);
}
export function five(operation) {
  return expression(5, operation);
}
export function six(operation) {
  return expression(6, operation);
}
export function seven(operation) {
  return expression(7, operation);
}
export function eight(operation) {
  return expression(8, operation);
}
export function nine(operation) {
  return expression(9, operation);
}

export function plus(x) {
  return function (y) {
    return y + x;
  };
}
export function minus(x) {
  return function (y) {
    return y - x;
  };
}
export function times(x) {
  return function (y) {
    return y * x;
  };
}
export function dividedBy(x) {
  return function (y) {
    return y / x;
  };
}

function expression(num, op) {
  if (!op) return num;
  return op(num);
}
