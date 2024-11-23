import { Routes, Route } from "react-router-dom";
// Pages 
import Gallery from "./pages/Gallery";
import Compass from "./pages/Compass";
import { Layout } from "./layout";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import EventSchedule from "./pages/EventSchedule";
import LiveUpdatesCard from "./pages/LiveUpdatesCard";
import Cricket from "./pages/AnnualEvents/EventLists/Cricket.jsx";
import Football from "./pages/AnnualEvents/EventLists/Football.jsx";
import Chess from "./pages/AnnualEvents/EventLists/Chess.jsx";
import Singing from "./pages/AnnualEvents/EventLists/Singing.jsx";
import Running from "./pages/AnnualEvents/EventLists/Running.jsx";
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
import Pubg from "./pages/AnnualEvents/EventLists/Pubg.jsx";
import FreeFire from "./pages/AnnualEvents/EventLists/FreeFire.jsx";
import { EventDetails } from "./pages/EventDetails/EventDetails.jsx";

const events = [
  { path: "/Events/Carrom", component: Carrom },
  { path: "/Events/Kabaddi", component: Kabaddi },
  { path: "/Events/Cricket", component: Cricket },
  { path: "/Events/Football", component: Football },
  { path: "/Events/Chess", component: Chess },
  { path: "/Events/Singing", component: Singing },
  { path: "/Events/Running", component: Running },
  { path: "/Events/Dance", component: Dance },
  { path: "/Events/Drama", component: Drama },
  { path: "/Events/ArtAndCraft", component: ArtAndCraft },
  { path: "/Events/SingleBadminton", component: SingleBadminton },
  { path: "/Events/DoubleBadminton", component: DoubleBadminton },
  { path: "/Events/StandupComedy", component: StandupComedy },
  { path: "/Events/Literature", component: Literature },
  { path: "/Events/FunCricket", component: FunCricket },
  { path: "/Events/Volleyball", component: Volleyball },
  { path: "/Events/Athletes", component: Athletes },
  { path: "/Events/KhoKho", component: KhoKho },
  { path: "/Events/TugOfWar", component: TugOfWar },
  { path: "/Events/TableTennis", component: TableTennis },
  { path: "/Events/Skipping", component: Skipping },
  { path: "/Events/Pubg", component: Pubg },
  { path: "/Events/FreeFire", component: FreeFire },
];

export default function Path() {  
  return (
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/compass" element={<Compass />} />
    <Route path="/EventDetails" element={<EventDetails />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/event-schedule" element={<EventSchedule />} />
    <Route path="/liveupdates-card" element={<LiveUpdatesCard />} />
  
    {/* Gallery Route */}
    <Route path="/gallery" element={<Gallery />} />
  
    {/* Event Routes */}
    {events.map((event, index) => (
      <Route key={index} path={event.path} element={<event.component />} />
    ))}
  </Routes>
  

    
  );
}
