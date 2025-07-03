import "./styles/global.css";
import EmailForm from "./components/EmailForm";
import Hero from "./components/Hero";
import { useState, useCallback } from "react";

function App() {
  const [size, setSize] = useState([null, null]);

  const handleRenderSize = useCallback(([height, width]) => {
    setSize([height, width]);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <EmailForm sizeVal={handleRenderSize} />
      <Hero size={size} />
    </div>
  );
}

export default App;
