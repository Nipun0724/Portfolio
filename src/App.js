import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
