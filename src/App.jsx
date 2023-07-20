import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Winners from "./Pages/Winners/Winners";
import Footer from "./Components/Footer/Footer";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/winners" element={<Winners />} />
            </Routes>
            <Footer/>
         </div>
      </BrowserRouter>
   );
}

export default App;
