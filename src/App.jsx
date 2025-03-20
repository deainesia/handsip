import "./global.css";
import EmailForm from "./components/EmailForm";
import OtpForm from "./components/OtpForm";

function App() {
  return (
    <div className="inline-flex w-screen">
      <EmailForm />
      <OtpForm />
    </div>
  );
}

export default App;
