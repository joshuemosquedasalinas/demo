import { useState } from "react";
import "./App.css";
import { Button } from "./components/atoms/button/Button";

const App = () => {
  const [count, setCount] = useState<number>(0);

  console.log(count, "COUNT VARIABLE");
  return (
    <main>
      <h1>Liquidity Tools</h1>
      <form>
        <input />
      </form>
      <div className="card">
        <Button disabled={count === 5} onClick={() => setCount(count + 1)}>
          {count} Active Users
        </Button>
        <p>
          Hola Joshue, como estas? Espero que estes ben! ¡No andes de malas
          pulgas!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
};

export default App;
