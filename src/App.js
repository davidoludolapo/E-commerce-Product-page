import { useState } from "react";
import Header from "./components/Header";
import LightBox from "./components/LightBox";
import ProductShowcase from "./components/ProductShowcase";

function App() {
  const [showLightBox, setShowLightBox] = useState(false)
  return (
    <>
      <Header />
      {showLightBox && <LightBox  setShowLightBox={setShowLightBox}/>}
      <ProductShowcase setShowLightBox={setShowLightBox}/>
    </>
  );
}

export default App;
