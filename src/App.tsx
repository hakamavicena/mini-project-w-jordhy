import { useState } from "react";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);

  const noTexts = ["No", "Yakin nih?", "Beneran?", "Fix nih?", "😢 Plis jangan", "Kak 🥺", "NOOOOOOO KAK", "HUHUUHU", "otw anak terlantar :(", "scroll down dulu kak"];
  const currentNoText = noTexts[noCount % noTexts.length];

  const yesScale = 1 + noCount * 0.1; 

  return (
    <section className="hero">
      <h1>Mau jadi kasuh kami, Kak Alvin?</h1>

      <div className="hero-buttons">
        <a
          href="https://line.me/ti/g/p966MEBCrU"
          className="btn btn-primary"
          style={{
            transform: `scale(${yesScale})`,
            transition: "transform 0.2s ease",
          }}
        >
          Yes
        </a>

        <button
          onClick={() => setNoCount(noCount + 1)}
          className="btn btn-secondary"
        >
          {currentNoText}
        </button>
      </div>
    </section>
  );
}

export default App;
