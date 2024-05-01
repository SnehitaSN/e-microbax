import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Home from "./pages/home/Home";
// import About from "./pages/about/About";
import Facilities from "./pages/facilities/Facilities";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
// import Careers from "./pages/careers/Careers";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
// import Homepage from "./pages/home/Homepage";
import Human from "./pages/products/careproducts/Human";
import Animal from "./pages/products/careproducts/Animal";
import Bioremede from "./pages/products/careproducts/Bioremede";
import Aqua from "./pages/products/careproducts/Aqua";
import Agriculture from "./pages/products/careproducts/Agriculture";
import Vector from "./pages/products/careproducts/Vector";
import Allproducts from "./pages/products/careproducts/Allproducts";
import Enquire from "./pages/products/careproducts/Enquire";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/" element={<Homepage/>} /> */}
        <Route path="/product/human-health-care" element={<Human/>}/>
        <Route path="/product/animal-health-care" element={<Animal/>}/>
        <Route path="/product/bioremediation" element={<Bioremede/>}/>
        <Route path="/product/aquaculture" element={<Aqua/>}/>
        <Route path="/product/agriculture" element={<Agriculture/>}/>
        <Route path="/product/vector-control" element={<Vector/>}/>
        <Route path="/product/all-products" element={<Allproducts/>}/>
        <Route path="/enquire" element={<Enquire/>}/>


        
      

      </Routes>
    </Router>
  );
}

export default App;
