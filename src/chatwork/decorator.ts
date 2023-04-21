function timeLogged<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  { name }: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(name);

  return function (this: This, ...args: Args): Return {
    console.time(methodName);
    try {
      return target.call(this, ...args);
    } finally {
      console.timeLog(methodName);
    }
  };
}
