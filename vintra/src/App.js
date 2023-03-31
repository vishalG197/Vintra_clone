import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Homepage/Navbar";
 import AllRoutes from "./Component/Allroutes";
 import Footer from './Homepage/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
