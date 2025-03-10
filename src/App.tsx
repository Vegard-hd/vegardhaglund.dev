import { Title } from "./components/Title.tsx";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ThemeToggleWrapper } from "./components/ThemeToggleWrapper";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Title></Title>
      <ThemeToggleWrapper />
      <Hero />

      <Footer />
    </>
  );
}

export default App;
