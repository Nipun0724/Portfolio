import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
