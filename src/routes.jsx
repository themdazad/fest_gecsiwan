import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { Events } from "./pages/Events/pages.jsx";

export default function Path() {
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />

      {/* Navigate using navbar  */}
      <Route path="/Events" element={<Events />} />
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
