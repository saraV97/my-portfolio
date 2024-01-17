import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/about";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
