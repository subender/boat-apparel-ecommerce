
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/Home';
import Navigation from './routes/navigation/Navigation';



const Shop  =  ()=> {
    return <h2>i am shop</h2>
}

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
