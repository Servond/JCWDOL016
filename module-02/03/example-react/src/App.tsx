import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="dashboard">
            <Route path="" element={<JumbotronSection name="Bryan" />} />
            <Route path="testimoni" element={<TestimoniSection />} />
          </Route>
          <Route path="contact-us" element={<ContactUsSection />} />
        </Routes>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
