import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Hero from "./Hero";
import Counter from "./Counter";
import Hero2 from "./Hero_2";
import Card from "./Cards";
import Test from "./Testi";
import Case from "./Case";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Hero />
    <Counter />
    <Hero2 />
    <Card />
    <Test />
    <Case />
    <Footer />
  </StrictMode>
);
