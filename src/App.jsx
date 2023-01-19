import HeroSection from "./components/HeroSection";
import TwoColumnView from "./components/TwoColumnView";
import TwoColumnImageView from "./components/TwoColumnImageView";
import ImagesGrid from "./components/ImagesGrid";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import {
  twoColumnData,
  imagesArray,
  testimonialsList,
} from "./data/SectionText";

function App() {
  return (
    <div className="App overflow-hidden">
      <HeroSection />
      {twoColumnData.map((data, index) =>
        data.textOverImage ? (
          <TwoColumnImageView key={index} {...data} />
        ) : (
          <TwoColumnView key={index} {...data} />
        )
      )}
      <Testimonials testimonialsList={testimonialsList} />
      <ImagesGrid imagesArray={imagesArray} />
      <Footer />
    </div>
  );
}

export default App;
