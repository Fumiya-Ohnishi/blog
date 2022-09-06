import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './compoments/Home';
import CreatePost from './compoments/CreatePost';
import Login from './compoments/Login';
import Logout from './compoments/Logout';
import Navber from './compoments/Navber';
import { useState } from 'react';

function App() {

  const [ isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))

  return (
    <Router>
      <Navber isAuth= {isAuth}/>
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/createpost" element={<CreatePost isAuth = {isAuth} />}></Route>
        <Route path = "/login" element={<Login setIsAuth= {setIsAuth} />}></Route>
        <Route path = "/logout" element={<Logout setIsAuth= {setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
