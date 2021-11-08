export function zero(operation?: any): any {
  expression(0, operation);
}
export function one(operation?: any): any {
  expression(1, operation);
}
export function two(operation?: any): any {
  expression(2, operation);
}
export function three(operation?: any): any {
  expression(3, operation);
}
export function four(operation?: any): any {
  expression(4, operation);
}
export function five(operation?: any): any {
  expression(5, operation);
}
export function six(operation?: any): any {
  expression(6, operation);
}
export function seven(operation?: any): any {
  expression(7, operation);
}
export function eight(operation?: any): any {
  expression(8, operation);
}
export function nine(operation?: any): any {
  expression(9, operation);
}

export function plus(x: number) {
  return function (y: number) {
    return y + x;
  };
}
export function minus(x: number) {
  return function (y: number) {
    return y - x;
  };
}
export function times(x: number) {
  return function (y: number) {
    return y * x;
  };
}
export function dividedBy(x: number) {
  return function (y: number) {
    return y / x;
  };
}

export function expression(num: number, op?: any) {
  if (!op) return num;
  return op(num);
}
