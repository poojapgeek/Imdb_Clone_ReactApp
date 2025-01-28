import './App.css'
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
import Movies from "./components/movies";
import WatchList from './components/watchList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path='/' element={<><Banner/><Movies/></>} />
     <Route path='/watchList' element={<WatchList/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
