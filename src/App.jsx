import "./global.css";
import EmailForm from "./components/EmailForm";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState(null);
  return (
    <div className="relative flex h-screen w-screen flex-col-reverse justify-between lg:flex-row">
      <EmailForm heightVal={(value) => setHeight(value)} />
      <Hero height={height} />
    </div>
  );
}

export default App;
