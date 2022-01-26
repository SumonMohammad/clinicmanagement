import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./components/Home";
 
 
import PatientDetails from "./components/patient/PatientDetails";
 
function App() {
  return (

    <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/patient/:id" element={<PatientDetails />} />
          
    </Routes>


  );
}

export default App;
