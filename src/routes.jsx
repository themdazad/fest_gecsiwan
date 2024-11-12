import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { ChallangesPage } from './pages/ChallangesPage/ChallangesPage.jsx';
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";

export default function Path() {
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />

      {/* Navigate using navbar  */}
      <Route path="/challanges" element={<ChallangesPage />} />
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
