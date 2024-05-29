import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>  /* Default home* page ,this is where the default page reroutes to */
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
/* remember to change permissions to room:all */