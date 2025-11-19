import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbarr";
import MainSection from "./components/MainSection";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChooseUs from "./components/WhyChooseUs";
import PopularLocations from "./components/PopularLocations";
import PropertyTypes from "./components/PropertyTypes";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <MainSection/>
      <FeaturedProperties/>
      <WhyChooseUs />  
       <PopularLocations /> 
       <PropertyTypes /> 
       <Footer />
    </>
  );
}

export default App;
