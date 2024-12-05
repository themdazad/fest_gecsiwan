import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes/routes.jsx";
import "./index.css";
// custom fonts 
import "./assets/fonts/fonts.css"
import "./styles/HomeAnimation.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./layout/NavBar.jsx";
import Footer from "./layout/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <BrowserRouter>
      <main className="min-h-screen">
        <NavBar/>
        <Path/>
       <Footer/>
      </main>
    </BrowserRouter>
  </NextUIProvider>
);
