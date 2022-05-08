
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/Home';
import Navigation from './routes/navigation/Navigation';




function App() {

  return(
    <Routes>
       <Route path='/' element={<Navigation/>} >
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      </Route>
    </Routes>
    
  )
}

export default App;
