import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import "./index.css";
import "./styles/HomeAnimation.css";
import { BrowserRouter } from "react-router-dom";
import { Footer} from "./components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <NextUIProvider>
      <BrowserRouter>
      <main className="dark:dark text-foreground bg-background bg-[url('/images/blur_bg.png')] bg-cover">
    
        <Path />  {/* Router */}
        <Footer/>
      </main>
  </BrowserRouter>
    </NextUIProvider>
);
