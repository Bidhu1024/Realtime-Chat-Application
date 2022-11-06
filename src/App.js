import Register from "./pages/Register";
import "./style.scss";
import Login from './pages/Login';
import { Home } from './pages/Home';

import { AuthContext } from './context/AuthContext';

import {
  Route,
  Routes,
Navigate,
  BrowserRouter,
} from "react-router-dom";
import { useContext } from "react";
function App() {
  const {currentUser} = useContext(AuthContext);


  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/login'/>

    }
    return children
  }
  return (
    <BrowserRouter>
    <Routes>
<Route path="/"/>
<Route index element={

  <ProtectedRoute>
<Home/>
</ProtectedRoute>

}></Route> 
<Route path="login" element={<Login/>}></Route> 
<Route path="register" element={<Register/>}></Route> 
    </Routes>
    </BrowserRouter>


  );
}

export default App;
