import "./global.css";
import EmailForm from "./components/EmailForm";
import Hero from "./components/Hero";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [size, setSize] = useState([null, null]);

  const handleRenderSize = useCallback(([height, width]) => {
    setSize([height, width]);
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col-reverse justify-between lg:flex-row">
      <EmailForm sizeVal={handleRenderSize} />
      <Hero size={size} />
    </div>
  );
}

export default App;
