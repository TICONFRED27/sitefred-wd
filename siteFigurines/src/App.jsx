import {} from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Acceuil from "./pages/Acceuil/Acceuil";
import Ateliers from "./pages/Ateliers/Ateliers";

function App() {
  return (
    <>
      <Navbar />
      <Acceuil />
      <Ateliers />
    </>
  );
}

export default App;
