import {Counter} from "../counter/Counter";

export const Home = () => {
  return (
    <div data-testid="home">
      <h1 data-testid="title">Home page</h1>
      <Counter />
    </div>
  );
};
