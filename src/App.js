import "./App.css";
import Leftbar from "./component/leftbar/Leftbar";
import Navbar from "./component/navbar/Navbar";
import Rightbar from "./component/rightbar/RIghtbar";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { DarkmodeContext } from "./Context/DarkModeContext";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Authcontext, AuthcontextProvider } from "./Context/AuthContext";
import Chat from "./component/Chatbox/Chat";

function App() {

  const {currentUser} = useContext(Authcontext) 
  const {darkMode} = useContext(DarkmodeContext)
  console.log(darkMode);
  
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "light" :"light"}`}>
        <AuthcontextProvider>
          <Navbar/>
        </AuthcontextProvider>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{ flex: 6 }}>
              <Outlet />
            </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

 
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/"/>
    }
    return children;
  }

  const router= createBrowserRouter([
    {
      path:"/",
      element:[
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ],
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
        {
          path:"/chat",
          element:<Chat/>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
