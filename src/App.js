import "./styles.css";
import { useContext } from "react";
import { PracticeContext } from "../src/context";

export default function App() {
  const ctx = useContext(PracticeContext);
  return (
    <div className="App">
      <button onClick={() => ctx.Click()}>click</button>
      <p>{ctx.state}</p>
    </div>
  );
}
