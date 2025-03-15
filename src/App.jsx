import Header from "./Components/Header";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css"
import Work from "./Components/Work"


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Work />
      <Education />
      <Services />
      <Contact />
      <Header />
      <Footer />
    </div>
  );
}
export default App;