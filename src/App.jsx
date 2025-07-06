import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { LandingPageLayout } from "./layouts/LandingPageLayout";
import { Shop } from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<Login />} />
        <Route path="blog" element={<Login />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
