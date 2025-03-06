import { useState } from "react";

import "./App.css";
import Footer from "./components/footer";
import Title from "./components/Title";
function App() {
  // const [count, setCount] = useState(22);

  return (
    <>
      <section className="flex justify-center">
        <Title></Title>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
