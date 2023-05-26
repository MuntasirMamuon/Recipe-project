import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import Main from "../Pages/Home/Main/Main";
import RecepiDetails from "../Pages/Home/RecipeDetails/RecepiDetails";
import PrivetRoute from "./PrivetRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }

        
      ]
      
    },
    {
      path:'recipe',
      element:<Main></Main>,
      children:[
        {
          path:':id',
          element:<PrivetRoute><RecepiDetails></RecepiDetails></PrivetRoute>,
          loader:({params})=> fetch(`http://localhost:5000/recipe/${params.id}`)
        }
      ]
    }
   
  ]);
export default router;