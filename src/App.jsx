import HeroSection from "./components/HeroSection";
import TwoColumnView from "./components/TwoColumnView";

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
  ];
  return (
    <div className="App">
      <HeroSection />
      {twoColumnData.map((data, index) => (
        <TwoColumnView key={index} {...data} />
      ))}
    </div>
  );
}

export default App;
