import { Route, Routes } from "react-router-dom";
import AppHome from "./components/AppHome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BMI from "./components/tools/bmi";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<AppHome/>}/>
        <Route path="/bmi" element={<BMI/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
