import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import Cricket from "./pages/AnnualEvents/EventLists/Cricket.jsx";
import Football from "./pages/AnnualEvents/EventLists/Football.jsx";
import Chess from "./pages/AnnualEvents/EventLists/Chess.jsx";
import Music from "./pages/AnnualEvents/EventLists/Music.jsx";
import Dance from "./pages/AnnualEvents/EventLists/Dance.jsx";
import Drama from "./pages/AnnualEvents/EventLists/Drama.jsx";
import ArtAndCraft from "./pages/AnnualEvents/EventLists/ArtAndCraft.jsx";
import SingleBadminton from "./pages/AnnualEvents/EventLists/SingleBadminton.jsx";
import DoubleBadminton from "./pages/AnnualEvents/EventLists/DoubleBadminton.jsx";
import StandupComedy from "./pages/AnnualEvents/EventLists/StandupComedy.jsx";
import Literature from "./pages/AnnualEvents/EventLists/Literature.jsx";
import FunCricket from "./pages/AnnualEvents/EventLists/FunCricket.jsx";
import Volleyball from "./pages/AnnualEvents/EventLists/Volleyball.jsx";
import Kabaddi from "./pages/AnnualEvents/EventLists/Kabaddi.jsx";
import Carrom from "./pages/AnnualEvents/EventLists/Carrom.jsx";
import Athletes from "./pages/AnnualEvents/EventLists/Athletes.jsx";
import KhoKho from "./pages/AnnualEvents/EventLists/KhoKho.jsx";
import TugOfWar from "./pages/AnnualEvents/EventLists/TugOfWar.jsx";
import TableTennis from "./pages/AnnualEvents/EventLists/TableTennis.jsx";
import Skipping from "./pages/AnnualEvents/EventLists/Skipping.jsx";
import { EventDetails } from "./pages/EventDetails/EventDetails.jsx";

export default function Path() {  
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />
      <Route path="/EventDetails" element={<EventDetails/>} />

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
      <Route path="/Events/Athletes" element={<Athletes />} />
      <Route path="/Events/KhoKho" element={<KhoKho />} />
      <Route path="/Events/TugOfWar" element={<TugOfWar />} />
      <Route path="/Events/TableTennis" element={<TableTennis />} />
      <Route path="/Events/Skipping" element={<Skipping />} />

      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
