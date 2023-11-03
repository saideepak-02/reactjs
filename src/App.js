
import './App.css';
import { BrowserRouter,Routes,Link,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Header from './pages/Header';
import Course from './pages/Course';
function App() {
  return (
   <div className='container'>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/aboutus' element={<Aboutus/>}></Route>
     <Route path='/contactus' element={<Contactus/>}></Route>
     <Route path="/course" element={<Course/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
