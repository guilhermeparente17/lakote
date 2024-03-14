import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Hero />
    </>
  );
}

export default App;
