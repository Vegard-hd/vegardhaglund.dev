import { useState } from "react";

import { Title } from "./components/Title";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ThemeToggleWrapper } from "./components/ThemeToggleWrapper";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Title />
      <ThemeToggleWrapper />
      <Hero />

      <Footer />
    </>
  );
}

export default App;
