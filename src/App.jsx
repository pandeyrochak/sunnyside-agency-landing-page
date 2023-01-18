import HeroSection from "./components/HeroSection";
import TwoColumnView from "./components/TwoColumnView";
import TwoColumnImageView from "./components/TwoColumnImageView";
import ImagesGrid from "./components/ImagesGrid";
import Footer from "./components/Footer";

function App() {
  const twoColumnData = [
    {
      title: "Transform your brand",
      description:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      imageUrl: "/images/desktop/image-transform.jpg",
      orderReverse: true,
    },
    {
      title: "Stand out to the right audience",
      description:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
      imageUrl: "/images/desktop/image-stand-out.jpg",
      orderReverse: false,
    },
    {
      title: "Graphic design",
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
      imageUrl: "/images/desktop/image-graphic-design.jpg",
      orderReverse: false,
      textOverImage: true,
      title2: "Photography",
      description2:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      imageUrl2: "/images/desktop/image-photography.jpg",
      orderReverse2: false,
      textOverImage2: true,
    },
  ];
  const imagesArray = [
    "/images/desktop/image-gallery-milkbottles.jpg",
    "/images/desktop/image-gallery-orange.jpg",
    "/images/desktop/image-gallery-cone.jpg",
    "/images/desktop/image-gallery-sugarcubes.jpg",
  ];
  return (
    <div className="App">
      <HeroSection />
      {twoColumnData.map((data, index) =>
        data.textOverImage ? (
          <TwoColumnImageView key={index} {...data} />
        ) : (
          <TwoColumnView key={index} {...data} />
        )
      )}
      <ImagesGrid imagesArray={imagesArray} />
      <Footer />
    </div>
  );
}

export default App;
