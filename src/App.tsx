import { PageTitle } from "./components/PageTitle";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ThemeToggleWrapper } from "./components/ThemeToggleWrapper";
import "./App.css";
import { SiteTracker } from "./components/SiteTracker";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <PageTitle />
      <ThemeToggleWrapper />
      <Hero />
      <SiteTracker />
      <Footer />
    </>
  );
}

export default App;
