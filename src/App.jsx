import toast from "react-hot-toast";
import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  function clickMe() {
    toast.success("I am Curreently Working");
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Comp1></Comp1>}></Route>
        <Route path="/comp2" element={<Comp2></Comp2>}></Route>
        <Route path="/comp3" element={<Comp3></Comp3>}></Route>
      </Routes>
    </>
  );
}

export default App;
