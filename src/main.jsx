import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import "./index.css";
import "./styles/HomeAnimation.css";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.jsx";
import NavigationBar from "./components/Nav/NavigationBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <BrowserRouter>
      <main className="dark:dark text-foreground">
        <NavigationBar />
        <Path /> {/* Router */}
        <Footer />
      </main>
    </BrowserRouter>
  </NextUIProvider>
);
