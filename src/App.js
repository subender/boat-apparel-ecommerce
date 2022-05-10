
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/signin/SignIn';

const Shop = ()=>{
  return <h2>you are at shope page</h2>
}

function App() {

  return(
    <Routes>
       <Route path='/' element={<Navigation/>} >
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/signin' element={<SignIn/>} />
      </Route>
    </Routes>
    
  )
}

export default App;
