import {createBrowserRouter, RouterProvider , useNavigate} from 'react-router-dom';
import Layout from './assets/Layout';
import Error from './assets/Error';
import Home from './assets/Home';
import Register from './assets/Registertion';
import Login from './assets/Login';

const router = createBrowserRouter([
  {path : '', element :<Layout/>, errorElement : <Error/>, children:[
    {path : '/home', element : <Home/>},
    {path : '/register', element : <Register/>},
    {path : '/Login' , element : <Login/>}
  ]}
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
