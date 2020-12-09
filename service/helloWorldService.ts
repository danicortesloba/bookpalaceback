export const makeHelloWorldService = () => {
  return () => ({
    getHelloWorld: () => "hello!!!",
  });
};
