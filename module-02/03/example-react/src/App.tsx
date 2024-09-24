import JumbotronSection from "./pages/jumbotronSection";
import ContactUsSection from "./pages/contactUsSection";
import TestimoniSection from "./pages/testimoniSection";
import "./App.css";

function App() {
  return (
    <div>
      <div>Navbar</div>
      <div>
        <h2>First React</h2>
        <JumbotronSection name={"Bryan"} />
        <ContactUsSection />
        <TestimoniSection />
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
