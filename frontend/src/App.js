import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/layout/Header';


import PatientDetail from "./components/patient/PatientDetail";


function App() {
  return (

    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:keyword" component={Home} />
      <Route exact path="/singlepatient/:id" component={PatientDetail}/>

    </Router>


  );
}

export default App;
