import { useState } from "react";

import { Title } from "./components/title";
import { Hero } from "./components/Hero";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Title></Title>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}

export default App;
