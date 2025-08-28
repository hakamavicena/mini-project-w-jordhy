import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-8 min-h-screen justify-center">
      <h1>Mau jadi kasuh kami, kak Alvin?🥹</h1>
      <div className="flex justify-evenly">
        <button>
          <a href="">Yes</a>
        </button>
        <button>
          <a href="">No</a>
        </button>
      </div>
    </div>
  );
}

export default App;
