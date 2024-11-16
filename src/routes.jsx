import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import Cricket from "./pages/Events/Cricket.jsx";
import Football from "./pages/Events/Football.jsx";
import Chess from "./pages/Events/Chess.jsx";
import Music from "./pages/Events/Music.jsx";
import Dance from "./pages/Events/Dance.jsx";
import Drama from "./pages/Events/Drama.jsx";
import ArtAndCraft from "./pages/Events/ArtAndCraft.jsx";
import SingleBadminton from "./pages/Events/SingleBadminton.jsx";
import DoubleBadminton from "./pages/Events/DoubleBadminton.jsx";
import StandupComedy from "./pages/Events/StandupComedy.jsx";
import Literature from "./pages/Events/Literature.jsx";
import FunCricket from "./pages/Events/FunCricket.jsx";
import Volleyball from "./pages/Events/Volleyball.jsx";
import Kabaddi from "./pages/Events/Kabaddi.jsx";
import Carrom from "./pages/Events/Carrom.jsx";
import Athletes from "./pages/Events/Athletes.jsx";
import KhoKho from "./pages/Events/KhoKho.jsx";
import TugOfWar from "./pages/Events/TugOfWar.jsx";
import TableTennis from "./pages/Events/TableTennis.jsx";
import Skipping from "./pages/Events/Skipping.jsx";
import { FaTableTennis } from "react-icons/fa";

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
      <Route path="/Events/SingleBadminton" element={<SingleBadminton />} />
      <Route path="/Events/DoubleBadminton" element={<DoubleBadminton />} />
      <Route path="/Events/StandupComedy" element={<StandupComedy />} />
      <Route path="/Events/Literature" element={<Literature />} />
      <Route path="/Events/FunCricket" element={<FunCricket />} />
      <Route path="/Events/Volleyball" element={<Volleyball />} />
      <Route path="/Events/Kabaddi" element={<Kabaddi />} />
      <Route path="/Events/Carrom" element={<Carrom />} />
      <Route path="/Events/Athletes" element={<Athletes />} />
      <Route path="/Events/KhoKho" element={<KhoKho />} />
      <Route path="/Events/TugOfWar" element={<TugOfWar />} />
      <Route path="/Events/TableTennis" element={<TableTennis />} />
      <Route path="/Events/Skipping" element={<Skipping />} />


      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
