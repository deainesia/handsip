import "./global.css";
import EmailForm from "./components/EmailForm";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="inline-flex w-screen">
      <EmailForm />
      <Hero />
    </div>
  );
}

export default App;
