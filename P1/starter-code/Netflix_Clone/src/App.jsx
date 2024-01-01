import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import './App.css';

function App() {

  return (
    <>
      <div>
       <Sidebar />
       <Outlet />
      </div>
    </>
  )
}

export default App
