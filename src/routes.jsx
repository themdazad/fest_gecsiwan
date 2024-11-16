import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import Carrom from "./pages/Events/Carrom.jsx";
import Kabaddi from "./pages/Events/Kabaddi.jsx";
import Cricket from "./pages/Events/Cricket.jsx";
import Football from "./pages/Events/Football.jsx";
import Chess from "./pages/Events/Chess.jsx";
import Music from "./pages/Events/Music.jsx";
import Dance from "./pages/Events/Dance.jsx";
import Drama from "./pages/Events/Drama.jsx";
import ArtAndCraft from "./pages/Events/ArtAndCraft.jsx";
import StandupComedy from "./pages/Events/StandupComedy.jsx";

export default function Path() {  
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />

      {/* Navigate using navbar  */}
      {/* All event routes  */}
      <Route path="/Events/Carrom" element={<Carrom />} />
      <Route path="/Events/Kabaddi" element={<Kabaddi />} />
      <Route path="/Events/Cricket" element={<Cricket />} />
      <Route path="/Events/Football" element={<Football />} />
      <Route path="/Events/Chess" element={<Chess />} />
      <Route path="/Events/Music" element={<Music />} />
      <Route path="/Events/Dance" element={<Dance />} />
      <Route path="/Events/Drama" element={<Drama />} />
      <Route path="/Events/ArtAndCraft" element={<ArtAndCraft />} />
      <Route path="/Events/StandupComedy" element={<StandupComedy />} />


      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
