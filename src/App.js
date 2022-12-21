
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
</>
  );
}

export default App;
